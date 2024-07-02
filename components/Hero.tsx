"use client";

import { useState } from "react";

const Hero = () => {
  const [trustedNumber, setTrustedNumber] = useState<number>(0);
  return (
    <div className="">
      <h1 className="text-8xl text-center">Toolfolio</h1>
      <div className="py-8">
        <h2 className="text-4xl text-center">Portfolio for tools</h2>
        <h3 className="text-xl text-center">
          New tools added each month, Stay updated
        </h3>
      </div>
      <div className="relative flex bg-gray-900 h-14 rounded-full p-1">
        <input
          className="bg-transparent px-5 focus:outline-none h-full w-full select-none"
          placeholder="Enter your email *"
          type="text"
          name="notified"
          id="notified"
        />
        <button className="absolute right-1 top-1 bottom-1 bg-blue-600 rounded-full px-4">
          Get Notified
        </button>
      </div>
      <p className=" text-xs text-center mt-3">
        Trusted by {trustedNumber}+ creators
      </p>
    </div>
  );
};

export default Hero;
