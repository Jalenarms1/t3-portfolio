import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {projects} from "../data/projects";
import {AiFillLinkedin} from "react-icons/ai/index";
import {BsGithub} from "react-icons/bs/index"


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Jalen Arms Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="h-[40rem] max-sm:h-[30rem] flex flex-col items-center  gap-8 justify-center ">
        <div className="flex flex-col gap-2 items-center justify-center text-cyan-600">
          <p className="text-6xl">Jalen Arms</p>
          <p className="text-center text-lg">Full-Stack Developer</p>
        </div>
        <div className="icons flex gap-2 text-slate-500">
          <Link href={"https://www.linkedin.com/in/jalen-arms-38304a241"} target="_blank" className="hover:text-cyan-600">
            <AiFillLinkedin className="text-4xl" />
          </Link>
          <Link href={"https://github.com/jalenarms1"} target="_blank" className="hover:text-cyan-600">
            <BsGithub className="text-4xl" />
          
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-400">Email</p>
          <p className="text-slate-400">jalenarms@outlook.com</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-400">Phone</p>
          <p className="text-slate-400">614-596-8904</p>
        </div>

      </div>

    </>
  );
};

export default Home;
