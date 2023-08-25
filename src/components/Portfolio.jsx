import React from "react";
import hangman from "../assets/portfolio/hangman.png";
import fuel from "../assets/portfolio/fuel.png";
import progression from "../assets/portfolio/progression.png";
import portfolio from "../assets/portfolio/portfolio.png";
import skincare from "../assets/portfolio/skincare.png";
import cinephile from "../assets/portfolio/pop.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: hangman,
      link: "https://github.com/Deshan005/Hangman-Game",
    },
    {
      id: 2,
      src: fuel,
      link: "https://github.com/Deshan005/Fuel-Queue-Management-System",
    },
    {
      id: 3,
      src: progression,
      link: "https://github.com/Deshan005/Progression-Outcome-Predictor",
    },
    {
      id: 4,
      src: portfolio,
      link: "https://github.com/Deshan005/PortFolio",
    },
    {
      id: 5,
      src: skincare,
      link: "https://github.com/Deshan005/Skin-Consultation-Management-System",
    },
    {
      id: 6,
      src: cinephile,
      link: "https://github.com/Deshan005/Mr-Cinephile-Movie-Website",
    },
  ];

  const handleButtonClick = (link, event) => {
    event.preventDefault();
    if (link) {
      window.open(link);
    }
  };

  return (
      <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mb-20">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(event) => handleButtonClick(link, event)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <a href={link}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
