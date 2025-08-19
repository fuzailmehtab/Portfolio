import React from 'react'
import ProjectCard from './ProjectCard'
import fitnessImg from "../../assets/ftness.jpg"
import studioImg from "../../assets/studio.jpg"
import Webpage from "../../assets/141414.jpg"
const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white '>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
            <ProjectCard title="Ai Powered fitness website" 
             main='this is a fitness website created in HTML , CSS , JavaScript'
             image={fitnessImg}
             />
            <ProjectCard title="Animated Studio website"
             main='this is a animated studio website created in HTML , CSS , JavaScript '
             image={studioImg}
             
              />
            <ProjectCard title="Dynamic Webpage"
             main='A login/dashboard that shows user-specific content'   
             image={Webpage}          
              />
        </div>

    </div>
  )
}

export default Projects