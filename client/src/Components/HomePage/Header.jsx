import { Link } from "react-router-dom";
import Hero from "./Hero";
import Middle from "./Middle";
import Info from "./Info";
import Subscription from "./Subscription";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://play-lh.googleusercontent.com/D2AYbLu9zuOyYDSPiQ0T7ZuSC3kpGXO14KTpwO1HM9tICfQKCv4x-eGLsyDnh1NtaGU"
              alt="Logo"
              className="h-16"
            />
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/groups" className="text-gray-700 hover:text-blue-500">
              Groups
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-500">
              Features
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Signup
            </Link>
          </nav>
        </div>
      </header>
      <Hero />
      <Middle />
      <Info />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Header;
