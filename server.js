const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const LEADS_FILE = path.join(__dirname, "leads.json");
const BOT_URL = process.env.BOT_URL || ""; // e.g. https://mizhi-bot.onrender.com

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// Home — serve landing page
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "landing-page.html"));
});

// Signup handler
app.post("/api/signup", async (req, res) => {
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

  // Always save locally
  let leads = [];
  try {
    leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
  } catch (_) {}
  leads.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

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

  console.log(`[signup] ${businessName} <${contactEmail}> — ${plan || "no plan"}`);

  res.status(201).json({ ok: true, message: "Thanks! We'll reach out within 24 hours." });
});

app.listen(PORT, () => {
  console.log(`[landing] mizhi-bot landing page running on port ${PORT}`);
});
