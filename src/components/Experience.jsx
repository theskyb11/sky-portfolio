import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import cpp from "../assets/cpp.png";
import figma from "../assets/figma.png";
import gcp from "../assets/gcp.png";
import git from "../assets/git.png";
import heroku from "../assets/heroku.png";
import java from "../assets/java.png";
import linux from "../assets/linux.png";
import matlab from "../assets/matlab.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import oracle from "../assets/oracle.png";
import postgresql from "../assets/postgresql.png";
import postman from "../assets/postman.png";
import spring from "../assets/spring.png";
import python from "../assets/python.png";
import sqlserver from "../assets/sql-server.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: sqlserver,
      title: "Microsoft SQL Server",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-violet-300",
    },
    {
      id: 14,
      src: oracle,
      title: "oracle",
      style: "shadow-red-400",
    },
    {
      id: 15,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 17,
      src: spring,
      title: "Spring Framework",
      style: "shadow-green-400",
    },
    {
      id: 18,
      src: figma,
      title: "Figma",
      style: "shadow-purple-400",
    },
    {
      id: 19,
      src: nodejs,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 20,
      src: gcp,
      title: "Google Cloud Platform",
      style: "shadow-white",
    },
    {
      id: 21,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 22,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-200",
    },
    {
      id: 23,
      src: heroku,
      title: "Heroku",
      style: "shadow-purple-500",
    },
    {
      id: 24,
      src: matlab,
      title: "Matlab",
      style: "shadow-cyan-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
