import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/features/Features";
import CTA from "@/components/landing/CTA";
import LandingFooter from "@/components/landing/LandingFooter";
import FAQ from "@/components/landing/FAQ";
import About from "@/components/landing/About";

// For scroll animations
import { motion } from "motion/react";

import { type Easing } from "motion/react";

// Animation variants

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};



const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as Easing },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function LandingPage() {
  return (
    <div>
      <LandingNavbar />

      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>

      <motion.div {...slideInLeft}>
        <About />
      </motion.div>

    
        <Features />
    
      <motion.div {...fadeInUp}>
        <FAQ />
      </motion.div>

      <motion.div {...scaleIn}>
        <CTA />
      </motion.div>
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
