import React from "react";

const About = () => {
  return (
      <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-12 px-4 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15 text-justify">
          I am Deshan Wijethunga, currently in my final year of the BEng (Hons) in Software 
          Engineering at the University of Westminster. Over the past years, I have built a strong 
          foundation in software development through both academic projects and industry experience 
          gained during my internships at the Center for Defense Research and Development and Apex 
          Innovations. Alongside my coursework, I have dedicated significant time to mastering the 
          MERN stack — MongoDB, Express.js, React.js, and Node.js — enabling me to develop scalable 
          and efficient full-stack web applications.
        </p>

        <br />

        <p className="text-xl text-justify mb-20">
          In addition to my technical expertise, I possess strong leadership and teamwork skills, 
          demonstrated through successful group projects and extracurricular activities. My ability 
          to communicate effectively, collaborate with diverse teams, and motivate peers has been 
          key to achieving shared goals. I am highly committed to meeting deadlines, delivering 
          high-quality solutions, and taking full ownership of my responsibilities. Currently, I am 
          working on my final-year research project — an IoT-Based Smart Agriculture System for 
          Greenhouses — where I am applying both my technical and problem-solving abilities to 
          deliver impactful results.
        </p>
      </div>
    </div>
   
  );
};

export default About;
