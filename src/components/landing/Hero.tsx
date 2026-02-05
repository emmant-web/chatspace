// import { MacbookScroll } from "../ui/macbook-scroll";
// import PlaceholderLogo from "../../assets/images/icons/placeholder-logo.svg";
import { StaticMacbook } from "../ui/StaticMacbook";
import { Link } from "react-router";
import Logo from "../../assets/images/logo-v1.svg";
import PictureInMacBook from "../../assets/images/picture-inside-macbook.png"

function Hero() {
  return (
    <section
      className="
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center
        px-4
        min-h-[calc(100vh-80px)]
        md:px-8
        lg:px-16
      "
    >
      {/* layout for mobile and tablet */}
      <div className="flex flex-col gap-6 justify-center items-center lg:hidden">
        <div>
          <img className="w-20 h-20" src={Logo} alt="chatspace logo" />
        </div>
        <div className="flex flex-col justify-center items-center text-center w-xs gap-2 md:w-lg">
          <h1 className="text-h2">Chat in Real-Time, Connect Instantly</h1>
          <p className="text-body md:text-body-lg">
            Join rooms, create conversations, stay connected
          </p>
        </div>
        <div className="flex flex-col gap-2 w-xs">
          <Link
            className="text-button btn-rectangle-filled cursor: pointer"
            to="/signup"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="text-button btn-rectangle-outlined cursor: pointer"
          >
            View Features
          </a>
        </div>
      </div>

      {/* Layout for desktop */}
      <div className="hidden lg:block w-full overflow-hidden">
        <div className="flex flex-col items-center gap-6 my-16">
          <h1 className="text-h1 lg:text-5xl xl:text-5xl max-w-2xl font-bold leading-tight">
            Chat in Real-Time, Connect Instantly
          </h1>
          <p className="text-body md:text-lg lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Join rooms, create conversations, stay connected
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              className="text-button btn-rectangle-filled cursor-pointer px-8 py-3 text-base lg:text-lg transition-transform hover:scale-105"
              to="/signup"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="text-button btn-rectangle-outlined cursor-pointer px-8 py-3 text-base lg:text-lg transition-transform hover:scale-105"
            >
              View Features
            </a>
          </div>
        </div>
        <StaticMacbook
          src={PictureInMacBook}
          showGradient={true}
        />
        {/* <MacbookScroll
    src="https://images.unsplash.com/photo-1631888718423-082c9f5b0206?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    showGradient={true}
  /> */}
      </div>
    </section>
  );
}

export default Hero;
