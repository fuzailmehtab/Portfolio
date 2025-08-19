import React from "react";
import AvatarImg2 from "../../assets/1122-.png"
import TextChange from "../../TextChange";
function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Enthusiastic and detail-oriented BCA student with hands-on experience in front-end web document .
          Skilled in building secure, scalable, and responsive web applications using modern JavaScript frameworks and tools. 
          I’m excited to join a team that values collaboration and continuous learning.
        </p>
        <a href="#Contact">
    <button className="mt-5 md:md-10 text-white px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
    </button>
    </a>
      </div>
      <div><img className src={AvatarImg2} alt="IMAGE" /></div>
    </div>
  );
}
export default Home;