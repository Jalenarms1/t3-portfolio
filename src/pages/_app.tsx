import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MyApp: AppType = ({ Component, pageProps }) => {
  const navigate = useRouter();

  return (
    <>
      <div className="contain-app w-full min-h-screen pb-20 bg-gray-800">
        <nav className="w-full bg-slate-900 h-16 flex justify-center text-slate-500">
            <div className="nav-right mr-5">
              <ul className="flex transition-shadow">
                <Link href={"/"}>
                  <li className={`pt-1 px-2 ${navigate.asPath === "/" ? "border-b-2 border-slate-500" : ""} `}>
                    <Image src={"/images/house-1.1s-200px.png"} alt={"home"} width={58} height={50} />
                  </li>

                </Link>
                <Link href={"/projects"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 p-5 hover:bg-gray-700 active:bg-gray-800 hover:text-gray-300 hover:transition-colors ${navigate.asPath === "/projects" ? "border-b-2 border-slate-500" : ""}`}>
                    Projects
                  </li>
                
                </Link>
                <Link href={"/education"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 p-5 hover:bg-gray-700 active:bg-gray-800 hover:text-cyan-500 hover:transition-colors ${navigate.asPath === "/education" ? "border-b-2 border-slate-500" : ""}`}>
                    Education
                  </li>
                
                </Link>
                <Link href={"/resume"}>
                  <li className={`cursor-pointer shadow-inner hover:shadow-slate-500 p-5 hover:bg-gray-700 active:bg-gray-800 hover:text-cyan-500 hover:transition-colors ${navigate.asPath === "/resume" ? "border-b-2 border-slate-500" : ""}`}>
                    Resume
                  </li>
                
                </Link>
              </ul>
            </div>
          </nav>
        <Component {...pageProps} />
      </div>
    
    </>
  )
};

export default trpc.withTRPC(MyApp);
