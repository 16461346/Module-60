import React from "react";
import { TbTruckDelivery, TbDeviceMobile, TbPackage, TbMapPin } from "react-icons/tb";

const HowItWork = () => {
  const data = [
    {
      icon: <TbTruckDelivery size={50} />,
      title: "Booking Pick & Drop",
      desc: "Easily book pickup and drop-off for your parcels with quick confirmation.",
    },
    {
      icon: <TbDeviceMobile size={50} />,
      title: "Track with Mobile",
      desc: "Track your parcel live from your mobile any time with our real-time system.",
    },
    {
      icon: <TbPackage size={50} />,
      title: "Parcel Packaging",
      desc: "We ensure secure and safe packaging for all types of parcels.",
    },
    {
      icon: <TbMapPin size={50} />,
      title: "Fast Delivery",
      desc: "Get your parcel delivered quickly with our fast and reliable service.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
      {
      data.map((item, i) => (
        <div
          key={i}
          className="p-5 cursor-pointer rounded-2xl shadow-xl bg-white  space-y-3 hover:shadow-2xl transition"
        >
          {item.icon}
          <h2 className="text-xl text-secondary  font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))
      }
    </div>
  );
};

export default HowItWork;
