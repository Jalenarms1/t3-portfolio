import Image from 'next/image'
import React from 'react'
import type { Project } from '../pages/projects'

export default function NewProjectCard({proj}: {proj: Project}) {
  return (
    <div className="flex proj gap-5">
        <a href={proj.liveUrl} target="_blank" rel='noreferrer' className="shadow-md shadow-slate-400 rounded-lg cursor-pointer hover:shadow-slate-100">
            <Image width={800} height={300} src={proj.imageUrl} alt="Project 1" className=" object-cover rounded-lg h-full" />
        </a>
        <div className="w-3/4 px-4 py-2 flex justify-center items-center flex-col gap-2">
            <a href={proj.liveUrl} target="_blank" rel='noreferrer' className="text-2xl  mb-2 font-semibold text-zinc-100 border-b border-b-slate-500 rounded-2xl px-4 py-2 hover:shadow-sm hover:shadow-gray-500 cursor-pointer">{proj.title}</a>
            <p className="text-zinc-100 text-md mb-4 w-3/4 text-center">{proj.description}</p>
            <p className="text-gray-400 mb-4 w-4/5 text-xs text-center">{proj.languages}</p>
        
        </div>
    </div>
  )
}
