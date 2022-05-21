import React from "react";
import bannerImg from "../../../Image_Icon/Image/banner-img.png";

const HomeBanner = () => {
  return (
    <div>
      <div class="hero lg:h-[70vh] bg-pink-50">
        <div class="hero-content flex-col lg:flex-row lg:px-32">
          <div>
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              class="text-5xl font-bold"
            >
              BEAUTY SALOON
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1100"
              class="text-5xl font-bold mt-3"
            >
              FOR EVERY WOMEN
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1200"
              class="py-6"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1300"
              class="btn btn-secondary"
            >
              Get Started
            </button>
          </div>
          <img src={bannerImg} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
