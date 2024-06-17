import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Achievements from "@/components/ui/Achievements";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100
     flex justify-center items-center flex-col
      mx-auto overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
