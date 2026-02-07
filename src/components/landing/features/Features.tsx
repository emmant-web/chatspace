import FeatureCard from "./FeatureCard";
import { MessageCircle, Compass, Sparkles } from 'lucide-react';
import GeneralChat from "../../../assets/images/zoomed-general-chat.png"
import BrowseRooms from "../../../assets/images/zoomed-browse-rooms.png"
import CreateNewRoom from "../../../assets/images/zoomed-create-new-room.png"

// For scroll animations
import { motion } from "motion/react";

// Stagger animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between each card
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
    }
  }
};

const features = [
  {
    icon: MessageCircle,
    label: "Instant Connection",
    title: "Join General Chat",
    description: "Jump right into conversations with our active community. No barriers, no waiting—start chatting immediately with people from around the world in our welcoming general chat room.",
    image: GeneralChat,
    altdesc: "Active chat conversation interface",
  },
  {
    icon: Compass,
    label: "Discover Communities",
    title: "Browse Rooms",
    description: "Explore diverse chat rooms tailored to your interests. Whether you're into gaming, tech, art, or casual hangouts—find your perfect community and connect with like-minded people.",
    image: BrowseRooms,
    altdesc: "Grid of various chat rooms",
  },
  {
    icon: Sparkles,
    label: "Build Your Space",
    title: "Create Your Own",
    description: "Turn your vision into reality by creating a custom chat room. Set your own rules, invite friends, and cultivate a unique space where your community can thrive and grow together.",
    image: CreateNewRoom,
    altdesc: "Chat room creation interface",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Features Header */}

         <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-foreground">Features</h2>
       </motion.div>

        {/* Grid for Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 - Normal on all breakpoints */}
          <motion.div className="md:col-span-1" variants={item}>
            <FeatureCard
              icon={features[0].icon}
              label={features[0].label}
              title={features[0].title}
              description={features[0].description}
              image={features[0].image}
              altdesc={features[0].altdesc}
            />
          </motion.div>


          {/* Card 2 - Normal on all breakpoints */}
          <motion.div className="md:col-span-1" variants={item}>
            <FeatureCard
              icon={features[1].icon}
              label={features[1].label}
              title={features[1].title}
              description={features[1].description}
              image={features[1].image}
              altdesc={features[1].altdesc}
            />
          </motion.div>

          {/* Card 3 - Spans 2 columns on tablet, 1 on desktop */}
          <motion.div className="md:col-span-2 lg:col-span-1" variants={item}>
            <FeatureCard
              icon={features[2].icon}
              label={features[2].label}
              title={features[2].title}
              description={features[2].description}
              image={features[2].image}
              altdesc={features[2].altdesc}
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Features;