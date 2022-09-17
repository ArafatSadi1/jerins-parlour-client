import React from "react";
import Service from "./Service";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Services = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:px-12 my-12">
      <h2 className="text-3xl text-center font-bold mb-12">
        Our Awesome <span className="text-secondary">Services</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {services?.slice(0, 3).map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center my-8">
        <button class="btn btn-secondary">Explore More</button>
      </div>
    </div>
  );
};

export default Services;
