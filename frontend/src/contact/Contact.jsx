import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Navbar></Navbar>
      {/* <div className="max-w-screen-2xl container mx-auto md:px-20 px-4   my-10 flex text-center justify-center items-center">
        <div className="order-2 md:order-1 md:w-1/2 w-full md:mt-32 md-12 ">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold ">
              Hello, Now you can
              <span className=" text-pink-500">Contact With US!!</span>
            </h1>
          </div>
          <form className="text--2xl font-bold mt-3">
            <label>
              Name:
              <input
                className=" border border-black rounded-md"
                type="text"
                name="name"
              />
            </label>
            <br></br>
            <label>
              Email:
              <input
                className=" border border-black rounded-md"
                type="email"
                name="name"
              />
            </label>
            <br></br>
            <label>
              Feed:
              <input
                className=" border border-black rounded-md"
                type="email"
                name="name"
              />
            </label>
            <br></br>
            <label>
              If any:
              <input
                className=" border border-black rounded-md"
                type="email"
                name="name"
              />
            </label>
          </form>
          <button className="bg-blue-500 m-2 p-2 rounded-md text-white mt-2">
            Submit
          </button>
        </div>
      </div> */}
      <div className="flex-row text-center justify-center max-w-screen-2xl container mx-auto md:px-20 px-4 py-5   my-12">
        <div className="space-y-12 ">
          <h1 className="text-4xl font-bold ">
            Hello, Now you can
            <span className=" text-pink-500"> Contact With US!!</span>
          </h1>
        </div>
        <div class="w-full max-w-lg p-8 bg-white shadow-md rounded-2xl mx-auto my-auto">
          {/* <h2 class="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2> */}
          <form>
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="mb-4">
              <label for="subject" class="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
