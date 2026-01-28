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
];

function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Features Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground">Features</h2>
        </div>

        {/* Grid for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Normal on all breakpoints */}
          <div className="md:col-span-1">
            <FeatureCard
              icon={features[0].icon}
              label={features[0].label}
              title={features[0].title}
              description={features[0].description}
              image={features[0].image}
              altdesc={features[0].altdesc}
            />
          </div>

          {/* Card 2 - Normal on all breakpoints */}
          <div className="md:col-span-1">
            <FeatureCard
              icon={features[1].icon}
              label={features[1].label}
              title={features[1].title}
              description={features[1].description}
              image={features[1].image}
              altdesc={features[1].altdesc}
            />
          </div>

          {/* Card 3 - Spans 2 columns on tablet, 1 on desktop */}
          <div className="md:col-span-2 lg:col-span-1">
            <FeatureCard
              icon={features[2].icon}
              label={features[2].label}
              title={features[2].title}
              description={features[2].description}
              image={features[2].image}
              altdesc={features[2].altdesc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;