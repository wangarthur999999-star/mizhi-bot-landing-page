const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const LEADS_FILE = path.join(__dirname, "leads.json");
const LEADS_TMP = path.join(__dirname, "leads.tmp.json");
const BOT_URL = process.env.BOT_URL || ""; // e.g. https://mizhi-bot.onrender.com

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// Simple in-memory rate limiter: max 5 signups per IP per hour
const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// Cleanup old rate limit entries every 10 minutes
setInterval(() => {
  const cutoff = Date.now() - RATE_LIMIT_WINDOW;
  for (const [ip, entry] of rateLimitMap) {
    if (entry.windowStart < cutoff) rateLimitMap.delete(ip);
  }
}, 10 * 60 * 1000);

// Home — serve landing page
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "landing-page.html"));
});

// Signup handler
app.post("/api/signup", async (req, res) => {
  const ip = req.ip || req.socket?.remoteAddress || "unknown";
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const { businessName, contactEmail, contactPhone, industry, plan, message } = req.body;

  if (!businessName || !contactEmail) {
    return res.status(400).json({ error: "businessName and contactEmail are required" });
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    return res.status(400).json({ error: "contactEmail format is invalid" });
  }

  const lead = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    businessName,
    contactEmail,
    contactPhone: contactPhone || "",
    industry: industry || "",
    plan: plan || "",
    message: message || "",
    source: "landing-page",
    createdAt: new Date().toISOString(),
  };

  // Atomic save: write to temp file, then rename
  let leads = [];
  try {
    leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
  } catch (_) {}
  leads.push(lead);
  fs.writeFileSync(LEADS_TMP, JSON.stringify(leads, null, 2));
  fs.renameSync(LEADS_TMP, LEADS_FILE);

  // Forward to bot if configured
  if (BOT_URL) {
    try {
      await fetch(`${BOT_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });
    } catch (_) {
      // Bot may be offline — lead is already saved locally, fine to drop
    }
  }

  console.log(`[signup] ${businessName} — ${plan || "no plan"}`);

  res.status(201).json({ ok: true, message: "Thanks! We'll reach out within 24 hours." });
});

app.listen(PORT, () => {
  console.log(`[landing] mizhi-bot landing page running on port ${PORT}`);
});
