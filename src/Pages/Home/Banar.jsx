import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { FaArrowCircleUp } from "react-icons/fa";

const Banar = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative">
          <img src={banner1} />
          <div className="bottom-20 flex gap-6 absolute left-20">
            <div className="flex items-center">
              {" "}
               <button className="bg-primary   btn font-bold hover:bg-secondary  hover:text-white rounded-2xl">
                Track your parcel{" "}
              </button>
              <FaArrowCircleUp size={35} className="rotate-45" />
            </div>
              <button className="btn hover:bg-secondary hover:text-white bg-gray-300 font-bold rounded-2xl">
              Ba A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} />
          <div className="bottom-20 flex gap-6 absolute left-20">
            <div className="flex items-center">
              {" "}
              <button className="bg-primary   btn font-bold hover:bg-secondary  hover:text-white rounded-2xl">
                Track your parcel{" "}
              </button>
              <FaArrowCircleUp size={35} className="rotate-45" />
            </div>
            <button className="btn hover:bg-secondary hover:text-white bg-gray-300 font-bold rounded-2xl">
              Ba A Rider
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner3} />
          <div className="bottom-20 flex gap-6 absolute left-20">
            <div className="flex items-center">
              {" "}
               <button className="bg-primary   btn font-bold hover:bg-secondary  hover:text-white rounded-2xl">
                Track your parcel{" "}
              </button>
              <FaArrowCircleUp size={35} className="rotate-45" />
            </div>
              <button className="btn hover:bg-secondary hover:text-white bg-gray-300 font-bold rounded-2xl">
              Ba A Rider
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banar;
