import AboutMe from "@/componnents/main/aboutMe";
import Contact from "@/componnents/main/contact";
import Encryption from "@/componnents/main/encryption";
import Footer from "@/componnents/main/footer";
import Hero from "@/componnents/main/hero";
import Projects from "@/componnents/main/projects";
import Skills from "@/componnents/main/skills";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <AboutMe/>
        {/* <Encryption/> */}
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
