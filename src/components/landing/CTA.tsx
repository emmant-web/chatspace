

function CTA() {
    return (
    <section className="w-full bg-gradient-to-br from-primary via-secondary to-accent py-16 px-4 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-h2 lg:text-6xl text-white mb-6 animate-fade-in">
          Ready to start chatting?
        </h2>
        
        {/* Supporting Text */}
        <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of users already connecting and sharing moments together.
        </p>
        
        {/* CTA Button */}
        <button className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 animate-bounce-in">
          Sign Up Now
        </button>
        
        {/* Trust Indicator */}
        <p className="text-small text-white/80 mt-6">
          No credit card required • Free forever • Connect instantly
        </p>
      </div>
    </section>
  );
}

export default CTA;