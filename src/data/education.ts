interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "B.S. in Business Administration and Finance",
        startDate: "2010-08-31",
        endDate: "2014-05-05",
        school: "University of Nebraska-Lincoln",
        location: "Lincoln, NE, United States",
        description: "Earned a bachelor's degree in Business Administration with a minor in finance.",
        currentUni: true,
    },
    {
        title: "Master's in Economics",
        startDate: "2015-09-01",
        endDate: "2016-06-30",
        school: "University of Nebraska-Omaha",
        location: "Omaha, NE, United States",
        description: "Started, but never completed a Master's in Economics at UNO due to a change in career path.",
        currentUni: true,
    },
    {
        title: "Computer Science/Software Engineering",
        startDate: "2018-01-01",
        endDate: "",
        school: "Self Taught",
        location: "North Carolina, United States",
        description: "Taught myself computer science, application development, software engineering, and cybersecurity.",
        currentUni: true,
    },
];

export default education;
