// import React from "react";
// import HeroImage from "../assets/heroImage.jpeg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a 
//           </h2>
//           <h2 className="text-4xl sm:text-7xl font-bold text-blue-500">Full Stack Developer</h2>
//           <p className="text-gray-500 py-4 max-w-md">
//             I am B.Tech CSE Student at Savitribai Phule Pune University. I
//             gather knowledge and experience in the field of Computer Science and
//             Engineering. My Passion is to create, develop and deploy web
//             applications. I am also a cloud enthusiast and looking forword to
//             learn new technologies.
//           </p>

//           <div>
//             <Link
//               to="portfolio"
//               duration={500}
//               smooth
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="block">I am a</span>
            <span className="text-blue-500">Full Stack Developer</span>
          </h2>
          <p className="text-white py-4 max-w-md">
            I am a B.Tech CSE Student at <a href="https://mitaoe.ac.in" className="cursor-pointer font-semibold text-blue-300" target="_blank" rel="noreferrer">Savitribai Phule Pune University</a>. I gather knowledge and experience in the field of <a href="https://mitaoe.ac.in/mitaoe-school-of-computer-engineering-and-technology.php" className="cursor-pointer font-semibold text-blue-300" target="_blank" rel="noreferrer">Computer Science and Engineering</a>. My passion is to create, develop, and deploy web applications. I am also a cloud enthusiast and looking forward to learning new technologies.
          </p>

          <div>
            <Link
              to="portfolio"
              duration={500}
              smooth
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full hover:scale-105 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
