import React from "react";

const ContactUs = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-pink-50 p-8">
      <h2 className="text-3xl mx-auto font-bold my-12 lg:w-1/3">
        Let us handle your project,
        <span className="text-secondary">professionally.</span>
      </h2>
      <form
        onSubmit={handleContact}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex gap-2 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="First Name"
            className="input w-full"
          />
          <input type="text" placeholder="Last Name" className="input w-full" />
        </div>
        <div className="flex gap-2 my-3 w-full lg:w-1/2">
          <input type="email" placeholder="Email" className="input w-full" />
          <input
            type="text"
            placeholder="Phone Number"
            className="input w-full"
          />
        </div>
        <textarea
          className="textarea w-full lg:w-1/2"
          placeholder="Your Message"
        ></textarea>
        <input
          className="btn btn-secondary my-3"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default ContactUs;
