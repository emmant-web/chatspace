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
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.5, ease: "easeOut" as Easing },
};

const fadeInUpTwo = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 1, ease: "easeOut" as Easing },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8 },
};

function LandingPage() {
  return (
    <div>
      <LandingNavbar />

      <Hero />

      <motion.div {...fadeInUpTwo}>
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
