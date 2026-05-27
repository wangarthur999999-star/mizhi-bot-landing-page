# Indie Hackers Launch — mizhi-bot

**Post type:** Launch / Milestone
**Groups:** Indie Hackers, r/SaaS, r/SideProject

---

## Post #1: Launch Day — "I turned my friend's WhatsApp into an AI receptionist"

**Title:** I built an AI receptionist for WhatsApp that handles 80% of inquiries without a human

**Body:**

My friend runs a beauty clinic in Paramaribo, Suriname. Every night, she was losing 3-5 bookings because inquiries came in on WhatsApp after hours and she couldn't reply until morning.

So I built her an AI agent.

**What it does:**
- Plugs into WhatsApp (no Business API needed — uses the web protocol)
- Auto-detects language (Chinese, English, Dutch, Spanish) and replies in that language
- Answers pricing questions from a knowledge base (never hallucinates)
- Books appointments directly to Google Calendar
- Scores leads (hot / warm / cold) based on conversation intent
- Runs automated follow-ups at Day 0, 3, 7, and 30 post-visit

**Results after a few months:**
- ~80% of WhatsApp conversations handled entirely by the bot
- Zero missed bookings from after-hours inquiries
- Follow-up automation brought back 3 repeat clients in the first month

**Tech stack:** Node.js, Baileys (WhatsApp Web protocol), DeepSeek AI, SQLite, Google Calendar API.

**Why I'm turning it into a SaaS:**
The core product works. It's proven. 225 tests, 5 security audits, real production traffic. Now I'm packaging it so any small service business can use it — clinics, salons, gyms, barbershops, restaurants.

**Pricing:** $49/month. 7-day free trial. No credit card.

**What I'd love from this community:**
- Would you pay for this? If not, why?
- What channel should I add next? (Facebook Messenger? iMessage?)
- Any IHers who've sold to small service businesses? What worked?

---

## Post #2: Week 2 Update — "First paying customer + what I learned"

**Title:** Update: My $49/mo WhatsApp AI bot got its first customer. Here's what worked.

**Body:**

Two weeks ago I launched mizhi-bot on Indie Hackers — an AI receptionist for WhatsApp and Telegram.

**Quick recap:** It auto-replies to customer inquiries, books appointments, scores leads, and runs follow-ups. $49/month. Built it for my friend's beauty clinic, then SaaS-ified it.

**What happened since launch:**
- [Fill in: number of leads, conversations, demos]
- [Fill in: first customer details]
- [Fill in: what channel converted]

**What I learned:**
1. [Fill in: biggest learning about customer acquisition]
2. [Fill in: what customers actually care about vs what I thought]
3. [Fill in: pricing reaction]

**What's next:**
- [Fill in: next feature or channel priority]

---

## Post #3: Month 1 Revenue Update

**Title:** mizhi-bot Month 1: $X MRR, Y customers. The honest numbers.

**Body:**

Full transparency on my first month running mizhi-bot as a SaaS.

**Numbers:**
| Metric | Value |
|--------|-------|
| MRR | $X |
| Customers | Y |
| Churn | Z |
| Trials started | W |
| Trial → Paid | V% |

**Where customers came from:**
1. [Channel 1] — X customers
2. [Channel 2] — Y customers
3. [Channel 3] — Z customers

**Biggest surprise:**
[Fill in]

**Biggest mistake:**
[Fill in]

**Next month goal:**
[Fill in]

---

## Relevant IH Groups & Subreddits

| Platform | Link | Notes |
|----------|------|-------|
| Indie Hackers | https://indiehackers.com/ | Main post |
| r/SaaS | https://reddit.com/r/SaaS/ | Cross-post |
| r/SideProject | https://reddit.com/r/SideProject/ | Lighter version |
| r/SmallBusiness | https://reddit.com/r/smallbusiness/ | Customer perspective |
| Hacker News | https://news.ycombinator.com/ | Show HN format |

---

## Show HN Post (Hacker News)

**Title:** Show HN: mizhi-bot — AI receptionist for WhatsApp & Telegram ($49/mo)

**Body:** (similar to Indie Hackers but more technical)

I built an AI agent that runs as a WhatsApp/Telegram receptionist for small service businesses. It uses the Baileys library (WhatsApp Web protocol — no Business API costs) and DeepSeek for natural language understanding.

**Technical details:**
- WhatsApp connection via @whiskeysockets/baileys v7 (no official API fees)
- AI intent classification + response generation via DeepSeek (costs ~$0.14/1M tokens, so a clinic spends about $5-15/month on AI)
- SQLite for persistence (conversations, bookings, lead scores)
- Google Calendar API for real-time appointment sync
- Express dashboard with webhook support (NOWPayments crypto payments)
- Multi-tenant config system (per-business configs + isolated databases)

**What makes it interesting technically:**
- Circuit breaker pattern on AI calls (3 failures → 5min open)
- HMAC-SHA512 signature verification for payment webhooks
- Multi-stage conversation state machine (profile → booking → payment → follow-up)
- 4-language auto-detect with per-language FAQ knowledge bases

Happy to answer questions about the architecture or the business side!
