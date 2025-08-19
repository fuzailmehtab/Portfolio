import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
function Footer() {
  return (
    <div 
    id='Contact' 
    className='flex justify-around bg-blue-950 text-white p-10 md:p-12 items-center'>
        <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
        </div>
        <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-center" ><MdOutlineEmail size={20} />fuzailmehtab9@gmail.com</li>
            <li className="flex gap-1 items-center"> <CiLinkedin />https://www.linkedin.com/in/fuzail-mehtab-a31730357/</li>
            <li className="flex gap-1 items-center"> <FaGithub /> https://github.com/fuzailmehtab/</li>
        </ul>
    </div>
  )
}
export default Footer