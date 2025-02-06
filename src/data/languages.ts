interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "JavaScript/Typescript",
        level: "Expert",
        description: "I can write and understand any code in JavaScript and Typescript.",
        show: true
    },
    {
        name: "Go",
        level: "Expert",
        description: "I can write and understand any code in Go.",
        show: true
    },
    {
        name: "SQL",
        level: "Expert",
        description: "I can effectively use SQL to create transactions and search SQL databases.",
        show: true
    },
    {
        name: "Python",
        level: "Expert",
        description: "I can write and understand any code in Python.",
        show: true
    },
    {
        name: "C",
        level: "Intermediate",
        description: "I can write many programs in C and can understand any code upon further investigation.",
        show: true
    },
    {
        name: "Python",
        level: "Expert",
        description: "I can write and understand any code in Python.",
        show: true
    }
];

export default languages;
