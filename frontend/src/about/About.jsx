import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-2xl container py-5  my-12 flex-row text-center justify-center ">
        <h1 className=" text-2xl">
          About{" "}
          <span className="font-bold text-2xl text-pink-500">Company</span>
        </h1>
        <p>
          Books is a leading technology company dedicated to revolutionizing the
          way people discover, purchase, and enjoy literature.
        </p>
        <p>
          With a mission to foster a love for reading and to provide a seamless,
          enriching experience for book enthusiasts, Books leverages
          cutting-edge technology to offer an unparalleled digital bookstore
          experience.
        </p>
        <p>
          {" "}
          Founded by a team of passionate bibliophiles and tech experts, Books
          combines the traditional charm of bookstores with modern convenience,
          ensuring that readers can access a diverse collection of books
        </p>
        <p>
          anytime, anywhere. Books is committed to promoting literacy,
          supporting authors, and connecting readers with stories that inspire,
          entertain, and educate.
        </p>
      </div>
      <div className="px-10 mx-12  flex justify-center text-2xl font-bold">
        <div>Books App: The Ultimate Bookstore Experience</div>
      </div>
      <div className="mx-auto flex text-center justify-center">
        The Books app is at the heart of the company's mission, providing users
        with a comprehensive and user-friendly platform to explore the world of
        literature. Here’s what sets the Books app apart
      </div>
      <div className="mx-auto flex text-center justify-center font-bold mb-5">
        Extensive Library
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
