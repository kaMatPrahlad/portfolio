import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p classname="text-4xl font-bold inline border-b-4 border-gray-500 ">
          <b>WHO AM I ?</b>
          </p>
          


        <br />
        <p>
         Hello Everyone I'm <b>Prahlad kamat</b> from <b>Mumbai India</b> Frontend developer,
         I've taken coding seriously since 2021, and have been making
         <b> Web Applications</b> since then.
        </p>

        <br />
        <p>
          Proficient in <b>JavaScript & Typescript </b> Specializing in <b>React, Tailwind, Bootstrap, HTML, Css, Scss .</b>
           Currently focusing on <b>redux</b> and <b>Node Js.</b>
    
        </p>
      </div>
    </div>
  );
};

export default About;
