import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);
  const email = user?.email;

  const getPosition = useRef(null);
  const getReview = useRef(null);

  const { data: userInfo, isLoading } = useQuery(["userInfo", email], () =>
    fetch(`https://jerins-parlour.onrender.com/user/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      return res.json();
    })
  );
  const handleReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = user?.displayName;
    const image = userInfo?.imageURL;
    const position = getPosition?.current?.value;
    const review = getReview?.current?.value;
    const rating = starRating;
    const reviewInfo = { name, image, position, review, rating };

    fetch(`https://jerins-parlour.onrender.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Added Successfully");
          event.target.reset();
        }
      });
  };

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center items-center pt-14">
      <form
        onSubmit={handleReview}
        className="mx-2 w-full md:w-[500px] md:mx-0"
      >
        <h1 className="font-bold text-2xl mb-5">Please give your feedback</h1>
        <div className="mt-4">
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            ref={getPosition}
            placeholder="Your profession"
            required
          />
        </div>

        <div className="mt-4">
          <textarea
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            name="message"
            id="message"
            ref={getReview}
            cols={10}
            rows={5}
            placeholder="Write Feedback"
            required
          ></textarea>
        </div>

        <div className="mt-4 flex gap-1">
          {[...Array(5)]?.map((star, i) => {
            const ratingValue: any = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setStarRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className="cursor-pointer duration-300"
                  color={
                    ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"
                  }
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div className="flex justify-between gap-5 mt-4">
          <input
            className="mt-4 bg-secondary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-primary duration-300 cursor-pointer"
            type="submit"
            value="Submit Review"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
