import React from "react";
import img1 from "../../assets/service.png";

const OurServices = () => {
  const data = [
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: img1,
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
  ];
  return (
    <div className="bg-secondary rounded-3xl my-6 py-20 sm:px-15 px-10 md:px-20">
      <div className="text-center  md:w-3xl mx-auto">
        <h3 className="text-white text-4xl font-semibold">Our Services</h3>
        <p className="text-white leading-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="pt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-8 cursor-pointer hover:bg-primary text-center  rounded-2xl shadow-xl  bg-white  space-y-3 hover:shadow-2xl transition"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-white border-1 border-gray-300 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-10 h-10" />
            </div>

            <h3 className="text-2xl text-secondary font-bold leading-6">{item.title}</h3>
            <p className="text-gray-500 leading-5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
