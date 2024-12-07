'use client';
import IntroSection from "@/components/IntroSection";
import { TourGuider } from "@/components/TourGuider";
import { AboutPage } from "@/pages/AboutPage";
import { LandingPage } from "@/pages/LandingPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { useEffect, useState } from "react";



export default function Home() {
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);  

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationEnd(false);
    }, 7000);
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsDesktop(window.innerWidth >= 1280);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAnimationEnd) {
      // Scroll'u devre dışı bırak
      document.body.classList.add("overflow-hidden");
    } else {
      // Scroll'u yeniden etkinleştir
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      // Temizleme (Komponent unmount olduğunda)
      document.body.classList.remove("overflow-hidden");
    };
  }, [isAnimationEnd]);

  
      //<div className="w-screen h-screen justify-items-center content-center">
      //  <h1 className="heading0">Ben Gay</h1>
      //</div>

  return (
    <>
      { isAnimationEnd && <IntroSection className={"z-30 "}/>}
      { !isAnimationEnd && <LandingPage isMobile={ isMobile } />}
      <AboutPage isMobile={isMobile}/>
      <ProjectsPage isMobile={isMobile} isDesktop={isDesktop}/>
    </>
  );
}
