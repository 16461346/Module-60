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
      <Carousel>
        <div className="relative">
          <img src={banner1} />
          <div className="bottom-20 flex gap-6 absolute left-20">
            <div className="flex items-center">
              {" "}
              <button className="bg-primary   btn font-bold hover:bg-gray-300 hover:text-black rounded-2xl">
                Track your parcel{" "}
              </button>
              <FaArrowCircleUp size={35}className="rotate-45" />
            </div>
            <button className="btn hover:bg-primary bg-gray-300 font-bold rounded-2xl">
              Ba A Rider
            </button>
          </div>
        </div>
        <div>
          <img src={banner2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={banner3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banar;
