import { Coffee } from "lucide-react";

function LandingFooter() {
  return (
    <footer className="relative bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black border-t border-gray-200 dark:border-gray-800">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Main content */}
          <div className="flex flex-col items-center space-y-3">
            <a
              href="https://github.com/emmant-web/chatspace"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide">
                chatspace
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
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500">
              <span className="text-sm">made with</span>
              <span className="animate-pulse">☕</span>
              <span className="text-sm">by</span>
              <a
                href="https://github.com/emmant-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                emmant-web
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md">
            <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-500 dark:text-gray-500">
            <span>© {new Date().getFullYear()} ChatSpace</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"></div>
    </footer>
  );
}

export default LandingFooter;

