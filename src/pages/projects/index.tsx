import React, {useState} from 'react'
import { projects } from '../../data/projects'
import Image from 'next/image'
import ProjectCard from "../../components/ProjectCard"
import Contact from '../../components/Contact'

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
    <>
        <div className="wrap-projects flex flex-wrap gap-10 justify-center pt-10 pb-32 max-sm:pb-52 px-10">
            {projects.map((proj, index) => (
                <ProjectCard key={index} proj={proj} />
        
            ))}

            <Contact />
          
        </div>

    </>
  )
}
