import React from "react";
import skinCare from "../../../Image_Icon/Image/sreencare.png";

const ScreenCare = () => {
  return (
    <div class="hero lg:h-[70vh] bg-pink-50">
      <div class="hero-content grid grid-cols-2 lg:px-8">
        <div className="flex justify-start"><img src={skinCare} class="max-w-sm rounded-lg shadow-2xl" alt="" /></div>
        <div className="pr-20">
          <h1 class="text-4xl font-bold">Let us handle your screen</h1>
          <h1 class="text-4xl font-bold">
            <span className="text-secondary">Professionally.</span>
          </h1>
          <p class="py-6 text-slate-600 text-sm leading-relaxed">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex justify-between lg:mr-48">
            <div>
              <h4 className="text-2xl text-secondary font-bold">500+</h4>
              <p>Happy Customer</p>
            </div>
            <div>
              <h4 className="text-2xl text-secondary font-bold">16+</h4>
              <p>Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCare;
