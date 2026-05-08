import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Volunteering from "@/components/sections/Volunteering";

export default function Home() {
  return (
    <>
<Hero />
<Projects />
<Experience />
<Education />       {/* new */}
<Research />
<Skills />
<Certifications />
<Volunteering />    {/* new */}
<Contact />
    </>
  );
}
