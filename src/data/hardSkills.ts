interface RelatedProject {
  name: string;
  slug: string;
}

interface HardSkill {
  name: string;
  description: string;
  icon: string;
  relatedProjects?: RelatedProject[];
}

const hardSkills: HardSkill[] = [
  {
    name: "AI Agent Operations",
    description: "Build, train, and optimize AI support agents. Intercom Fin AI Academy certified. Design conversation flows, escalation logic, and performance loops that drive resolution rates",
    icon: "group-fill",
    relatedProjects: [
      { name: "Spanish Support AI", slug: "spanish-support-ai-system" },
      { name: "AI Custom Report Builder", slug: "ai-custom-report-builder" },
      { name: "AI Grant Coach", slug: "ai-grant-application-coach" },
    ]
  },
  {
    name: "Support Automation & Workflows",
    description: "6 years across Zendesk, Front, and Intercom. Build custom integrations, intelligent routing, and automation workflows across support platforms",
    icon: "message-2-fill",
    relatedProjects: [
      { name: "Front Composer Plugin", slug: "front-composer-plugin" },
      { name: "Spanish Support AI", slug: "spanish-support-ai-system" },
    ]
  },
  {
    name: "Knowledge Architecture",
    description: "Structure and optimize knowledge bases for both human agents and AI consumption. Search optimization, content design, and help center management",
    icon: "tools-fill",
    relatedProjects: [
      { name: "Technical Training Systems", slug: "technical-training-systems" },
      { name: "Video Documentation", slug: "video-documentation-workflow" },
    ]
  },
  {
    name: "Prompt Engineering & Conversation Design",
    description: "Design, test, and refine production AI prompts. Modular prompt architecture, terminology guardrails, and multi-language conversation flows",
    icon: "time-fill",
    relatedProjects: [
      { name: "Spanish Support AI", slug: "spanish-support-ai-system" },
      { name: "AI Grant Coach", slug: "ai-grant-application-coach" },
    ]
  },
  {
    name: "AI-Assisted Development",
    description: "Ship production software using Claude Code. Multi-agent orchestration to parallel execution pipelines",
    icon: "code-s-fill",
    relatedProjects: [
      { name: "MakerVault", slug: "maker-vault" },
      { name: "Front Composer Plugin", slug: "front-composer-plugin" },
      { name: "Launch Club", slug: "launch-club" },
    ]
  },
  {
    name: "Full-Stack Development",
    description: "React, TypeScript, Next.js, Supabase, Tailwind, Tauri. SaaS platforms, desktop apps, and internal tools",
    icon: "github-fill",
    relatedProjects: [
      { name: "Groovi QR Platform", slug: "groovi-qr-platform" },
      { name: "MakerVault", slug: "maker-vault" },
      { name: "Launch Club", slug: "launch-club" },
    ]
  }
];

export default hardSkills;