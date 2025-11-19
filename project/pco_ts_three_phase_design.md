# Planning Center Trust & Safety Classifier — Three‑Phase System

## Why This Was Built in Three Phases

Running Trust & Safety analysis on **every incoming ticket** demands a design that balances speed, cost, and accuracy without overwhelming the LLM or generating false alarms. Splitting the classifier into three passes gives us the best trade‑offs.

### Speed

Most tickets are harmless. Phase 1 lets the model make a fast, cheap judgment about whether the message *might* be Trust & Safety–related. Only the small fraction of suspicious tickets move on to deeper analysis.

### Cost Control

LLM usage scales with tokens. Instead of running a heavy, context‑rich classifier on every message, the system uses:

- **Phase 1:** ultra‑light, ultra‑cheap pre‑scan
- **Phase 2:** deeper Planning Centepecific classification only for tickets flagged by Phase 1
- **Phase 3:** small, structured output to pass to automations or risk workflows

This architecture keeps your monthly LLM bill predictable.

### Redundancy & Accuracy

Security work benefits from redundancy. Two independent classification checkpoints dramatically reduce:

- false positives (mislabeling normal support as T&S)
- false negatives (missing impersonation, data exposure, or scam attempts)

The model must say "YES" twice before a ticket is flagged as Trust & Safety. This protects both the team and the customer experience.

### LLM Model

Anthropic **Claude 4.5 Haiku** is the recommended model for this system because it balances speed, cost, and safety-critical accuracy better than peers.

**Why Haiku 4.5 over OpenAI or Gemini:**

- Haiku is engineered for **high‑volume classification**, delivering extremely low latency and very low per‑token cost — ideal for running on *every incoming ticket*.
- Claude models, including Haiku, demonstrate particularly strong performance in **hallucination resistance**, which is essential for Trust & Safety workflows where false positives are disruptive and false negatives are dangerous.
- Haiku excels at **structured extraction** and **adhering to schema**, which helps ensure the classifier consistently outputs clean 0/1 flags and JSON.
- Unlike some models optimized for creativity or long‑form reasoning, Haiku is optimized for **fast, deterministic decision‑making**, which pairs naturally with the three‑phase architecture.
- Compared to OpenAI’s fast models (e.g., GPT‑4o Mini) or Gemini Flash, Haiku tends to be more conservative and safer in **edge‑case security scenarios**, reducing noisy escalations.

Overall, Haiku provides the precise blend of **speed, cost‑efficiency, and reliability** needed for Planning Center’s continuous T&S scanning.

---

# Flow Map

```
                           ┌──────────────────────────┐
                           │   Incoming Ticket Text    │
                           └──────────────┬───────────┘
                                          │
                                          ▼
                 ┌────────────────────────────────────────────────┐
                 │ PHASE 1 — Identify Trust & Safety Indicators   │
                 │ (Scan for ANY Planning Center specific threat) │
                 └──────────────┬─────────────────────────────────┘
                                │
             ┌──────────────────┼────────────────────┐
             ▼                                       ▼
 ┌────────────────────────┐              ┌──────────────────────────┐
 │ ts_flag_phase1 = 1     │              │ ts_flag_phase1 = 0        │
 │ Threat Indicators Found│              │ No Threat Indicators Found│
 └──────────────┬─────────┘              └────────────┬──────────────┘
                │                                      │
                ▼                                      ▼
 ┌──────────────────────────────────┐        ┌──────────────────────────┐
 │ Proceed to Phase 2               │        │ CLASSIFY = Not T&S       │
 │ (Check for false positives)      │        │ OUTPUT: {is_ts:0}        │
 └──────────────────┬───────────────┘        └──────────────────────────┘
                    │
                    ▼
       ┌───────────────────────────────────────────┐
       │ PHASE 2 — NOT Trust & Safety Indicators    │
       │ (Filter out harmless & normal support)     │
       └──────────────────┬────────────────────────┘
                           │
             ┌─────────────┼───────────────────────────┐
             ▼                                             ▼
 ┌──────────────────────────────┐             ┌──────────────────────────┐
 │ ts_flag_phase2 = 1           │             │ ts_flag_phase2 = 0        │
 │ Still suspicious after filter│             │ Benign / Normal Ticket    │
 └──────────────┬───────────────┘             └────────────┬──────────────┘
                │                                               │
                ▼                                               ▼
     ┌───────────────────────────────────┐           ┌──────────────────────────┐
     │ Proceed to Phase 3                │           │ CLASSIFY = Not T&S       │
     │ (Final structured output)         │           │ OUTPUT: {is_ts:0}        │
     └──────────────────┬────────────────┘           └──────────────────────────┘
                        │
                        ▼
        ┌──────────────────────────────────────────────┐
        │ PHASE 3 — Final Classification Output         │
        │ (Only if Phase 1 = 1 AND Phase 2 = 1)         │
        └──────────────────┬────────────────────────────┘
                           │
                           ▼
              ┌───────────────────────────────────────────┐
              │ OUTPUT JSON                                │
              │ {                                          │
              │   "is_ts": 1,                              │
              │   "category": "<T&S category>",            │
              │   "confidence": "<0–1 or low/med/high>"    │
              │ }                                          │
              └──────────────────┬────────────────────────┘
                                 │
                                 ▼
                 ┌───────────────────────────────────────┐
                 │ ROUTE to Trust & Safety Queue          │
                 │ (Only confirmed cases)                 │
                 └───────────────────────────────────────┐

```

