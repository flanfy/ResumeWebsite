import profile from './assets/profile.jpg'

export const IMAGES = [
    {
      image: profile,
      // title: 'profile',
      // description:
      //   'Profile.',
    }
  ];

  export const EXPERIENCE = [
    {
      title: "Web Developer",
      company: "MBArtist",
      location: "Cambridge, ON",
      date: "January 2023 - July 2023",
      responsibilities: [
        "Lead capstone project team and managed the Jira board according to Agile methodology, ensuring efficient project progress and timely deliverables. The project’s success led to continued freelance work.",
        "Implemented a combination of existing apps, theme development using HTML, CSS, Liquid, JSON, and a custom Node.js app to create a highly functional and visually appealing website with a custom inventory system.",
        "Improved website speed for desktop and mobile by 20%."
      ],
    },
    {
      title: "Research Assistant",
      company: "Research Assistant",
      location: "Waterloo, ON",
      date: "January 2015 - July 2020",
      responsibilities: [
        "Conducted extensive research and analyzed complex data sets to draw meaningful conclusions, resulting in a published scientific paper titled ”Mechanistic Insights into the Cytotoxicity of Graphene Oxide Derivatives in Mammalian Cells.”",
        "Demonstrated leadership by training new co-op students, providing guidance on research methodologies and data analysis techniques"
      ],
    },
    {
      title: "Database Migration Specialist",
      company: "OpenText Corporation",
      location: "Waterloo, Ontario",
      date: "February 2017 - August 2017",
      responsibilities: [
        "Executed a critical role in a database migration project, ensuring the seamless transition of data without errors. This involved meticulously reviewing and validating data to guarantee accuracy and completeness, resulting in the successful completion of the migration within the established timeframe.",
        "Collaborated closely with international project managers to address potential challenges, provide status updates, and ensure alignment with project goals."
      ],
    },
  ]

  export const PROJECT = [
    {
      title: "Blazor Shop",
      description: "• Built a full-stack E-Commerce website using C#, Blazor WebAssembly, Web API, .NET 7, SQL Server, and Stripe as payment processor.",
    },
    {
      title: "Wordle Clone",
      description: "• Recreated the game of Wordle using Javascript.",
    },
    {
      title: "Python Web Scraper",
      description: "• Built a Python web scraper that exports data of all products in a website into a CSV file.",
    },
  ]

  export const EDUCATION = [
    {
      school: "Conestoga College",
      program: "Computer Programmer/Analyst",
      degree: "Ontario College Advanced Diploma",
      location: "Waterloo, ON",
      date: "April 2023",
    },
    {
      school: "University of Waterloo",
      program: "Biochemistry Co-op",
      degree: "Bachelor of Science",
      location: "Waterloo, ON",
      date: "June 2019",
    },
  ]