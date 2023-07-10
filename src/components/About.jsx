import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About
          </p>
        </div>

        <p className="text-xl mt-2">
          With a passion for web development, I specialize in full stack
          development. I bring expertise in building scalable and efficient
          applications with modern technologies and frameworks. I have a strong
          foundation in both front-end and back-end development, along with
          experience in cloud technologies.
        </p>

        <p className="text-xl mt-5 text-white">
          My goal is to create impactful web solutions that provide an excellent
          user experience. My technical skills combined with my ability to adapt
          quickly to new technologies make me an asset in fast-paced and dynamic
          environments. I am dedicated to continuous learning and staying
          up-to-date with the latest industry trends to provide innovative and
          cutting-edge solutions. Let's work together to bring your ideas to
          life and create exceptional web experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
