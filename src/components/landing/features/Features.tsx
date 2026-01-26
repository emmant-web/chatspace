import FeatureCard from "./FeatureCard";
import { MessageCircle, Compass, Sparkles } from 'lucide-react';



const features = [
  {
    icon: MessageCircle,
    label: "Instant Connection",
    title: "Join General Chat",
    description: "Jump right into conversations with our active community. No barriers, no waiting—start chatting immediately with people from around the world in our welcoming general chat room.",
    image: "https://placehold.co/600x400",
    altdesc: "Active chat conversation interface",
  },
   {
    icon: Compass,
    label: "Discover Communities",
    title: "Browse Rooms",
    description: "Explore diverse chat rooms tailored to your interests. Whether you're into gaming, tech, art, or casual hangouts—find your perfect community and connect with like-minded people.",
    image: "https://placehold.co/600x400",
    altdesc: "Grid of various chat rooms",
  },
  {
    icon: Sparkles,
    label: "Build Your Space",
    title: "Create Your Own",
    description: "Turn your vision into reality by creating a custom chat room. Set your own rules, invite friends, and cultivate a unique space where your community can thrive and grow together.",
    image: "https://placehold.co/600x400",
    altdesc: "Chat room creation interface",
  },

]


function Features() {
  return (
    <section className="mx-2">
      {/* features header */}
      <div className="text-center mb-3 text-2xl font-bold">
        <h3 className="text-center mb-3 text-2xl font-bold">Features</h3>
      </div>


         {/* grid for features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2">
        {features.map((feature, index) => (
          <FeatureCard
          key={index}
          icon={feature.icon}
          label={feature.label}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          altdesc={feature.altdesc}
          />
        ))}
      </div>

   
    </section>
  );
}

export default Features;
