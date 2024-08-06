import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p>
            Our website offers a diverse range of courses designed to cater to
            various interests and career goals. Whether you're looking to
            enhance your skills in technology, business, arts, or personal
            development, we have something for everyone. Our courses are created
            by industry experts and experienced educators, ensuring high-quality
            content and practical insights. With flexible learning options,
            including self-paced and instructor-led formats, you can learn at
            your own convenience. Join our community of learners and take the
            next step in your professional or personal journey today!
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
