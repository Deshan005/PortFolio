import React from "react";
import kanto from "../assets/portfolio/kanto.png";
import leave from "../assets/portfolio/leave.png";
import smart from "../assets/portfolio/smartgrow.jpg";
import hangman from "../assets/portfolio/hangman.png";
import fuel from "../assets/portfolio/fuel.png";
import progression from "../assets/portfolio/progression.png";
import portfolio from "../assets/portfolio/portfolio.png";
import skincare from "../assets/portfolio/skincare.png";
import cinephile from "../assets/portfolio/pop.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kanto,
      link: "https://github.com/Deshan005/Travel-Agency-Website",
      host: "https://kanto-consulting.com/"
    },
    {
      id: 2,
      src: leave,
      link: "https://github.com/Deshan005/Leave-Management",
    },
    {
      id: 3,
      src: smart,
      link: "https://github.com/Deshan005/SmartGrow",
    },
    {
      id: 4,
      src: hangman,
      link: "https://github.com/Deshan005/Hangman-Game",
    },
    {
      id: 5,
      src: fuel,
      link: "https://github.com/Deshan005/Fuel-Queue-Management-System",
    },
    {
      id: 6,
      src: progression,
      link: "https://github.com/Deshan005/Progression-Outcome-Predictor",
    },
    {
      id: 7,
      src: portfolio,
      link: "https://github.com/Deshan005/PortFolio",
    },
    {
      id: 8,
      src: skincare,
      link: "https://github.com/Deshan005/Skin-Consultation-Management-System",
    },
    {
      id: 9,
      src: cinephile,
      link: "https://github.com/Deshan005/Mr-Cinephile-Movie-Website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mb-20">
          {portfolios.map(({ id, src, link, host }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
                {host && (
                  <a
                    href={host}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Live Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
