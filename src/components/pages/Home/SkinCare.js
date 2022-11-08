import React from "react";
import skinCare from "../../../Image_Icon/Image/sreencare.png";

const SkinCare = () => {
  return (
    <div className="hero bg-pink-50 mt-20 py-16">
      <div className="hero-content grid grid-cols-2 lg:px-8">
        <div className="flex justify-start">
          <img src={skinCare} className="w-[75%] rounded shadow-2xl" alt="" />
        </div>
        <div className="pr-20">
          <h1 className="text-4xl font-bold leading-[50px]">
            Let us handle your screen
            <span className="text-secondary ml-1">Professionally.</span>
          </h1>
          <p className="py-6 text-slate-600 text-md leading-relaxed">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex justify-between lg:mr-48">
            <div>
              <h4 className="text-2xl text-secondary font-bold">500+</h4>
              <p className="text-md">Happy Customer</p>
            </div>
            <div>
              <h4 className="text-2xl text-secondary font-bold">16+</h4>
              <p className="text-md">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
