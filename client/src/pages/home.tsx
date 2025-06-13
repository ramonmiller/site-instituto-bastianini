import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Events from "@/components/events";
import Support from "@/components/support";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Apply animation to sections
    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="font-opensans">
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Events />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
