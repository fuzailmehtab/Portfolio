import React from "react";
// import bannerImg from "../../assets/ftness.jpg";
const ProjectCard = ({ title, main , image}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* <img className="p-4" src={bannerImg} alt="" /> */}
      <img className="p-4 rounded-xl" src={image} alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button onClick={() => window.open("https://github.com/fuzailmehtab?tab=repositories", "_blank")} className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
         hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
        <button onClick={() => window.open("https://drive.google.com/file/d/1gQH_5f4k3vMXpBs_3Izz3IkZ_s3upvSo/view?usp=sharing", "_blank")} className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
         hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;