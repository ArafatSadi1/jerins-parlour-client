import React from "react";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Services = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://jerins-parlour.onrender.com/services").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:px-8 pt-20">
      <h2 className="text-4xl text-center font-bold mb-12">
        Our Awesome <span className="text-secondary">Services</span>
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {services?.slice(0, 3).map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center pt-16">
        <button className="py-2 px-4 bg-secondary rounded text-lg text-white hover:bg-[#d400a2] duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
