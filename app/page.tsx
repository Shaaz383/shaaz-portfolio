import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from '@/components/Footer'
import { FaHome } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import PracticeProjects from "@/components/PracticeProjects";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems= {navItems}/>
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <Clients/>
          <Experience/>
          <PracticeProjects/>
          <ContactForm/>
          <Footer/>
        </div>
    </main>
  );
}
