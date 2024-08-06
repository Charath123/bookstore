import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" container ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold">Contact US</h1>
        </div>
        <div className="flex-col items-center justify-center text-center ">
          Name
          <br></br>
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-80 px-3 py-1 border rounded-md outline-none mx-2 hover:border-emerald-500"
          />
        </div>
        <div className="flex-col items-center justify-center text-center ">
          Email
          <br></br>
          <input
            type="email"
            placeholder="Enter your Name"
            className="w-80 px-3 py-1 border rounded-md outline-none mx-2 hover:border-emerald-500"
          />
        </div>
        <div className="flex-col items-center justify-center text-center ">
          Message
          <br></br>
          <textarea className="w-80 px-3 py-1 border rounded-md outline-none mx-2 hover:border-emerald-500">
            {" "}
            Hello there, this is some text in a text area
          </textarea>
        </div>
        <div className="flex-col items-center justify-start text-center ">
          <button className="bg-blue-500 m-2 p-2 rounded-lg text-xl text-white">
            Submit
          </button>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Contact;
