---
author: Zeek Pardo
publishDate: 2026-03-10T12:00:00Z
title: "My Personal Operating System: How Obsidian, Claude Code, and a Human Layer Run My Life"
tags:
  - Productivity
  - Obsidian
  - Claude Code
  - Systems Thinking
description: "I run my entire life through three layers: Obsidian as my second brain, Claude Code as my execution engine, and my wife Nancy as the human coordination layer. Here's how it works and why it changed everything."
cover:
  src: './images/personal-operating-system/cover.webp'
  alt: 'Personal Operating System'
---

I run a lot of things at once. A full-time job in support operations. Multiple side ventures. Nonprofit projects. A desktop app heading to market. And somehow I need to keep track of all the people, decisions, priorities, and deadlines across all of it.

For a long time I did what most people do. Some stuff in my head, some in notes apps, some in email, some in Slack. Nothing connected. I'd forget things. I'd lose context between conversations. I'd spend the first 20 minutes of every work session just trying to remember where I left off.

So I built a system. It's three layers: Obsidian as my second brain, Claude Code as my execution engine, and my wife Nancy as the human coordination layer. It sounds weird when I describe it. But it's the most productive setup I've ever had.

## Layer 1: Obsidian (The Second Brain)

Everything starts in Obsidian. Every project, every person I work with, every decision, every priority, every piece of context. It all lives in one vault, synced through iCloud so I can access it on my phone when I'm away from my desk.

I've got folders for Projects, People, Context, Ideas, and Meetings. Every project file has the same structure: what it is, who's involved, what the current status is, what's connected to it. People files track who someone is, what we're working on together, and any important context about the relationship.

But the part that makes it actually work is the Context folder. I've got a Personal Context file that is basically a complete brain dump of everything I'm doing, who I'm working with, what my priorities are, and how my schedule works. When Claude Code reads this file, it understands my entire situation. Not just one project. Everything.

The other piece is linking. Obsidian's bidirectional links mean that when I'm looking at a project, I can see every person connected to it, every meeting about it, every idea related to it. And when I'm looking at a person, I can see every project we share. Nothing falls through the cracks because everything is connected.

## Layer 2: Claude Code (The Engine)

This is where it gets interesting. I've set up 12 slash commands in Claude Code that plug directly into my vault:

`/context` loads my full life and work context. Projects, priorities, people, schedule. Claude Code reads the vault and understands where I am across everything.

`/today` is my morning planning routine. It reads my priorities, checks what's active, and creates a plan for the day. Not a generic to-do list. A plan that understands my schedule, my deadlines, and what actually matters right now.

`/schedule` looks at my priorities and calendar and suggests how to allocate time. When I've got three projects competing for attention, this helps me think clearly about where my hours should go.

`/closeday` is my end-of-day processing. Capture what happened, clear my head, update the vault so tomorrow's `/today` has fresh context.

`/vault` lets me navigate and search my notes directly from Claude Code. I can read notes, search for connections, create new files, follow links. My vault becomes part of the conversation.

There are more, but those are the ones I use every day. The point is that Claude Code isn't just a coding tool for me. It's an execution engine that reads my second brain and helps me think, plan, and act across everything I'm doing.

When I sit down to work on a project, I don't start from scratch. Claude Code already knows the project, the people involved, the current status, my priorities, and my constraints. That context loading used to take me 20 minutes of ramp-up time. Now it takes 30 seconds.

## Layer 3: Nancy (The Human Layer)

Some things need a human. Emails need to be written with warmth and nuance. Calendar scheduling needs coordination across multiple people. Client communication needs someone who can read tone and respond appropriately.

That's Nancy. She's my wife and also works about 5 hours a week as my personal assistant, async. She handles email triage, calendar management, and client coordination. And here's the key: she reads the Obsidian vault too. So when she's writing an email to a client, she has the same context I do. She knows the project status, the relationship history, and what we're trying to accomplish.

The system works because each layer does what it's best at:

- **Obsidian** stores and connects everything. It never forgets.
- **Claude Code** processes, analyzes, plans, and builds. It's fast and thorough.
- **Nancy** handles everything that needs a human touch. Warmth, judgment, coordination.

I think and decide. It gets captured in Obsidian. Claude Code executes from that context. Nancy coordinates the human side. And Google Calendar connects all three.

## Why This Works

Before this system, I had a problem that I think a lot of people have. I was carrying too much context in my head. Every project, every relationship, every deadline, every decision. My brain was the central server and it was constantly overloaded.

Now my brain is free to do what it's actually good at: making decisions and thinking creatively. The storage is handled by Obsidian. The execution is handled by Claude Code. The coordination is handled by Nancy.

The big shift was realizing that Claude Code is dramatically more useful when it has context. Telling Claude Code "help me plan my day" produces generic garbage. Telling it to run `/today` when it can read my entire vault, with all my projects, people, priorities, and schedule, produces a plan that actually makes sense for my specific situation.

Same with building software. When Claude Code can read my project files, my implementation plans, my architecture decisions, and my past conversations about the project, the code it writes is better. It's not starting from zero every time. It has the full picture.

## The Daily Workflow

Here's what a typical day looks like with this system:

**5:00 AM** - Start work at Planning Center. The vault has my context from yesterday's closeday.

**9:00 AM** - Lunch hour. Run `/today` to see what needs attention across my side projects. Claude Code reads the vault, checks priorities, and gives me a focused plan for the hour.

**9:05 AM** - If I'm building, Claude Code already has the project context. If I'm planning, it knows my priorities. If I need to coordinate something, Nancy has the vault context too.

**2:00 PM** - Planning Center day ends. Shift to side projects if there's energy and time.

**Evening** - Run `/closeday` to capture what happened, update project status, and clear my head so tomorrow starts clean.

The thing that surprised me most is how much mental energy this frees up. I don't lie awake thinking "did I forget something?" because everything is captured. I don't stress about context-switching between projects because the context is always there waiting for me. I just sit down, load the context, and start.

## What I'd Tell You

You don't need to copy this system exactly. The specific tools matter less than the principle: separate your brain from storage, execution, and coordination.

Your second brain could be Notion or Apple Notes or a folder of text files. Your execution engine could be any AI tool that can read your notes. Your human layer could be a VA, a partner, or just a set of reminders.

The point is to stop carrying everything in your head. Build a system where context is captured, accessible, and connected. Then let your brain do what it does best: think about the hard problems.

That's the system. Obsidian, Claude Code, and Nancy. It's weird, it's personal, and it's the most productive I've ever been.
