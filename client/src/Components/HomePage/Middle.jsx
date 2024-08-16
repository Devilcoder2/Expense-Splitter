import { useEffect, useState, useRef } from "react";

const Middle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const middleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 } // Adjust this value for sensitivity
    );

    if (middleRef.current) {
      observer.observe(middleRef.current);
    }

    return () => {
      if (middleRef.current) {
        observer.unobserve(middleRef.current);
      }
    };
  }, []);

  return (
    <div ref={middleRef} className="flex flex-col items-center justify-center text-center">
      <img
        src="https://play-lh.googleusercontent.com/D2AYbLu9zuOyYDSPiQ0T7ZuSC3kpGXO14KTpwO1HM9tICfQKCv4x-eGLsyDnh1NtaGU"
        alt="Logo"
        className={`h-24 mb-4 mt-28 ${isVisible ? "animate__animated animate__slideInDown" : ""}`}
      />
      <div
        className={`mb-2 font-semibold text-xl mt-8 ${
          isVisible ? "animate__animated animate__slideInRight" : ""
        }`}
      >
        Plan, chat and pay.. Splitster one place
      </div>
      <div
        className={`mb-4 mx-auto max-w-md mt-8 text-lg ${
          isVisible ? "animate__animated animate__slideInLeft" : ""
        }`}
      >
        Getting together just got easier with ALL IN. Chat with your group, make
        plans and track costs for dinners, nights out, holidays and events so
        everyone can pay what they owe at the end of the day…without the
        arguments.
      </div>
      <button
        className={`px-8 py-2 mt-6 rounded-lg relative bg-slate-950 mb-40 text-white  text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 ${
          isVisible ? "animate__animated animate__slideInUp" : ""
        }`}
      >
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20">Get Splitster</span>
      </button>
    </div>
  );
};

export default Middle;
