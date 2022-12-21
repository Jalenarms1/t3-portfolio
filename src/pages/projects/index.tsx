import React, {useState} from 'react'
import { projects } from '../../data/projects'
import Image from 'next/image'
import ProjectCard from "../../components/ProjectCard"

export interface Project {
    title: string,
    imageUrl: string,
    liveUrl: string,
    languages: string,
    githubUrl: string
}


export default function Project() {
    
  return (
    <>
        <div className="wrap-projects flex flex-wrap gap-y-10 justify-evenly pt-10 pb-32">
            {projects.map((proj, index) => (
                <>
                    <ProjectCard key={index} proj={proj} />
                </>

            ))}
          
        </div>

    </>
  )
}
