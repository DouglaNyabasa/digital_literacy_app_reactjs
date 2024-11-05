
import React from "react";
import "./hero.css";
import video5 from "../../../videos/video5.mp4";
import video1 from "../../../videos/video1.mp4";
import video3 from "../../../videos/video3.mp4";
import video6 from "../../../videos/video6.mp4";

const Hero = ({ setShowLogin }) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-start tracking-wide ">
            <h2 className="">Welcome to School of </h2><span className="text-orange-600 font-bold ">Digital Literacy</span>
              .Learn how to Surf the web like a pro!
            </h2>

            <p className="text-1xl">
              "Digital literacy empowers you to communicate and solve problems
              effectively in a digital world. Master these skills to unlock new
              opportunities and succeed in today’s tech-driven landscape!",
            </p>
            <div className="flex mt-10 justify-center justify-between">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 h-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video5} type="video/mp4"></source>
              </video>
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 h-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video6} type="video/mp4"></source>
              </video>
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 h-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video1} type="video/mp4"></source>
              </video>
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 h-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
              >
                <source src={video3} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
