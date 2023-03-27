import React, {useState} from 'react'
import { projects } from '../../data/projects'
import Image from 'next/image'
import ProjectCard from "../../components/ProjectCard"
import Contact from '../../components/Contact'
import Link from 'next/link'

export interface Project {
    title: string,
    imageUrl: string,
    liveUrl: string,
    description: string,
    languages: string,
    githubUrl: string
}


export default function Project() {
    
  return (
    <div style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .85)), url("https://res.cloudinary.com/dvlhy87zl/image/upload/v1679852321/dynamic-wavy-line-colorful-background_67845-1117_jiumzc.jpg")'}}>
      
      <div className=" mx-auto w-[90%] py-32">
        <h2 className="text-6xl max-sm:text-4xl max-sm:text-center max-sm:w-full w-fit  text-gray-100 font-bold   pr-4 py-5 mb-10">Project Catalog</h2>
        {/* <p className="text-sx mt-4 mb-10 text-gray-500">(Click on any image or title to view the deployed application)</p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((item: Project, index: number) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:even:shadow-cyan-600 hover:odd:shadow-red-600">
              <a href={item.liveUrl} target="_blank" rel='noreferrer'>
                <Image width={500} height={300} className="h-52 max-sm:w-full xl:w-full" src={item.imageUrl} alt="Image 1"/>
              </a>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-xs">{item.languages}</p>
              </div>
            </div>

          ))}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image width={300} height={300} className="w-full h-48 object-cover" src="https://via.placeholder.com/640x360.png?text=Image+2" alt="Image 2"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Image 2</h3>
              <p className="text-gray-700">Description of Image 2.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image width={300} height={300} className="w-full h-48 object-cover" src="https://via.placeholder.com/640x360.png?text=Image+3" alt="Image 3"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Image 3</h3>
              <p className="text-gray-700">Description of Image 3.</p>
            </div>
          </div> */}
        </div>   
      </div> 
    </div>
  )
}
