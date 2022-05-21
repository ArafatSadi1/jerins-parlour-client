import React from "react";
import sreenCare from "../../../Image_Icon/Image/sreencare.png"

const ScreenCare = () => {
  return (
    <div class="hero lg:h-[70vh] bg-pink-50">
      <div class="hero-content flex-col lg:flex-row gap-20 lg:px-32">
        <img
          src={sreenCare}
          class="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div className="pr-20">
          <h1 
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          class="text-4xl font-bold">Let us handle your screen</h1>
          <h1 
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1100"
          class="text-4xl font-bold"><span className="text-secondary">Professionally.</span></h1>
          <p 
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1200"
          class="py-6 text-slate-600 text-sm leading-relaxed">
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex justify-between lg:mr-48">
              <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1400"
              >
                  <h4 className="text-2xl text-secondary font-bold">500+</h4>
                  <p>Happy Customer</p>
              </div>
              <div
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1500"
              >
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
