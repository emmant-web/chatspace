import { MacbookScroll } from "../ui/macbook-scroll";
import PlaceholderLogo from "../../assets/images/icons/placeholder-logo.svg";


function Hero() {
  return (
    <div>
      {/* layout for mobile and tablet */}
      <div className="flex flex-col gap-6 justify-center items-center lg:hidden"> 
        <div>
            <img className="w-20 h-20" src={PlaceholderLogo} alt="placeholder logo" />
        </div>
        <div className="flex flex-col justify-center items-center text-center w-sm md:w-lg">
            <h1 className="text-h2">Chat in Real-Time, Connect Instantly</h1>
            <p className="text-body md:text-body-lg">Join rooms, create conversations, stay connected</p>
        </div>
        <div className="flex flex-col gap-2 w-xs">
            <button className="text-button btn-rectangle-filled cursor: pointer">Get Started</button>
            <button className="text-button btn-rectangle-outlined cursor: pointer">View Demo</button>
        </div>
      </div>

      {/* layout for desktop */}
      <div className="hidden lg:block">
        <MacbookScroll src="https://images.unsplash.com/photo-1631888718423-082c9f5b0206?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}


export default Hero;
