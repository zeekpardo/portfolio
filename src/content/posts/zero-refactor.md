---
author: Zeek Pardo
publishDate: 2026-01-08T12:00:00Z
title: "The Zero-Refactor Principle: What 49 Commits Reveal About Planning vs. Building"
tags:
  - Claude Code
  - Product Development
  - Software Architecture
  - AI-Assisted Development
description: "I built MakerVault in 72 hours with 49 commits, 18,550 lines of code, and zero architectural rewrites. Here's why planning before coding is the fastest way to ship."
cover:
  src: './images/zero-refactor/cover.webp'
  alt: 'The Zero-Refactor Principle'
---

Most builders start coding with a rough idea and figure things out as they go. I used to do that too. And honestly, it works fine until it doesn't. You build something, realize the architecture is wrong, tear it down, and rebuild. Maybe twice. Maybe three times. That's weeks of work that produces nothing.

When I built [MakerVault](/projects/maker-vault), I tried a different approach: make every single decision before writing a line of code. Every debate, every pivot, every scope change happens in conversation, not in code.

I call it the Zero-Refactor Principle. And the commit history proves it works.

## The Numbers

Here's what 72 hours of building looked like:

| Metric | Value |
|--------|-------|
| Total elapsed time | 72 hours |
| Commits | 49 |
| Lines added | 18,550 |
| Files created | 235 |
| Unit tests | 47 |
| Planning docs written | 1,487 lines |
| Structural refactors | 0 |

Zero structural refactors. In a 235-file codebase. That's not luck. That's planning.

## The Pivot That Saved Weeks

Here's the thing that convinced me this approach is real.

The original plan for MakerVault was a visual thumbnail grid. Think "Lightroom for laser files." Browse your designs, see previews, drag things around. It sounded great.

But during the planning phase, I was going through community posts from makers, Reddit threads, Facebook groups, people talking about their actual frustrations. And I noticed something. The word they kept using wasn't "see." It was "find."

"I can't find that file I downloaded last month."
"I have 3,000 SVGs and no way to find anything."
"I spend more time finding files than actually cutting."

The core verb was "find," not "see." That changed everything.

I pivoted the entire architecture from visual browser to search-first organizer. Cut the build estimate from 5-6 weeks down to 3-4 weeks. And here's the important part: this pivot happened in conversation with Claude Code. Before any code existed. It cost nothing.

If I had started building the visual grid and then discovered this halfway through? That's a full rewrite. Weeks gone.

By commit `ee82377` on Day 2, the file scanner was already search-optimized. The pivot was baked in from the very first line of code. Zero commits were ever reverted.

## What the Commit Timeline Reveals

Let me walk through what actually happened, because the timestamps tell the story.

**Day 1, 11:11 PM** - Clone the starter template, rename to MakerVault.

**Day 1, 11:48 PM** - Database schema, file type registry, Rust module scaffold. Phase 0 done in 37 minutes. That's the starter kit payoff. The template I chose gave me type-safe IPC, preferences, native menus, keyboard shortcuts, themes, auto-update, crash recovery, and CI/CD out of the box. Roughly 30% of the final codebase for free.

**Day 2, 12:02 AM** - File scanner with LightBurn metadata extraction. 14 minutes after the foundation was laid.

**Day 2, 4:49 AM** - Tagging, search, preview, file actions. All done. 2,500+ lines in one commit. This was possible because the implementation plan specified every component name, every file path, every query pattern. Claude Code didn't have to stop and ask "what should I build?" It just built.

**Day 2, morning** - Licensing system complete. Most indie projects push licensing to "later." I had trial activation and LemonSqueezy integration done before lunch because the pricing model was decided during planning. No decisions left, just execution.

**Day 2, afternoon** - First refactor commit. But here's what it actually was: splitting files that grew past the size limit. Not rethinking architecture. Not throwing away code. Just taking a 300-line component and splitting it into two 150-line components. Cosmetic, not structural.

