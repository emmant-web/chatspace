import { Coffee } from "lucide-react";

function LandingFooter() {
  return (
    <footer className="relative bg-linear-to-b from-muted to-background border-t border-border">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-secondary to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Main content */}
          <div className="flex flex-col items-center space-y-3">
            <a
              href="https://github.com/emmant-web"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-muted-foreground hover:text-secondary transition-all duration-300"
            >
              <span className="text-small font-medium tracking-wide">
                emmant-web
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* Coffee attribution */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="text-small">made with</span>
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-500 animate-pulse" />
              <span className="text-small">by</span>
              <a
                href="https://github.com/emmant-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small font-semibold text-foreground hover:text-secondary transition-colors duration-300"
              >
                emmant-web
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md">
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-small text-muted-foreground">
            <span>© {new Date().getFullYear()} ChatSpace</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-secondary/5 blur-3xl pointer-events-none"></div>
    </footer>
  );
}

export default LandingFooter;