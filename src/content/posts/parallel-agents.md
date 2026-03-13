---
author: Zeek Pardo
publishDate: 2026-02-12T12:00:00Z
title: "How 9 AI Agents Shipped 18,000 Lines of Code in 72 Hours"
tags:
  - Claude Code
  - AI-Assisted Development
  - Parallel Agents
  - Productivity
description: "I used 9 specialized Claude Code agents working in parallel to build MakerVault. 33 commits in a single day, zero merge conflicts, zero broken builds. Here's the system."
cover:
  src: './images/parallel-agents/cover.webp'
  alt: 'Parallel Agent Development'
---

Here's something I learned the hard way: one AI agent working on your whole codebase is like one person trying to be the backend developer, the frontend developer, the QA engineer, and the project manager all at once. It works for small stuff. It falls apart fast on anything real.

So when I built [MakerVault](/projects/maker-vault), I tried something different. Instead of one agent doing everything, I set up 9 specialized agents that worked in parallel. Each one had clear ownership over specific files. No two agents ever touched the same code.

The result? 33 commits in a single day. 18,550 lines of code in 72 hours. Zero merge conflicts. Zero broken builds.

Let me break down how it works.

## The Problem with One Agent

When you give a single AI agent a big project, a few things go wrong:

It loses context. By the time it's building the frontend, it's forgotten the decisions it made in the backend. It starts contradicting itself.

It gets slow. One agent serializing every task means you're waiting. A lot.

It cuts corners. Quality checks get skipped because the agent is trying to move on to the next feature. "I'll lint later" turns into "I never linted."

And the worst part: it makes the kind of mistakes that happen when someone is doing too many things at once. Touching files it shouldn't be touching. Breaking something over here while fixing something over there.

## The Fix: Give Each Agent One Job

The idea is simple. You wouldn't hire one person to do five jobs. So don't ask one agent to do five jobs either.

Here's the setup I used for MakerVault:

```
Me (the human)
 |
 |-- backend agent --> Rust code only
 |-- frontend agent --> React code only
 |
 |-- quality-gate agent --> lint, test, fix, commit
 |-- plan-tracker agent --> update progress checkboxes
 |-- test-writer agent --> write tests after features ship
```

Backend agent never touches frontend files. Frontend agent never touches backend files. Only the quality gate agent commits code. The plan tracker only updates checkboxes, nothing else.

That's it. Those rules are the whole system.

## The 5 Core Agents

These run during every build session. They're the engine.

**1. Backend Agent** handles all server-side code. Database queries, business logic, API boundaries, file system operations. It reads the implementation plan at the start of every session so it knows what to build and how. It has hard limits: 200 lines per command file, 300 lines per query file.

**2. Frontend Agent** handles all UI code. Components, hooks, state management, styling. Same deal with reading the plan first. It calls the backend through auto-generated type bindings, so there's no manual syncing between the two layers. 150 lines max per component.

**3. Quality Gate Agent** is the gatekeeper. After the backend and frontend agents finish their work, this one runs the full check suite. Type checking, linting, formatting, tests. It fixes issues automatically where it can. When it can't, it flags them for me. Only this agent commits and pushes code.

**4. Plan Tracker Agent** keeps the implementation plan in sync with reality. After work is done, it reads the phase file, checks off completed tasks, and updates the progress tracker. It never changes plan content. It only flips checkboxes from unchecked to checked.

**5. Test Writer Agent** adds test coverage after features are implemented. It never modifies implementation code. It just writes tests for what's already built. I run it every 2-3 phases rather than after every single task.

## The 4 Support Agents

These don't run every session. They run at key checkpoints.

**6. Cleanup Analyzer** does static analysis. Finds unused code, copy-paste duplication, files that grew too large. It reports findings but never changes code. I decide what to act on.

**7. Plan Checker** validates the implementation plan against the architecture before I start a complex phase. It catches issues like "this task will create duplication that should use the shared utility you already defined." Fixes are free when they happen in planning. They're expensive in code.

**8. Docs Reviewer** checks that developer documentation matches the actual codebase. Do the files mentioned in docs actually exist? Do the examples reflect real patterns? Run this before shipping.

**9. User Guide Reviewer** does the same thing but for user-facing documentation. Are all features covered? Is anything documented that no longer exists? Thinks from the user's perspective, not the developer's.

## The Workflow

Here's what an actual build session looks like:

1. Read the current phase from the implementation plan
2. Give backend tasks to the backend agent
3. Give frontend tasks to the frontend agent (these run in parallel)
4. When both finish, run the quality gate agent
5. Quality gate passes, run the plan tracker to check off tasks
6. Every 2-3 phases, run the test writer for coverage
7. Periodically run the cleanup analyzer for code health
8. Before shipping, run the docs and user guide reviewers

The key insight: steps 2 and 3 happen at the same time. While the backend agent is writing database queries, the frontend agent is building UI components. They never collide because they own different files. The auto-generated type bindings are the contract between them.

## What This Looked Like on MakerVault

Day 2 of the MakerVault build was where this system really proved itself. 33 commits. One commit roughly every 45 minutes for 24 hours straight.

The backend agent built the file scanner, the tagging system, the search engine, and the LightBurn metadata parser. Meanwhile the frontend agent built the file browser, the tag picker, the search interface, and the preview system. The quality gate ran after each pair of tasks, catching format issues and type mismatches before they could pile up.

By 5 AM, the app had scanning, tagging, search, preview, and file actions. Six hours in. The remaining 66 hours were polish, licensing, and release prep.

Zero merge conflicts. Zero "wait, who was supposed to do that?" moments. Zero broken builds.

## Why This Actually Works

The agents enforce three things that humans forget under time pressure:

**Separation of concerns.** The backend agent literally cannot touch frontend files. There's no "let me just quickly fix this one frontend thing while I'm in here." That kind of shortcut is how codebases get messy.

**Quality doesn't slip.** The quality gate runs the full check suite every time. Not "I'll lint later." Not "tests can wait." Every time. When you're moving fast, this is the thing that keeps you from shipping garbage.

**The plan stays current.** The plan tracker updates checkboxes after every session. You always know exactly where you are. Not "I think we finished that." You know.

## How to Set This Up

You don't need all 9 agents to start. Here's what I'd recommend:

**Minimum viable set (3 agents):** backend, frontend, quality gate. This alone will change how fast you ship.

**Recommended set (5 agents):** Add the plan tracker and test writer. Now you've got accountability and coverage.

**Full set (9 agents):** Add the support agents when you're shipping something real and want to catch everything before launch.

Each agent is a markdown file in `.claude/agents/` with a name, description, scope, required reading, patterns to follow, and constraints. The constraints are the important part. That's what keeps agents from stepping on each other.

## The Bottom Line

One agent doing everything is a bottleneck. Multiple agents with clear boundaries is a team.

The setup takes maybe an hour. Customize the agent files for your stack, define the file ownership, set the quality gate commands. After that, you're building with a system that scales.

I used this to ship a production desktop app in 72 hours. But the framework works for any project, any stack, any size. The principle is the same: give each agent one job, enforce boundaries, and let the quality gate be the single source of truth for what ships.
