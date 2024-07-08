const Middle = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src="https://play-lh.googleusercontent.com/D2AYbLu9zuOyYDSPiQ0T7ZuSC3kpGXO14KTpwO1HM9tICfQKCv4x-eGLsyDnh1NtaGU"
        alt="Logo"
        className="h-16 mb-4 mt-28"
      />
      <div className="mb-2">Plan, chat and pay.. Splitster one place</div>
      <div className="mb-4 mx-auto max-w-md">
        Getting together just got easier with ALL IN. Chat with your group, make
        plans and track costs for dinners, nights out, holidays and events so
        everyone can pay what they owe at the end of the day…without the
        arguments.
      </div>
      <button className="px-8 py-2 rounded-full relative bg-slate-950 mb-28 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20">Get Splitster</span>
      </button>
    </div>
  );
};

export default Middle;
