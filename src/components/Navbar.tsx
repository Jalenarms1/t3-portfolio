import Link from 'next/link'
import React, {useState} from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FcDocument } from 'react-icons/fc'
import { IoMdCodeWorking } from 'react-icons/io'
import ResumeModal from './ResumeModal'

export default function Navbar() {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toggleModal = () => {
      setOpenModal(!openModal)
    }

  return (
    <nav className="absolute px-10 top-0 left-0 w-full z-50">
        <div className="">
          <div className="flex items-center justify-between py-4">
            <button onClick={toggleModal} className="text-lg text-gray-900 font-bold bg-gray-100 hover:bg-gray-400 rounded-full transition-colors px-4 py-2 flex items-center gap-1">
              <FcDocument />
              <p>Resume</p>
            </button>
            
            <div className="flex items-center">
              <Link href="/"className={`text-white hover:text-gray-300 px-4 flex items-center gap-1`}>
                <BiHomeAlt2 />
                <p>Home</p>
              </Link>
              <Link href="/projects"className="text-white hover:text-gray-300 px-4 flex items-center gap-1">
                <IoMdCodeWorking />
                <p>Projects</p>
              </Link>
              {/* <Link href="/about"className="text-white hover:text-gray-300 px-4 flex items-center gap-1">
                <BsGithub />
                <p>Github</p>
              </Link> */}
            </div>
          </div>
        </div>
        {openModal ? <ResumeModal toggleModal={toggleModal} /> : null}
      </nav>

  )
}
