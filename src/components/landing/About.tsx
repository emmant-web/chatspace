
import { Code2, Zap, Heart, Globe } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-small font-semibold text-primary tracking-wide">
              OUR STORY
            </span>
          </div>
          <h2 className="text-h2 text-foreground mb-6">
            Why ChatSpace Exists
          </h2>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Story */}
          <div className="space-y-6">
            <p className="text-body-lg text-foreground leading-relaxed">
              ChatSpace was born from a simple idea:{" "}
              <span className="font-semibold text-foreground">
                conversations should be effortless
              </span>
              . We believe that connecting with others shouldn't require
              complicated setups, lengthy sign-ups, or restrictive paywalls.
            </p>
            <p className="text-body-lg text-foreground leading-relaxed">
              What started as a personal project to explore modern web
              technologies evolved into something bigger. Built entirely with
              TypeScript and powered by real-time architecture, ChatSpace strips
              away the complexity and gives you what matters:{" "}
              <span className="font-semibold text-foreground">
                fast, reliable, real-time conversations
              </span>
              .
            </p>
            <p className="text-body-lg text-foreground leading-relaxed">
              Whether you're coordinating with teammates, catching up with
              friends, or meeting new people, we're creating the chat experience
              we always wished existed—one without friction, ads, or hidden costs.
            </p>
          </div>

          {/* Right side - Values grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-body-lg font-bold text-card-foreground mb-2">
                Lightning Fast
              </h3>
              <p className="text-small text-muted-foreground">
                Real-time messaging with zero lag
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-body-lg font-bold text-card-foreground mb-2">
                Free Forever
              </h3>
              <p className="text-small text-muted-foreground">
                No hidden fees, no upsells
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-body-lg font-bold text-card-foreground mb-2">
                Modern Stack
              </h3>
              <p className="text-small text-muted-foreground">
                Built with TypeScript & Supabase
              </p>
            </div>

            <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-body-lg font-bold text-card-foreground mb-2">
                User-Focused
              </h3>
              <p className="text-small text-muted-foreground">
                Designed for simplicity & speed
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-h3 text-foreground mb-4">
              Built for Performance
            </h3>
            <p className="text-body-lg text-muted-foreground mb-8">
              Powered by cutting-edge technologies to deliver the fastest,
              most reliable chat experience possible.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-6 py-3 bg-card rounded-xl border border-border shadow-sm">
                <span className="font-semibold text-card-foreground">
                  TypeScript
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-xl border border-border shadow-sm">
                <span className="font-semibold text-card-foreground">
                  React
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-xl border border-border shadow-sm">
                <span className="font-semibold text-card-foreground">
                  Supabase Realtime
                </span>
              </div>
              <div className="px-6 py-3 bg-card rounded-xl border border-border shadow-sm">
                <span className="font-semibold text-card-foreground">
                  WebSocket
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;