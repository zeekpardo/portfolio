---
title: "AI Implementation Plan Generator"
description: "Prompts for generating a complete implementation plan: database schema, module map, component tree, phased task breakdown, and architecture validation"
category: "Product Development"
tags: ["implementation-plan", "architecture", "AI-prompts", "claude-code", "planning"]
prompt: |
  ## 1. Generate the Full Implementation Plan

  I'm building [product name] - [one-sentence description].

  Target audience: [who]
  Tech stack: [framework, database, frontend, etc.]
  Starter template: [name and what it provides]

  MVP features (in priority order):
  1. [Layer 1 feature - earns the download]
  2. [Layer 2 features - makes it sticky]
  3. [Layer 3 feature - worth paying for]

  NOT in MVP: [list deferred features]

  Generate a complete implementation plan that includes:

  1. Data/file type registry - if the app handles multiple file types or data types, create a single extensible registry. Adding a new type should mean editing ONE entry in ONE file.
  2. Database schema - complete SQL with CREATE TABLE, indexes, foreign keys, and triggers. Include FTS5 virtual tables if search is needed. Number migrations sequentially.
  3. Key query patterns - write out the 3-5 most important queries in SQL. Include recursive queries, joins, or FTS patterns.
  4. Backend module map - every directory and file path, what each is responsible for.
  5. Frontend component tree - every component named and located. Shared vs. feature-specific. Hooks and stores listed.
  6. Phase-by-phase task breakdown:
     - Phase 0: Foundation (starter kit setup, database, shell layout)
     - Phase 1: Core feature (Layer 1)
     - Phase 2: Sticky features (Layer 2)
     - Phase 3: Worth-paying feature (Layer 3)
     - Phase 4: Polish and ship (onboarding, error handling, licensing, packaging)
     Each task should be numbered (Phase.Section.Task, e.g., 1A.3), completable in 30 minutes to 2 hours, start with the responsible layer (Rust: or React: or Both:), and be specific enough for Claude Code to execute without questions.
  7. Claude Code workflow notes: prompt template for each task, file size limits (components <150 lines, commands <200 lines), "read these docs first" reminders, and testing expectations per phase.
  8. Post-MVP roadmap - what comes in v1.1, v1.2, v2.0

  Format this as a markdown document I can reference throughout the build.

  ## 2. Refine and Challenge the Plan

  Here's my implementation plan:
  [Paste the plan or key sections]

  Review it critically:
  1. Are there any tasks that are too vague for Claude Code to execute?
  2. Are there missing dependencies between tasks?
  3. Is the phasing correct? Should anything move earlier or later?
  4. Are there any architectural decisions I'll regret later?
  5. Is the database schema missing any indexes or edge cases?
  6. Are the file size limits realistic for the complexity of each module?
  7. What's the most likely thing to go wrong during the build?

  ## 3. Domain-Specific Deep Dive

  My app needs to [specific technical capability].

  Research this:
  1. What is the file format? (XML, binary, ZIP, etc.)
  2. What metadata can be extracted?
  3. What libraries exist for parsing this format?
  4. Show me an example of the file structure
  5. Write example code for extracting the key metadata
  6. How should I store this extracted data in my database?
  7. How should this integrate with the search/filter system?

  If I give you an actual file, can you examine it and map the real structure?

  ## 4. Reverse-Engineer a Real Artifact

  Here's an actual [file type] file from the domain I'm building for.
  [Upload the file]

  Examine this file and tell me:
  1. What is the file format? (XML, JSON, binary, ZIP-compressed, etc.)
  2. What's the internal structure? Show me the key elements.
  3. What metadata or content could be extracted and made searchable?
  4. What would be valuable for users to see WITHOUT opening this file in its native app?
  5. What data structures would I need to store the extracted information?
  6. Are there other files in this format that would have different/additional metadata?
  7. Write the extraction code. What libraries do I need, and what does the parser look like?

  This will inform a key feature of my app: [describe how you plan to use the extracted data].
useCase: "Generate a detailed, executable implementation plan that Claude Code can build from without asking questions, enabling parallel agent execution and zero-refactor development"
publishDate: 2026-01-10
relatedProjects:
  - maker-vault
---

These prompts generate the implementation plan that makes zero-refactor development possible. The plan needs to be specific enough to parallelize across multiple Claude Code agents and detailed enough that no architectural decisions happen during the build. Every decision is made here, not in code.
