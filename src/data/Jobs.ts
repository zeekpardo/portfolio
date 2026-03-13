/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Support Operations Specialist",
        startDate: "2025-12-15",
        company: "Planning Center",
        location: "Remote (Carlsbad, CA)",
        description: "Own AI operations, automation systems, and support tooling for a SaaS platform serving 4 million+ users. Architect hybrid human+AI workflows across Front (current) and Zendesk (6 years prior). Build internal tools and AI agent systems that scale team performance.",
        goals: [
            "Built custom Front Composer Plugin that restored template search velocity for 40+ agents after platform migration",
            "Implement, monitor, and optimize Front's AI agent products across the support organization",
            "Completed Intercom Fin AI Academy and built proof-of-concept automation workflows while evaluating AI support platforms",
            "Design automation workflows that reduced manual processes by 40% across support operations",
            "Track automation metrics and translate findings into system improvements that expand AI coverage"
        ],
        currentJob: true,
    },
    {
        title: "Support Specialist",
        startDate: "2022-06-01",
        endDate: "2025-12-15",
        company: "Planning Center",
        location: "Remote (Carlsbad, CA)",
        description: "Built AI agent systems and knowledge architecture for a 13-product SaaS platform in Zendesk. Designed multilingual AI workflows, automated reporting tools, and training systems that transformed team capabilities.",
        goals: [
            "Built AI-powered Spanish support system that cut response time from 2-3 days to same-day with 100% team adoption and zero additional hiring",
            "Created AI custom report builder enabling non-technical users to generate complex Liquid template reports via natural language",
            "Designed and maintained knowledge base architecture across 13 products in Zendesk Guide, optimized for search and AI consumption",
            "Led technical training and AI enablement sessions across the support organization"
        ],
        currentJob: false,
    },
    {
        title: "Support Agent",
        startDate: "2019-12-01",
        endDate: "2022-06-01",
        company: "Planning Center",
        location: "Remote (Carlsbad, CA)",
        description: "Front-line technical support in Zendesk across all 13 Planning Center products. Built the deep product knowledge and customer empathy that later informed every AI system and automation I designed.",
        goals: [
            "Supported 4 million+ users and developed the front-line operational insight that drives every system I build",
            "Mastered the full product ecosystem: Check-Ins, Giving, Groups, People, API, and 8 more interconnected products",
            "Identified recurring friction points that became the foundation for AI automation initiatives",
            "Built help center content and knowledge base articles optimized for search and self-service resolution"
        ],
        currentJob: false,
    },
    {
        title: "Product Manager",
        startDate: "2025-09-01",
        company: "Groovi QR",
        location: "Bakersfield, CA",
        description: "Founded SaaS platform for QR code and NFC marketing solutions, serving local businesses with digital engagement tools.",
        goals: [
            "Developed and launched groovi.cc platform",
            "Built automated marketing workflows",
            "Created customer onboarding and training systems",
            "Established partnerships with local business networks"
        ],
        currentJob: true,
    },
    {
        title: "Product Manager",
        startDate: "2024-12-01",
        company: "Groovi AI Automations",
        location: "Bakersfield, CA",
        description: "Design and deploy AI agent systems and workflow automation for businesses. Conversational AI, CRM integration, and support automation.",
        goals: [
            "Deployed conversational AI agents for business clients across multiple channels",
            "Architected CRM automation systems with intelligent routing and escalation",
            "Built custom AI-powered workflow solutions for customer operations",
            "Created training and enablement materials for AI tool adoption"
        ],
        currentJob: true,
    },
];
export default workExperience;