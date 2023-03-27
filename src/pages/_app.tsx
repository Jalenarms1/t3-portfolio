import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SiHomebridge  } from "react-icons/si/index";

const MyApp: AppType = ({ Component, pageProps }) => {
  const navigate = useRouter();

  return (
    <>
      <div className="contain-app w-[100%] min-h-screen bg-zinc-500 relative">
        {/* <nav className="w-full bg-slate-900 h-16 flex justify-center text-slate-500">
            <div className="nav-right mr-5">
              <ul className="flex transition-shadow">
                <Link href={"/"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 px-5 py-3 h-full hover:bg-gray-700 active:bg-gray-800 hover:text-cyan-600 hover:transition-colors ${navigate.asPath === "/" ? "border-b-2 border-slate-500" : ""}`}>
                    <SiHomebridge className={` text-4xl`} />
                  </li>
                
                </Link>
                <Link href={"/projects"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 p-5 hover:bg-gray-700 active:bg-gray-800 hover:text-cyan-600 hover:transition-colors ${navigate.asPath === "/projects" ? "border-b-2 border-slate-500" : ""}`}>
                    Projects
                  </li>
                
                </Link>
                
                <Link href={"/previous"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 p-5 hover:bg-gray-700 active:bg-gray-800 hover:text-cyan-500 hover:transition-colors ${navigate.asPath === "/previous" ? "border-b-2 border-slate-500" : ""}`}>
                    Previously
                  </li>
                
                </Link>
              </ul>
            </div>
          </nav> */}
        <Component {...pageProps} />

        {/* <footer className="mt-16 p-2 bg-slate-900 text-gray-300  flex max-sm:flex-col max-sm:items-center gap-10 absolute bottom-0 w-full">
          <div className="email flex  gap-6 ">
            <div className="text-slate-400">
              <a href="mailto:jalenarms@outlook.com">Email </a>
              
            </div>
            <div className="text-slate-100">
            <a href="mailto:jalenarms@outlook.com">jalenarms@outlook.com</a>
              
            </div>

          </div>
          <div className="phone flex  gap-6 ">
            <div className="text-slate-400">
              Phone
            </div>
            <div className="text-slate-100">
              <p>614-596-8904</p>
            </div>

          </div>
        </footer> */}
      </div>
    
    </>
  )
};

export default trpc.withTRPC(MyApp);
