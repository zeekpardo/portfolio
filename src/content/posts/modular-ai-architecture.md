---
title: "Why I Stopped Building One Giant Prompt"
publishDate: 2026-03-12T12:00:00Z
description: "How I learned to architect conversational AI systems with modular objectives instead of cramming everything into a single massive prompt."
tags: ["ai-architecture", "prompt-engineering", "conversational-ai", "chatbots"]
cover:
  src: './images/modular-ai/cover.webp'
---

I used to do what everyone does when they build an AI chatbot. Stuff everything into one prompt. Every instruction, every edge case, every guardrail, every personality trait. One massive wall of text and then hope the model figures it out.

It works fine for simple stuff. A customer service bot that answers FAQs? Sure, one prompt is enough. But the moment you need the AI to actually guide someone through a multi-step process with branching logic across different contexts, that approach falls apart fast.

I learned this the hard way.

## The project that broke my approach

I was building a conversational AI coach for an international nonprofit. The system needed to guide grant applicants through a structured evaluation process via WhatsApp. Sounds straightforward until you look at the requirements:

- 11 languages with automatic detection
- 4-5 grant categories, each with different evaluation criteria
- 20+ total criteria the AI needed to assess
- Applicants with wildly varying levels of proposal quality
- Users in regions with poor internet connectivity on basic smartphones
- The AI needed to coach weak proposals into stronger ones, not just collect data

My first instinct was the same as always. One big prompt. I wrote out all the grant categories, all the criteria, the coaching instructions, the language handling, the demographic capture, the tone guidelines. It was massive.

And it was a mess.

## What went wrong

The AI would start evaluating criteria from the wrong grant category. It would forget what it had already asked about. It would get derailed when a user went off topic and never find its way back. The longer the conversation went, the worse it got. Context window pollution is real, and when you're asking a model to juggle 20+ criteria across multiple categories while coaching in Swahili, things degrade quickly.

The fundamental problem: I was asking the AI to hold too many objectives in its head at once. Just like a human would struggle to simultaneously evaluate a proposal across every dimension while also coaching, detecting language, capturing demographics, and staying on topic.

## The fix: objective-based architecture

I broke the system into modular objectives. Each conversation stage has one job. One focused context. One clear goal.

Instead of one prompt that says "evaluate everything and coach the applicant and detect their language and capture demographics and stay on topic," I designed a flow where:

**Stage 1** handles language detection and initial context. That's it. Detect the language, greet them appropriately, set expectations.

**Stage 2** captures demographic information through natural conversation. Not a form. Just questions woven into the flow.

**Stage 3+** evaluates each grant category separately with focused context. The AI only sees the criteria relevant to that specific category. Previous responses inform the next stage, but the prompt stays scoped.

Each stage has guardrails that prevent the AI from drifting. If a user tries to jump ahead or go off topic, the system redirects without losing progress.

## Why this works better

**Reduced hallucination.** When the AI only needs to evaluate 4-5 criteria instead of 20+, it stays accurate. Smaller scope means fewer opportunities to confuse or fabricate information.

**Better coaching quality.** With focused context, the AI asks sharper follow-up questions. It can actually identify what's missing from a proposal category and probe deeper, instead of giving generic "tell me more" responses.

**Conversation resilience.** Users tried to break it. They went off topic, asked unrelated questions, tested boundaries. The modular design meant each stage could handle disruption independently without corrupting the entire conversation state.

**Easier debugging.** When something went wrong, I knew exactly which stage failed. I could fix one module without touching the rest. Try debugging a 2000-word monolithic prompt when the AI gives a bad response on turn 47 of a conversation.

## The result

The system replaced what would have been 11 separate Google Forms (one per language) with a single intelligent agent that feels like talking to a real coach. Applicants in the Philippines, Honduras, and across multiple continents use the same system. It develops underdeveloped ideas into viable grant proposals through targeted questioning.

And the quality of applications went up because the AI wasn't just collecting answers. It was actually coaching people to think more deeply about their proposals.

## The principle I took away

This applies way beyond chatbots. Any time you're building an AI system that needs to handle complexity, resist the urge to solve it with one massive prompt. Break it into focused stages. Give each stage a single clear objective. Pass context forward intentionally, not by hoping the model remembers everything.

I've applied this same pattern to support automation, report generation, and translation systems since then. The modular approach scales. The monolithic prompt does not.

The best AI systems I've built don't try to be smart about everything at once. They're smart about one thing at a time, in the right order.
