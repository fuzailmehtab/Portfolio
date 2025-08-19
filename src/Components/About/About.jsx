import React from "react"
import AboutImg from "../../assets/14414.png";
// import {IoArrowForward} from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5"
function About() {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
       mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className="md:h-80" src={AboutImg}  alt="" />

            <ul>
                <div className='flex gap-3 py-4'>
                     <IoArrowForward size={30} className="mt-1" />
                        <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  "I’m a passionate frontend developer skilled in building modern, interactive, and accessible websites.
                   I love transforming ideas into beautiful, functional digital experiences using HTML, CSS, JavaScript,
                    React, Tailwind CSS, and Bootstrap."
                </p>
              </span>
                </div>
                <div className='flex gap-3 py-4'>
                     <IoArrowForward size={30} className="mt-1" />
                        <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                     Skills Section
                </h1>
                <p className="text-sm md:text-md leading-tight">
                <p>
                Tools: Git, VS Code, Chrome DevTools</p>
                <p>
                Frameworks & Libraries: React.js, Tailwind CSS, Bootstrap   </p>

                <p>Core Expertise: Responsive Design, UI/UX Implementation, Cross-Browser Compatibility,
                   Performance Optimization</p>
                <p>
                Tools: Git, VS Code, Chrome DevTools</p>
               </p>
              </span>
                </div>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default About