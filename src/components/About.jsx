import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15 text-justify">
          I'am Namidu Deshan Wijethunga. Currently, I am in my second year of studies, and I have been actively involved in 
          enhancing my technical skills and knowledge. In addition to my coursework, I have been 
          dedicating my time to self-study the MERN stack, which encompasses MongoDB, Express.js,
          React.js, and Node.js. I believe that by learning this stack, I am equipping myself to 
          become a well-rounded and versatile developer.
        </p>

        <br />

        <p className="text-xl text-justify mb-20">
        Apart from my technical abilities, I possess strong leadership qualities, as 
        demonstrated by my involvement in various group projects and extracurricular activities 
        during my academic journey. I believe in effective communication, collaboration, and the ability to inspire and motivate team members to achieve common goals.
        One of my strengths is my commitment to meeting deadlines and delivering quality work. 
        I understand the importance of responsibility and accountability in a professional 
        environment. I take ownership of my tasks and strive to exceed expectations by 
        producing high-quality code and solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
