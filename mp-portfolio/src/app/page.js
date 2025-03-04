'use client';
import { Footer } from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import { AboutPage } from "@/pages/AboutSection/AboutPage";
import { ContactPage } from "@/pages/ContactSection/ContactPage";
import { LandingPage } from "@/pages/HeroSection/LandingPage";
import { ProjectsPage } from "@/pages/ProjectsSection/ProjectsPage";
import Head from "next/head";
import { useEffect, useState } from "react";



export default function Home() {
  const [isAnimationEnd, setIsAnimationEnd] = useState(true);
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

  return (
    <>
      <Head>
        <title>Hello Visiter</title>
      </Head>
      { isAnimationEnd && <IntroSection className={"z-30"}/>}
      { !isAnimationEnd && <LandingPage isMobile={ isMobile } />}
      <AboutPage isMobile={isMobile}/>
      <ProjectsPage isMobile={isMobile} isDesktop={isDesktop}/>
      <ContactPage/>
      <Footer/>
    </>
  );
}