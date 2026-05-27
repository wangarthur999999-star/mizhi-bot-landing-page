# Product Hunt 发布物料

## 发布策略

- **发布时间**：周二/周三 00:01 PST (Suriname 04:01 AM) — PH 日榜按 PST 计算，凌晨发布最大化全天曝光
- **不买票**：PH 机制下真实 upvote 才有意义，买票会被清
- **不刷票**：自然流量 + 自己圈子正常支持就行

---

## Tagline (60 chars max)

```
AI Receptionist for WhatsApp & Telegram — 24/7 booking, replies, lead scoring
```

---

## Description (260 chars max)

```
mizhi-bot handles your WhatsApp & Telegram inquiries 24/7 in 4 languages. 
Answers FAQs, books appointments, syncs with Google Calendar, and scores 
leads automatically. Built for small service businesses — beauty clinics, 
barbershops, gyms. One-click onboarding, $49/month. Already live in Suriname.
```

---

## First Comment (最重要的转化工具)

```
Hey PH! Arthur here, solo maker from Suriname 🇸🇷

The problem: My friend runs a beauty clinic. She was spending 3+ hours a day 
replying to WhatsApp. "How much?", "Do you have slots tomorrow?", "Where are 
you?". Same 20 questions, every single day. She almost hired a receptionist 
just for WhatsApp — $400/month.

So I built mizhi-bot. It now handles ALL of it:
- Auto-replies to FAQ in 4 languages (Chinese, English, Dutch, Spanish)
- Books appointments → syncs to Google Calendar
- Scores leads so you know who's serious
- Works on WhatsApp AND Telegram

Technical details for the HN crowd:
- Multi-agent architecture: Message → Guard → Triage → Specialist → Reply
- 3-phase intent classification (regex → keywords → AI function calling)
- Per-agent circuit breakers + provider fallback (DeepSeek → Mistral → OpenRouter)
- 344 tests, 5 security audits, zero-dependency SQLite backend

The crazy part: She went from 50+ manual replies/day to <5. 
Her exact words: "I check my phone half as much now."

I'm keeping it simple:
- $49/month base
- $99/month with Google Calendar sync + lead scoring
- 14-day free trial, cancel anytime
- First 5 customers get onboarding call + config setup personally

If you run a small service business and WhatsApp is eating your time, 
hit "Get it" and I'll set you up personally this week.

AMA about: building multi-agent bots, WhatsApp Business API alternatives, 
or running a SaaS from South America on a budget.
```

---

## 图片准备

### 截图 1: 对话示例 (中文)
真实 WhatsApp 对话截图：客户问价格 → bot 自动回复 → 引导预约

### 截图 2: Dashboard
Dashboard 截图：今天的预约列表 + 统计数据 + lead 评分

### 截图 3: Google Calendar
自动同步到 Google Calendar 的截图

### 截图 4: 多语言
同一段对话的中/英/荷/西四个版本截图

---

## 视频脚本 (60 秒)

```
0:00-0:05  "This is what a busy clinic owner deals with every day."
           [WhatsApp 消息爆炸的动画]

0:05-0:15  "50+ messages. Same questions. 'How much?' 'Available tomorrow?' 
           'Where are you?' Every. Single. Day."

0:15-0:30  "Here's how mizhi-bot handles it:"
           [屏幕录制: 消息进来 → AI 自动回复 → 预约 → Calendar 同步]

0:30-0:45  "4 languages. 24/7. Appointments synced to Google Calendar. 
           Lead scoring built in."

0:45-0:55  "From 50 manual replies a day to under 5. $49 a month."

0:55-1:00  "14-day free trial. Link in bio."
```

---

## Maker Profile 优化

- Name: Arthur Wang
- Bio: Solo maker building AI tools for small businesses. Currently in Suriname 🇸🇷. Previously built [X].
- Twitter/Website linked: mizhi-bot-landing.onrender.com

---

## 发布日 checklist

- [ ] Landing page 已部署且可访问
- [ ] 截图 4 张已准备好
- [ ] Demo 视频已上传 YouTube/Vimeo（嵌入 PH gallery）
- [ ] First comment 已写好（发布后立刻贴上去）
- [ ] 通知 mizhi 客户发布日帮忙 upvote
- [ ] 准备好回复每条评论（PH 排名的关键信号是 comment engagement）
- [ ] Twitter/Indie Hackers 同步发帖引流到 PH
