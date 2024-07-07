const Hero = () => {
  return (
    <div className="flex h-screen bg-pink-600">
      <div className="w-1/2 flex items-center justify-center p-4">
        <div>
          <h1 className="text-4xl text-white font-bold mb-4">
            Bring everyone together and get organised with{" "}
            <span className="text-black">Splitster</span>
          </h1>
          <p className="text-lg">
            Eliminate the hassle of endless back-and-forth and disputes over who
            owes what. With ALL IN, effortlessly organize your social events and
            holidays, bringing everyone together seamlessly. It’s the only app
            you need to stay organized and stress-free.
          </p>
          <button className="px-8 py-2 rounded-full relative bg-slate-800 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">Get Splitster</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-4">
        <img
          src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2023/02/features.webp?resize=1536%2C1402&ssl=1"
          alt="Description"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
