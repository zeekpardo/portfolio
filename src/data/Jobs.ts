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
        title: "Support Operations",
        startDate: "2025-12-15",
        company: "Planning Center",
        location: "Remote (Carlsbad, CA)",
        description: "Leading support operations and workflow optimization for church management platform serving 50,000+ churches worldwide.",
        goals: [
            "Optimize support workflows and automation systems",
            "Implement AI-driven support solutions",
            "Lead technical training and knowledge management",
            "Drive operational efficiency improvements"
        ],
        currentJob: true,
    },
    {
        title: "Founder",
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
        title: "Founder",
        startDate: "2024-12-01",
        company: "Groovi AI Automations",
        location: "Bakersfield, CA",
        description: "Providing AI automation solutions and workflow optimization for local businesses, specializing in customer service chatbots and CRM integration.",
        goals: [
            "Deployed AI chatbots for local business clients",
            "Implemented CRM automation systems",
            "Developed custom business workflow solutions",
            "Created training materials for AI tool adoption"
        ],
        currentJob: true,
    },
    {
        title: "Support Specialist",
        startDate: "2019-12-01",
        endDate: "2025-12-01",
        company: "Planning Center",
        location: "Remote (Carlsbad, CA)",
        description: "Provided technical support and customer success services for church management platform, developing expertise in workflow automation and AI systems.",
        goals: [
            "Supported 50,000+ churches with technical issues and feature requests",
            "Built internal automation tools and documentation systems",
            "Trained team members on new technologies and workflows",
            "Contributed to product improvement through user feedback analysis"
        ],
        currentJob: false,
    }
];
export default workExperience;