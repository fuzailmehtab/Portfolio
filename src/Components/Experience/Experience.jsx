import React from 'react'
import {FaCss3 , FaFigma , FaHtml5 , FaJs, FaReact} from "react-icons/fa"
import {SiBootstrap, SiRedis} from "react-icons/si"
import { SiMysql } from 'react-icons/si';
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
       <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl ml-32 text-white font-bold">Skills and Education</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} /> */}
          {/* </span> */}

           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#FF4438" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiBootstrap color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
         
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <FaGoogle color="#4285F4" size={50} /> */}
            <span className="text-white text-3xl">
              <h2 className="leading-tight">Intermediate</h2>
              <p className="text-2xl leading-tight font-thin">
                April 2021 - march 2022
              </p>
              <p className="text-2xl leading-tight font-thin">
                Agra Public School , CBSE 
              </p>
             
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            {/* <RiNetflixFill color="#E50914" size={50} /> */}
            <span className="text-3xl text-white">
             <h2 className=" text-2xl leading-tight">Bachelor Of Computer Apllication</h2>
              <p className="text-2xl leading-tight font-thin">
                August 2022 - June 2025
              </p>
              <p className="text-2xl leading-tight font-thin">
                Uttam Institute Of Technology and Management 
              </p>
            </span>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Experience