const Hero = () => {
  return (
    <div>
      <div className="mx-auto  max-w-8xl  px-4 ">
        <div
          className="hero mb-24 rounded-3xl"
          style={{
            backgroundImage: "url(/hero-background.jpg)",
          }}
        >
          <div className="hero-overlay rounded-3xl bg-opacity-70 py-72"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold text-white">
                Delicious Creations Await: Welcome to Pinch of Yum!
              </h1>
              <p className="mb-10 text-white">
                Welcome to Pinch of Yum, your go-to destination for culinary
                inspiration and mouthwatering recipes. Join us as we embark on a
                delicious journey together!
              </p>
              <div className="flex items-center justify-center gap-6">
                <button className=" rounded-full bg-sky-800 px-6 py-4 text-xl font-semibold text-white outline outline-4 outline-sky-800 duration-200 hover:bg-sky-900 hover:outline-sky-900">
                  Explore Now
                </button>
                <button className=" rounded-full px-6 py-4 text-xl font-semibold text-white  outline outline-4 duration-200 hover:outline-gray-300">
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
