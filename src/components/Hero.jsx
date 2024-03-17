const Hero = () => {
  return (
    <div>
      <div className="mx-auto  max-w-8xl px-2 lg:px-4 ">
        <div
          className="hero mb-24 rounded-3xl"
          style={{
            backgroundImage: "url(/hero-background.jpg)",
          }}
        >
          <div className="hero-overlay rounded-3xl bg-opacity-70 py-96 md:py-72"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Delicious Creations Await: Welcome to Pinch of Yum!
              </h1>
              <p className="mb-10 text-white">
                Welcome to Pinch of Yum, your go-to destination for culinary
                inspiration and mouthwatering recipes. Join us as we embark on a
                delicious journey together!
              </p>
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row ">
                <button className="w-48 rounded-2xl bg-sky-800 px-6 py-4 text-lg font-semibold text-white outline outline-4 outline-sky-800 duration-200 hover:bg-sky-900 hover:outline-sky-900 md:w-auto md:text-xl lg:rounded-full">
                  Explore Now
                </button>
                <button className="w-48 rounded-2xl px-6 py-4 text-lg font-semibold text-white outline outline-4 duration-200  hover:outline-gray-300 md:w-auto md:text-xl lg:rounded-full">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
