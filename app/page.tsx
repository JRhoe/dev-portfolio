// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Metadata } from "next";
// import { FaHome } from "react-icons/fa";

export const metadata: Metadata = {
  title: "James Rhoe",
  description: "Take a look at some of my recent projects and work experience!"
}

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] fixed bg-black">
        <BackgroundBeams/>
      </div>
      <main className="relative bg-transparent flex
      justify-center items-center flex-col mx-auto
      sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Grid/>
          <RecentProjects/>
          {/* <Clients/> */}
          <Experience/>
          <Footer/>
        </div>
      </main>
    </>
  );
}
