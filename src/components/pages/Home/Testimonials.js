import React from "react";
import review1 from "../../../Image_Icon/Image/Ellipse 90.png";
import review2 from "../../../Image_Icon/Image/Ellipse 91.png";
import review3 from "../../../Image_Icon/Image/Ellipse 92.png";
import ReactStars from "react-stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      image: review1,
      name: "Nash Patrik",
      position: "CEO, manpol",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
      rating: 4,
    },
    {
      _id: 2,
      image: review2,
      name: "Miriam Barron",
      position: "CEO, manpol",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
      rating: 5,
    },
    {
      _id: 3,
      image: review3,
      name: "Bria Malone",
      position: "CEO, manpol",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum sit at labore ducimus dolores dolorum voluptas? Natus, quas quis.",
      rating: 4,
    },
  ];
  const settings = {
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-20 pb-16 lg:px-8">
      <h2 className="text-3xl text-center font-bold mb-12">Testimonials</h2>
      <div>
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div>
              <div className="relative mt-20 w-full text-black ">
                <div className="bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg">
                  <div className="avatar absolute top-[-45px] left-[45px]">
                    <div className="w-20 border-[3px] border-secondary rounded-full">
                      {review.image ? (
                        <img src={review.image} alt="" />
                      ) : (
                        <img
                          src="https://i.ibb.co/RN0yDmq/avator.png"
                          alt="person"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg text-justify mt-4">
                      {review?.text.slice(0, 150)}...{" "}
                    </p>
                    <div>
                      <div className="flex items-center gap-2 pt-4">
                        <h2 className="text-sm md:text-lg text-justify font-bold">
                          {review.name}
                        </h2>
                        <h3 className="text-xs md:text-md text-secondary">
                          {review.position}
                        </h3>
                      </div>
                      <div>
                        <div>
                          <div>
                            <ReactStars
                              size={20}
                              value={review.rating}
                              edit={false}
                            ></ReactStars>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
