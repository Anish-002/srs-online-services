import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { About } from "./components/sections/About";
import { Process } from "./components/sections/Process";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { SocialSidebar } from "./components/SocialSidebar";
import { motion, useScroll, useSpring } from "motion/react";
import { MessageCircle, ArrowUp } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const message = encodeURIComponent(
  "Hello SRS Online Service, mujhe PF services ki jaankari chahiye."
);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative selection:bg-srs-cyan selection:text-white">
      <SocialSidebar />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-srs-cyan z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="icon"
              className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 shadow-2xl hover:scale-110 active:scale-95 transition-all"
            >
              <ArrowUp size={24} />
            </Button>
          </motion.div>
        )}
        
        <motion.a
          href={`https://wa.me/919408190016?text=${message}`} // Placeholder WhatsApp number, user can update this
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-2 border-slate-100 dark:border-slate-700">
            Chat with Experts
          </span>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce" />
        </motion.a>
      </div>
    </div>
  );
}

