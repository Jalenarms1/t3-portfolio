import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SiHomebridge  } from "react-icons/si/index";
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  const navigate = useRouter();

  return (
    <>
      <div className="contain-app w-[100%] min-h-screen bg-gray-900 relative">
        
        <Navbar />
        <Component {...pageProps} />

        
      </div>
    
    </>
  )
};

export default trpc.withTRPC(MyApp);
