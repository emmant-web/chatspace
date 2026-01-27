import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/features/Features";
import CTA from "@/components/landing/CTA";
// import LandingFooter from "@/components/landing/LandingFooter";






function LandingPage(){
    return (
        <div>
            <LandingNavbar />
            <Hero />
            <Features />
            <CTA />
            {/* <LandingFooter /> */}
        
        </div>
    )

}


export default LandingPage;