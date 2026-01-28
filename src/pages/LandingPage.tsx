import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/features/Features";
import CTA from "@/components/landing/CTA";
import LandingFooter from "@/components/landing/LandingFooter";
import FAQ from "@/components/landing/FAQ";
import About from "@/components/landing/About"






function LandingPage(){
    return (
        <div>
            <LandingNavbar />
            <Hero />
            <About />
            <Features />
            <FAQ />
            <CTA />
            <LandingFooter />
        </div>
    )

}


export default LandingPage;