---

You are a Planning Center Trust & Safety detector.

Analyze the following customer message and determine whether it contains any Planning Center specific Trust & Safety risks.

Flag as T&S (1) if the message contains **any** of the following:

A. Impersonation / Social Engineering
- Impersonating pastor, staff, volunteer
- Scam messages pretending to be leadership
- Someone asking to change another person’s contact/login info
- Someone requesting Directory access while pretending to be staff or a congregant

B. Profile Takeover Indicators
- Claims of compromised profiles
- Unexpected login activity
- Someone gaining access to another person’s profile
- Suspicious changes to profile data or permissions

C. Suspicious Access Requests
- Requests for Directory access
- Requests to merge profiles where identity is unclear
- Suspicious or unknown people requesting to join Groups
- Unrecognized new profiles joining Groups

D. Scam Patterns
- Scam texts/emails involving Planning Center or pastors
- Phishing resembling Planning Center login
- Messages demanding money, gift cards, or private info

E. Suspicious Email / Login Block Indicators
- “I’m not receiving my login code”
- “My congregants are receiving strange messages”
- “I’m receiving suspicious group join requests”
- Issues consistent with the Suspicious Email Address List

F. Data Exposure Risks
- Directory shared insecurely
- Overly broad Directory or Group visibility
- Over-permissioned roles exposing member info
- Unrecognized individuals seeing private data

If ANY of these appear → respond:

{ "ts_flag_phase1": "1:E" }

If none appear → respond:

{ "ts_flag_phase1": 0 }

```



Return only 0 or 1.

```
You are a Planning Center Trust & Safety false-positive filter.

Review the message and determine if it should NOT be routed to Trust & Safety.

Do NOT classify as T&S if the issue is ONLY:

Normal Support or Admin Tasks
- Feature questions, billing, scheduling, volunteers
- Password resets without impersonation concerns
- Login method confusion without suspicious behavior
- 2SV trouble with no sign of abuse
- General confusion: “I can’t find my group,” etc.
- Emotional or frustrated tone without a threat pattern

Non-malicious Login Issues
- Mistyped email or phone number
- New device or phone number
- Confusion about login codes without any impersonation risk

Benign Church Center Questions
- Event, calendar, registration, QR code, workflow questions
- Group-related questions with no suspicious join attempts

Benign Profile Changes
- User correcting their own info
- No identity uncertainty, no request involving another person

If the message fits ANY of these benign categories → it is NOT T&S.

Respond:

{ "ts_flag_phase2": 0 }

If none of these benign cases apply, and the earlier T&S concerns still stand → respond:

{ "ts_flag_phase2": 1 }

OUTPUT FORMAT (strict): { "ts_flag": 0 or 1, "category": "A/B/C/D/E/F or none", "confidence": low | medium | high }
```



```
You are generating the final Trust & Safety classification.

Provide output in exactly this JSON format:

{
  "is_ts": 1,
  "category": "impersonation | takeover | suspicious_access | scam | suspicious_login | data_exposure",
  "confidence": "low | medium | high"
}

Rules:
- “category” must match the dominant Planning Center threat vector from Phase 1.
- “confidence” reflects how clearly the message fits that category.
}
```

