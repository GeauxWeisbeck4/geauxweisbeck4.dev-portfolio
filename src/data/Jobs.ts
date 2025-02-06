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
        title: "Full-Stack Developer/Owner",
        startDate: "2020-01-01",
        company: "Tar Heel Dev Studio",
        location: "United States",
        description: "Deliver high quality web development, marketing, and design services to small businesses and non-profits.",
        goals: [
            "Architected and implemented scalable backend systems using Node.js, MongoDB, Typescript, PostgreSQL, and Express.",
            "Developed responsive front-end interfaces with React and Next.js.",
            "Optimized website performance and implemented SEO best practices.",
            "Built and maintained RESTful APIs using Python and Django.",
            "Created interactive data visualizations with D3.js and Chart.js.",
            "Implemented automated testing and continuous integration pipelines.",
        ],
        currentJob: true,
    },
    {
        title: "SOC Analyst",
        startDate: "2021-06-01",
        endDate: "2021-11-22",
        company: "Iron Range Cyber, formerly CyberOpz",
        location: "Raleigh, NC, United States",
        description: "Worked on a team of SOC analysts to identify and respond to security incidents for clients.",
        goals: [
            "Improved incident response rate by 15% by coordinating with SOC managers and analyzing security events.",
            "Enhanced system security by evaluating and improving authentication methods by 20%.",
            "Implemented vulnerability scanning and patching to reduce vulnerability exposure by 30%.",
        ],
        currentJob: false,
    },
    {
        title: "Content Creator",
        startDate: "2018-01-01",
        company: "Geaux Code/WeisMind/Freelance",
        location: "North Carolina, United States",
        description: "Deliver high quality content for various blogs, newsletters, and other various platforms.",
        goals: [
            "Created engaging content for tech blogs and newsletters.",
            "Developed tutorials and guides for software development and cybersecurity topics.",
            "Collaborated with other content creators to produce high-quality content.",
        ],
        currentJob: true,
    }
];
export default workExperience;
