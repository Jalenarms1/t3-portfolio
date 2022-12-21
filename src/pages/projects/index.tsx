import React from 'react'
import { projects } from '../../data/projects'
import Image from 'next/image'

export default function Project() {
  return (
    <>
        <div className="wrap-projects flex flex-wrap gap-y-10 justify-evenly pt-10 pb-32">
            {projects.map(proj => (
                <>
                <div className="proj">
                    <div className="card-img border-b border-gray-300 pb-12 flex">
                        <Image src={proj.imageUrl} alt={"proj-img"} width={500} height={500} className="rounded shadow-lg shadow-slate-500 h-64" />

                    </div>
                    <div className="card-body text-slate-50 flex flex-col items-center py-2 gap-3">
                    <h4 className="text-2xl">{proj.title}</h4>
                    <p className="text-xs text-cyan">{proj.languages}</p>
                    <p>{}</p>
                    </div>

                </div>
                </>

            ))}
          
        </div>

    </>
  )
}
