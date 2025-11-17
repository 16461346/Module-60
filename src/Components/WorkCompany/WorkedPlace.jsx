import React from "react";
import img1 from "../../assets/brands/amazon.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";

const WorkedPlace = () => {
  const data = [
    { img: img7 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img1 },
    { img: img6 },
  ];
  return (
    <div className="py-15 px-10">
      <h4 className="md:text-3xl text-xl text-secondary font-bold text-center">
        We've helped thousands of sales teams
      </h4>
      <Marquee speed={40} pauseOnHover={true}>
        <div className="flex flex-wrap  gap-10 py-6 items-center justify-center">
          {data.map((item, i) => (
            <img key={i} src={item.img} className="w-30 md:w-auto" alt="" />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default WorkedPlace;
