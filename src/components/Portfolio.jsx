// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-blue-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my projects right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button> */}
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import sip from "../assets/portfolio/sip.png";
import movieAppFrontend from "../assets/portfolio/movieAppFrontend.png";
import ticketManagement from "../assets/portfolio/ticketManagement.png";
import projectManagement from "../assets/portfolio/projectManagement.png";
import movieAppBackend from "../assets/portfolio/movieAppBackend.png";
import facebookClone from "../assets/portfolio/facebookClone.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sip,
      url: "https://github.com/theskyb11/SIP"
    },
    {
      id: 2,
      src: projectManagement,
      url: "https://github.com/theskyb11/Minor"
    },
    {
      id: 3,
      src: ticketManagement,
      url: "https://github.com/theskyb11/Ticket-Management-System"
    },
    {
      id: 4,
      src: movieAppBackend,
      url: "https://github.com/theskyb11/movieapp-backend"
    },
    {
      id: 5,
      src: movieAppFrontend,
      url: "https://github.com/theskyb11/movieapp-frontend"
    },
    {
      id: 6,
      src: facebookClone,
      url: "https://github.com/theskyb11/facebook-clone"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />  
              </a>
              <div className="flex items-center justify-center">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
