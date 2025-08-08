import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        {/* Left: Text */}
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={["Software Engineer", "Web Developer", "Full Stack Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p className="text-gray-500 py-4 max-w-md text-justify">
            I am currently an undergraduate student pursuing a degree in
            Software Engineering. I'm actively working on the MERN stack with
            the goal of becoming a full-stack developer.
          </p>

          <div className="mt-8">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-40 md:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
