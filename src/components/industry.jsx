import React from "react";

const Industry = () => {
  const industry = [
    {
      company: "Innovis Engineering",
      role: "Full Stack Developer",
      period: "Oct 2025- Feb 2026",
      project: "Worked on multiple projects",
      contributions: [
        "Developed an application to hire candidates, Recruiting operations.(Most Contributed)",
        "Worked on a project Desk and Meeting Rooms Management System.(Contributed)",
        "Worked on the Hilary Mobile App.(Contributed)",
        "Developed a Landing site for the Hilary mobile app.(Fully)",
        "Worked on Admin dashboard and Operator portal aligned to Mobile App(Contributed)",
      ],
      techStack: "React(typescript), Nodejs, React Native, HTML, Bootstrap CSS,JavaScript, Odoo, Supabase, Github, Netlify, Chakra UI, Acuity Scheduling",
    },    
    {
      company: "CDRD (Ministry of Defense)",
      role: "Intern Software Engineer",
      period: "Sep 2023 - Mar 2024",
      project: "Leave Management System",
      contributions: [
        "Designed and developed a Leave Management System to streamline employee leave requests and approvals.",
        "Led the end-to-end development, including UI design, database integration, and system optimization.",
      ],
      techStack: "HTML, Bootstrap CSS, PHP, MySQL",
    },
    {
      company: "Apex Innovations (Pvt) Ltd",
      role: "Intern Software Engineer",
      period: "Mar 2024 - Sep 2024",
      project: "Company Website & Jewelry E-commerce Platform",
      contributions: [
        "Developed the company website, linking completed projects to relevant sites.",
        "Contributed to a jewelry e-commerce platform, designing key pages and integrating features for purchases and custom orders.",
      ],
      techStack: "HTML, Bootstrap CSS, JavaScript, React.js, Node.js, MongoDB",
    },
  ];

  const achievements = [
    {
      title: "Kanto Consulting Website",
      description:
        "Designed and developed a fully responsive travel agency website from scratch, including layout design, responsive styling, and deployment.",
      link: "https://kanto-consulting.com/",
      techStack: "HTML, CSS, JavaScript",
    },
    {
      title: "Portfolio Website",
      description:
        "Created a personal portfolio to showcase my projects, experience, and skills using modern UI design principles.",
      link: "https://github.com/Deshan005/PortFolio",
      techStack: "React.js, Tailwind CSS",
    },
    {
      title: "Cleaning CRM",
      description: "Contains the frontend of the Cleaning CRM (Customer Relationship Management) system, new design, responsive styling (DEVELOPMENTS ONGOING)",
      link: "https://github.com/Deshan005/Commercial-Cleaning-CRM",
      techStack: "Reactjs, Next.js, Typescript",
    },
    {
      title: "SOLORA",
      description: "Contains the frontend of the SOLORA website, new design, responsive styling (DEVELOPMENTS ONGOING)",
      link: "https://github.com/Deshan005/Project-Solora",
      techStack: "Reactjs, Next.js, Typescript",
    }
  ];

  return (
    <div
      name="industry"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        {/* Work Experience */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Industry Experience
          </p>
          <p className="py-6">
            Take a look at my professional Journey and Contributions.
          </p>
        </div>

        <div className="space-y-10">
          {industry.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg duration-300"
            >
              <h3 className="text-2xl font-semibold">{industry.company}</h3>
              <p className="italic text-gray-400">
                {industry.role} | {industry.period}
              </p>
              <p className="mt-2 font-medium">{industry.project}</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
                {industry.contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-400">
                <span className="font-semibold text-gray-200">
                  Tech Stack:
                </span>{" "}
                {industry.techStack}
              </p>
            </div>
          ))}
        </div>

        {/* Personal Achievements */}
        <div className="mt-16">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Personal Achievements
          </p>
          <p className="py-4">
            Projects and accomplishments I developed entirely on my own.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {achievements.map((achieve, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg duration-300"
              >
                <h4 className="text-xl font-semibold">{achieve.title}</h4>
                <p className="mt-2 text-gray-300">{achieve.description}</p>
                <p className="mt-3 text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">
                    Tech Stack:
                  </span>{" "}
                  {achieve.techStack}
                </p>
                {achieve.link && (
                  <a
                    href={achieve.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 duration-200"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
