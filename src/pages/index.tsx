import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {projects} from "../data/projects";
import {AiFillLinkedin} from "react-icons/ai/index";
import {BsGithub} from "react-icons/bs/index"
import {SiUpwork} from "react-icons/si/index"
import NewProjectCard from "../components/NewProjectCard";
import { Project } from "./projects";
import Image from "next/image";


const Home: NextPage = () => {
 
  return (
    <>
      <Head>
        <title>Jalen Arms Portfolio</title>
        <meta name="description" content="Jalen Arms Portfolio 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero bg-cover bg-center flex justify-between" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .85)), url("https://res.cloudinary.com/dvlhy87zl/image/upload/v1679852321/dynamic-wavy-line-colorful-background_67845-1117_jiumzc.jpg")'}}>
        <div className=" w-[90%] mx-auto pt-40 pb-20">
          <div className="flex flex-col">
            <h1 className="text-6xl max-sm:text-5xl font-bold text-white leading-tight ">
              Jalen Arms
            </h1>
            <p className="w-fit text-gray-300 text-xl">Data Engineer at Community Bridges, Inc.</p>
            <a className="w-fit text-sm text-gray-300 hover:text-blue-500" href="mailto:jalenarms@outlook.com text-xs">Email: jalenarms@outlook.com</a>
            <div className="icons flex gap-3 text-gray-300 my-2">
              <Link href={"https://www.linkedin.com/in/jalen-arms-38304a241"} target="_blank" className="hover:text-blue-600">
                <AiFillLinkedin className="text-4xl" />
              </Link>
              <Link href={"https://github.com/jalenarms1"} target="_blank" className="hover:text-blue-600">
                <BsGithub className="text-4xl" />
              </Link>
              <Link href={"https://www.upwork.com/freelancers/~01cd6b779e11f90eb8"} target="_blank" className="hover:text-blue-600">
                <SiUpwork className="text-4xl" />
              </Link>
            </div>
          </div>
            <div className="py-3"></div>
          <p className="text-xl text-white leading-tight mb-5">
            Full-stack Software Developer.
          </p>
          <p className="text-sm text-white leading-tight mb-12">
           Angular <span className="text-red-500">|</span> ASP.NET 6 <span className="text-blue-500">|</span> React JS <span className="text-purple-500">|</span> Next.js <span className="text-cyan-500">|</span>  Node.js <span className="text-green-500">|</span> Python <span className="text-indigo-500">|</span> SQL Server
          </p>
          
        </div>
        
      </section>
      <section className="bg-gray-900 py-10">
        <div className=" mx-auto w-[90%]">
          <h2 className="text-5xl w-fit  text-gray-100 font-bold border-b border-gray-700 shadow-inner shadow-gray-900 pr-4 py-5 ">Projects</h2>
          <p className="text-sx mt-4 mb-10 text-gray-500">(Click on any image or title to view the deployed application)</p>
          <div className="flex flex-col max-sm:gap-14 sm:gap-20 w-full">
            {projects.slice(0,3).map((proj, index) => (
              <NewProjectCard key={index} proj={proj} />
          
            ))}
            
            <div className="see-more-btn w-full flex justify-center py-8" id="see-more-btn">
              <Link href={"/projects"} className="w-1/4 max-sm:w-3/4 px-3 py-2 bg-gray-300 hover:bg-gray-200 active:bg-gray-300 rounded-md text-gray-900 text-center">
                See More...
              </Link>
            </div>
            
            
            
          </div>
          
        </div>
      </section>
      


      




    
      
    </>
  );
};

export default Home;
