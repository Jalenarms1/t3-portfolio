import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { useRouter } from "next/router";
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
