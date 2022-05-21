import React from "react";
import star from "../../../Image_Icon/Icon/star.png";

const Review = ({ review }) => {
  const { image, name, text, position } = review;
  return (
    <div class="w-96 bg-base-100 mx-auto">
      <div class="flex items-center">
        <img width={64} src={image} alt="Shoes" class="rounded-xl" />
        <div className="ml-4">
          <h2 class="text-xl font-bold">{name}</h2>
          <p className="font-semibold">{position}</p>
        </div>
      </div>
      <div class="mt-4">
        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
        <div class="flex mt-6">
          <img width={20} src={star} alt="" />
          <img width={20} src={star} alt="" />
          <img width={20} src={star} alt="" />
          <img width={20} src={star} alt="" />
          <img width={20} src={star} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
