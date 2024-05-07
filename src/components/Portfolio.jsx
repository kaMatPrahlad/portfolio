import React from "react";
import Budget from "../assets/portfolio/BudgetTracker.png";
import WhatsFood from "../assets/portfolio/WhatsFood.png";
import twitter from "../assets/portfolio/twitter.png";
import zoom from "../assets/portfolio/zoom.png";
import instagram from "../assets/portfolio/instagram.png";
import Travel from "../assets/portfolio/Travel.png";

const Portfolio = () => {
  //  Link for demo
  // href for code

  const portfolios = [
    {
      id: 1,
      src: Budget,
      title: "Budget Tracker Website",
      link: "https://budget-tracker-lp69sa1j1-prahladkamats-projects.vercel.app/",
      href: "https://github.com/kaMatPrahlad/Budget-Tracker",
    },
    {
      id: 2,
      src: zoom,
      title: "Video Conferencing App",
      link: "https://zoom-clone-5vliaw9s4-prahladkamats-projects.vercel.app",
      href: " https://github.com/kaMatPrahlad/Zoom_Clone",
    },
    {
      id: 3,
      src: twitter,
      title: "Twitter UI",
      link: "https://twitter-clone-l9oyryzti-prahladkamats-projects.vercel.app",
      href: "https://github.com/kaMatPrahlad/Twitter_Clone",
    },
    {
      id: 4,
      src: instagram,
      title: "Social media App",
      link: "https://github.com/kaMatPrahlad/Instagram/deployments/Production",
      href: "https://github.com/kaMatPrahlad/Instagram",
    },
    {
      id: 5,
      src: WhatsFood,
      title: "Food Ordering App",
      link: "https://github.com/kaMatPrahlad/Flavoro/deployments/Production",
      href: "https://github.com/kaMatPrahlad/Flavoro",
    },
    {
      id: 6,
      src: Travel,
      title: "Travel Website",
      link: "https://tour-and-travel-website-gm7y96tul-prahladkamats-projects.vercel.app",
      href: "https://github.com/kaMatPrahlad/Tour_and_TravelWebsite",
    },
  ];
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
          <p className="py-6">Check Out some of my work right here </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, href, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 shadow-md shadow-gray-600">{title} </p>
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={href}
                  target="blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
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
