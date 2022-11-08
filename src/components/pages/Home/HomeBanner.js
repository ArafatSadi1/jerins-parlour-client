import React from "react";
import bannerImg from "../../../Image_Icon/Image/banner-img.png";

const HomeBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="hero bg-pink-50 pt-20 pb-12">
        <div className="hero-content grid grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-5xl font-bold w-5/6 leading-[60px]">
              BEAUTY SALOON FOR EVERY WOMEN
            </h1>
            <p className="pt-2 pb-6 w-5/6 text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="py-2 px-4 bg-secondary rounded text-lg text-white hover:bg-[#d400a2] duration-300">
              Get Started
            </button>
          </div>
          <div className="flex justify-end">
            <img
              src={bannerImg}
              className="w-[55%] rounded shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
