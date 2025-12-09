interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "AI Appointment Setting Chatbots",
    description: "Build and deploy intelligent chatbots that qualify leads, book appointments, and follow up automatically",
    icon: "tools-fill"
  },
  {
    name: "Helpdesk Software",
    description: "6+ years using macros, rules, and advanced features for customer support",
    icon: "message-2-fill"
  },
  {
    name: "CRM Integration & Follow-up Sequences",
    description: "Design automated workflows that update CRM records, trigger follow-up campaigns, and nurture leads through conversion",
    icon: "group-fill"
  },
  {
    name: "Technical Training & Documentation",
    description: "Created comprehensive Notion training materials and interactive tools for team adoption",
    icon: "time-fill"
  },
  {
    name: "HTML/CSS & Web Development",
    description: "Built custom report builder and full-stack SaaS platforms including Groovi (groovi.cc)",
    icon: "astro_dark"
  },
  {
    name: "Data Analysis & Reporting",
    description: "Support metrics analysis, visualization creation, and identifying patterns in customer data",
    icon: "mongodb"
  }
];

export default hardSkills;