**Day 3** - Polish. Duplicate detection, app icons, auto-updater plugin.

**Day 4** - Code signing, notarization, final bug fixes. Shipped v0.2.1 at 6:13 PM.

The core product was built in a single night. Everything after Day 2 morning was polish, licensing, and release prep.

## The Planning-to-Code Ratio

1,487 lines of planning documentation. 18,550 lines of shipped code. That's a ratio of roughly 1:12.

Every line of planning generated 12 lines of code. And not throwaway code. Shipped, tested, production code.

The planning included:
- Full database schema with migrations and FTS5 search indexes
- Backend module map with every file location and responsibility
- Frontend component tree with naming conventions
- A shared utilities registry (extracting duplicates before they existed)
- About 100 numbered micro-tasks, each scoped to 30 minutes to 2 hours

That level of specificity is what makes parallel execution possible. You can't hand two agents different parts of a vague plan. But you can hand them specific, numbered tasks with clear file ownership and let them run at the same time.

## The Learning Moments

It wasn't all perfect. The commit history shows a few spots where the planning could have been better.

**Files grew too large before getting split.** The implementation plan set file size limits (components under 150 lines, commands under 200 lines) but didn't enforce them during the high-velocity parallel build. Code accumulated past limits, then needed a cleanup pass. The fix for next time: run a size audit every 5 commits. Split proactively, not retroactively.

**The release pipeline took 4 attempts.** Code signing, notarization, the updater JSON config, and the GitHub Actions plugin all needed iteration. CI/CD was treated as a "configure once" task but it actually required debugging across multiple commits. The fix: test your release pipeline on Day 1 with a dummy build. Ship a v0.0.1 to yourself before you have a real product.

**The preview system needed 3 iterations.** Different file types needed different rendering strategies. SVGs render inline. Images use data URIs. AI and EPS files fall back to macOS Quick Look. The plan said "spacebar quick preview" but didn't break down the strategy per file type. The fix: for any feature that handles multiple formats, specify the approach per format in the plan. Don't write "preview files." Write "SVG: inline render. PNG: data URI. AI/EPS: qlmanage fallback."

These are real lessons. But notice what they are. They're about edge cases and polish. Not about "the whole architecture was wrong." The foundation was solid from commit one.

## The File Type Registry Decision

One architectural choice that paid off more than anything: the file type registry.

`file_types.rs` is a single 414-line file that serves as the source of truth for all 25+ supported file types. Every part of the system reads from it. Scanning, indexing, filtering, search, UI rendering. All of it.

Adding a new file type? One entry. Works everywhere. No hunting through five different files to update them all.

This decision was made in the implementation plan. Not discovered during the build. And it's the kind of thing that prevents chaos in a codebase that's growing fast. When you're adding 18,000 lines of code in 72 hours, you need these kinds of guardrails built in from the start.

## The LightBurn Discovery

During planning, I gave Claude Code an actual `.lbrn2` file and asked it to look inside. It cracked open the XML and found embedded metadata I didn't even know was there: cut settings (speed, power, number of passes), text elements, font names, layer names, notes.

That discovery shaped the entire metadata extraction feature, the deep search system, and became the number one pricing justification. "Search inside your files, not just by file name." That's the killer feature. And it came from examining a real artifact during planning, not from guessing what users might want.

## The Bottom Line

```
Without planning:  Build -> Discover it's wrong -> Rebuild -> Ship (maybe)
With planning:     Plan with AI -> Pivot for free -> Build once -> Ship
```

The 48-Hour Product Playbook isn't about building fast. It's about deciding fast, then executing without waste.

Pivots in code are expensive. Pivots in conversation are free. The Zero-Refactor Principle is just taking that obvious truth and actually structuring your workflow around it.

1,487 lines of planning. 18,550 lines of shipped code. Zero rewrites. That ratio speaks for itself.
