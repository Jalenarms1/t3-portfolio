import Link from 'next/link'
import React, {useState} from 'react'
import { type Project } from '../pages/projects'
import Image from 'next/image'

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
          
          <div className="card-img border-b border-gray-300 pb-12 flex">
            <Link href={`${proj.liveUrl}`} target="_blank" className=''>
              <Image src={proj.imageUrl} alt={"proj-img"} width={500} height={500} className="rounded shadow-lg shadow-slate-500 h-64 hover:shadow-xl hover:shadow-cyan-600" />
            
            </Link>

          </div>
          <div className="card-body text-slate-50 flex flex-col items-center py-2 gap-3">
          <h4 className="text-2xl">{proj.title}</h4>
          <p className="text-xs text-cyan">{proj.languages}</p>
          </div>

        </div>
    </>
  )
}
