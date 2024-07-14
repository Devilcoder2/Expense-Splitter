import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl py-2 font-sans">Splitster</h1>
        <div>
          <a
            href="#about"
            className="mx-2 text-gray-200 hover:text-white font-sans"
          >
            About
          </a>
          <a
            href="#sub"
            className="mx-2 text-gray-200 hover:text-white font-sans"
          >
            Services
          </a>
          <a
            href="#faq"
            className="mx-2 text-gray-200 hover:text-white font-sans"
          >
            FAQs
          </a>
          <a href="#" className="mx-2 text-gray-200 hover:text-white font-sans">
            Contact
          </a>
        </div>
        <h2 className="text-white py-3">Stay in touch</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="www.linkedin.com/in/ayushipanday22">
            <FaLinkedin />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <RiTwitterXFill />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
        <p className="mt-3 text-white font-normal">
          @Splitster All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
