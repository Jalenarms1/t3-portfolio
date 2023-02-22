import React from 'react'
import Contact from '../../components/Contact'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'

export default function Current() {
  return (
    <>
        <div className="wrap-projects flex flex-wrap gap-10 justify-center pt-10 pb-32 max-sm:pb-52 mx-10">
            {projects.filter(item => item.title ==="Silly Socks and More").map((proj, i) => (
                <>
                    <div key={i} className='flex flex-col items-center gap-8'>
                        <ProjectCard proj={proj} />
                        <div className='flex flex-col sm:[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]  m-auto p-4 rounded shadow-md shadow-cyan-600'>

                            {/* <p className='text-slate-50 leading-loose'> 
                                I have been freelancing for a start-up web application with an employer that hired me through <a href="https://www.upwork.com/freelancers/~01cd6b779e11f90eb8" rel='noreferrer' target="_blank" className='underline text-cyan-500 hover:text-cyan-600'>upwork</a>. I built a full-stack ecommerce website for their coffee shop. All server logic was written in PHP to take the data being passed from the client to insert it into the database. The application utilizes the paypal api to complete purchases. I used a PHP superglobal to help manage user sessions, when the user successfully creates or logs into their account.
                                <br />
                                <br />
                                I implemented all HTML, CSS, and JavaScript that was required to fit the requirements of design and user interaction. My contract was also extended to help deploy the application, and I was able to successfully deploy it to a web host and a remote database.

                            </p> */}
                            <p className='text-slate-50 leading-loose'> 
                                I have built this applciation for a local start-up business, Silly Socks and More. It is a full-stack ecommerce website for their silly sock shop. All server logic was written in Prisma with a tRPC configured API to take the data being passed from the client to insert it into the database. The application utilizes the paypal api to complete purchases. The paypal and order functionalilty uses the sandbox paypal api as of now for the local business to be able to get started before actually accepting orders, and it will be a small change to insert the live paypal api to accept orders.
                                <br />
                                <br />
                                I implemented all HTML, CSS, and JavaScript that was required to fit the requirements of design and user interaction. I also successfully deployed the application to a live URL and configured it to their business domain.

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
