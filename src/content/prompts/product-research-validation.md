---
title: "Product Research & Validation Prompts"
description: "5 copy-paste AI prompts for validating a product idea: pain point analysis, community scanning, market viability, competitive research, and pricing strategy"
category: "Product Development"
tags: ["product-research", "validation", "market-analysis", "pricing", "AI-prompts"]
prompt: |
  ## 1. Pain Point Analysis

  Here's a thread from [community name] where people are discussing [topic].
  [Paste the thread text or upload screenshots]

  Analyze this thread and tell me:
  1. What is the core pain point people are describing?
  2. How many distinct people are expressing this pain?
  3. What manual workarounds are they currently using?
  4. Has anyone built a homegrown solution? What was the community response?
  5. What emotional language are they using? (exact quotes)
  6. Is this a problem that compounds over time?
  7. Based on this thread alone, would you say this is a validated pain point worth building for?

  ## 2. Community Landscape Scan

  I'm exploring building a tool for [community]. The pain point is [problem].

  Search for:
  1. Where does this community hang out online? (specific subreddits, Facebook groups, forums, Discord servers)
  2. How large is this community approximately?
  3. What tools do they already pay for? At what price points?
  4. Are there any existing tools that attempt to solve this specific problem?
  5. Who are the top 5 content creators (YouTubers, bloggers) serving this audience?

  ## 3. Market Viability Assessment

  I want to build [one-sentence product description] for [target audience].

  Here's my evidence the pain is real:
  [Paste 3-5 quotes from community threads]

  Be brutally honest. Evaluate:
  1. Is this pain real enough that people will pay to solve it, or will they just keep using workarounds?
  2. How big is the addressable market? (estimate number of potential users)
  3. What's the willingness to pay? Based on what this community already buys, what price point makes sense?
  4. What's the biggest risk? (build risk, market risk, distribution risk, or competition risk?)
  5. Is this a $10K side project, a $100K business, or neither? Why?

  ## 4. Competitive Landscape Deep Dive

  I'm building [product description] for [audience].

  Search for every existing tool, app, or solution that attempts to solve [problem]. Check Product Hunt, AlternativeTo, GitHub, the community's own recommendation threads, app stores, and general web search.

  For each tool you find, tell me:
  1. What it does
  2. How it's priced
  3. When it was last updated (is it abandoned?)
  4. Why it doesn't fully solve the problem I described
  5. What reviews say about it (if available)

  If nothing exists, explain why you think no one has built this yet.

  ## 5. Pricing Strategy

  I'm building [product] for [audience].

  This community currently pays:
  - [Tool A] at $[price] ([one-time/subscription])
  - [Tool B] at $[price] ([one-time/subscription])

  They have strong subscription fatigue / are used to subscriptions (pick one).

  Recommend a pricing strategy:
  1. One-time purchase, subscription, or freemium? Why?
  2. Specific price point and why
  3. Early bird vs. standard pricing?
  4. Should there be a free trial? How long?
  5. Is there an annual update fee model that would work?
useCase: "Validate a product idea before writing any code by analyzing real community pain points, market size, competition, and optimal pricing"
publishDate: 2026-01-15
relatedProjects:
  - maker-vault
---

These 5 prompts are the research foundation of the 48-Hour Product Playbook. Replace everything in [brackets] with your specifics. Run them in order before writing a single line of code. The goal is to kill bad ideas fast and sharpen good ones before any commitment.
