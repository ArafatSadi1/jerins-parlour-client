import React from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
    toast.success("Message send");
    e.target.reset();
  };
  return (
    <div className="py-16 bg-pink-50">
      <h2 className="text-4xl text-center mx-auto font-bold mb-12 lg:w-2/5 leading-[50px]">
        Let us handle your project,
        <span className="ml-1 text-secondary">professionally.</span>
      </h2>
      <form
        onSubmit={handleContact}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex gap-2 w-full lg:w-1/2 focus:outline-none">
          <input
            type="text"
            placeholder="First Name"
            className="input w-full focus:outline-none rounded"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input w-full focus:outline-none rounded"
            required
          />
        </div>
        <div className="flex gap-2 my-3 w-full lg:w-1/2">
          <input
            type="email"
            placeholder="Email"
            className="input w-full focus:outline-none rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input w-full focus:outline-none rounded"
          />
        </div>
        <textarea
          className="textarea w-full lg:w-1/2 focus:outline-none rounded"
          placeholder="Your Message"
          required
        ></textarea>
        <input
          className="mt-6 py-2 px-4 bg-secondary rounded text-lg text-white hover:bg-[#d400a2] duration-300"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactUs;
