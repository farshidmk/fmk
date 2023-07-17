// import React from 'react'

// type Props = {}

const Hero = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative">
          {/* <!-- Background Image --> */}
          <img
            className="w-full h-auto"
            src="/assets/images/logo.png"
            alt="Hero Image"
          />
          {/* <!-- Text Overlay --> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
              I am a full stack developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
