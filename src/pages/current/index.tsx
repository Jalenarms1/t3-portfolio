import React from 'react'
import Contact from '../../components/Contact'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'

export default function Current() {
  return (
    <>
        <div className="wrap-projects flex flex-wrap gap-10 justify-center pt-10 pb-32 max-sm:pb-52 mx-10">
            {projects.filter(item => item.title ==="StarHealth").map((proj, i) => (
                <>
                    <div key={i} className='flex flex-col items-center gap-8'>
                        <ProjectCard proj={proj} />
                        <div className='flex flex-col sm:[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]  m-auto p-4 rounded shadow-md shadow-cyan-600'>

                            <p className='text-slate-50 leading-loose'> 
                                I have been freelancing for a start-up web application with an employer that hired me through <a href="https://www.upwork.com/freelancers/~01cd6b779e11f90eb8" rel='noreferrer' target="_blank" className='underline text-cyan-500 hover:text-cyan-600'>upwork</a>. I have restructured the database to simplify the tables where there was reocurring data and created a new table as a central source of reference for the original tables to have a relation to.
                                <br />
                                <br />
                                I have also added a directory page and was soley responsible for all of its functionality. It required desiging a function in the server to communicate with the database to query for certain pieces of information based on the requested subject or filters, if any. A cool feature I added on was pagination, so the user can click a button to populate more information. This eliminates the need to query too much data at once, when the user can just click to see more as much as they want.

                            </p>

                        </div>

                    </div>
                </>
            ))}
            <Contact />
        </div>
    </>
  )
}
