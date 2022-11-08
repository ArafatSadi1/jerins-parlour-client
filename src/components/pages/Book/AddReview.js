import React from "react";

const AddReview = () => {
  const handleAddReview = (e) => {
    e.preventDefault();
  };
  return (
    <div className="m-8">
      <form
        onSubmit={handleAddReview}
        className="flex flex-col gap-3 lg:w-2/3"
        action=""
      >
        <input type="text" placeholder="Type here" className="input w-full" />
        <input type="text" placeholder="Type here" className="input w-full" />
        <textarea
          type="text"
          placeholder="Type here"
          className="textarea w-full"
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary btn-md w-1/4"
        />
      </form>
    </div>
  );
};

export default AddReview;
