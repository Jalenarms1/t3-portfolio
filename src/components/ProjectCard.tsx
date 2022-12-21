import Link from 'next/link'
import React, {useState} from 'react'
import { type Project } from '../pages/projects'

export default function ProjectCard({proj}: {proj: Project}) {

  const [showBtns, setShowBtns] = useState(false)

  const handleShowBtn = (bool?: string) => {
    if(bool === "true"){
      setShowBtns(true)
    }else{
      setShowBtns(false)
    }
  }

  return (
    <>
        <div className="proj cursor-pointer">
            {<div onMouseOver={() => handleShowBtn("true")} onMouseLeave={() => handleShowBtn()} className={`card-img flex justify-center items-center h-64 w-[35rem] shadow-lg ${!showBtns ? "shadow-slate-500" : "shadow-cyan-600" } rounded`} style={{backgroundImage: `url('${proj.imageUrl}')`,backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                {showBtns && <div className='flex gap-3 backdrop-blur-lg  w-full h-full justify-center items-center'>
                    <Link href={`${proj.liveUrl}`}>
                      <button className='text-md px-6 rounded py-1 text-cyan-500 bg-slate-800 hover:shadow-md hover:shadow-cyan-500'>Test</button>
                    </Link>
                    <Link href={`${proj.githubUrl}`}>

                    </Link>
                    <button className='text-md px-6 rounded py-1 text-cyan-500 bg-slate-800 hover:shadow-md hover:shadow-cyan-500'>View code</button>
                </div>}
            </div>}
            <div className="card-body text-slate-50 flex flex-col items-center py-2 gap-3 border-t border-gray-300 mt-10">
            <h4 className="text-2xl">{proj.title}</h4>
            <p className="text-xs text-cyan">{proj.languages}</p>
            </div>

        </div>
    </>
  )
}
