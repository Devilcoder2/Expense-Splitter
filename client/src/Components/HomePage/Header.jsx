import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Middle from "./Middle";
import Info from "./Info";
import Subscription from "./Subscription";
import Footer from "./Footer";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {  threshold: 0.1 } // Adjust this value for sensitivity
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="">
      <header className="bg-pink-600 shadow px-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://play-lh.googleusercontent.com/D2AYbLu9zuOyYDSPiQ0T7ZuSC3kpGXO14KTpwO1HM9tICfQKCv4x-eGLsyDnh1NtaGU"
              alt="Logo"
              className={`h-16 ${isVisible ? "animate__animated animate__backInLeft" : ""}`}
            />
          </div>
          <nav className={`flex space-x-4 text-lg ${isVisible ? "animate__animated animate__backInRight" : ""}`}>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/groups" className="text-white hover:text-gray-300">
              Groups
            </Link>
            <a href="#features" className="text-white hover:text-gray-300">
              Features
            </a>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="text-white hover:text-gray-300">
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
