import React from "react";
import img1 from "../../assets/tiny-deliveryman.png";
import img2 from "../../assets/live-tracking.png";
import img3 from "../../assets/safe-delivery.png";

const Delevary = () => {
  const data = [
    {
      image: img2,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: img3,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: img2,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="md:my-8  pb-10 px-6 mx-auto  md:px-15 my-2">
        <div className="border-t-2 border-dashed border-gray-400"></div>
      {data.map((item, i) => (
        <div
          key={i}
          className="md:flex  lg:flex grid  md:hover:scale-102 transition-all transform duration-300 items-center gap-10 my-10 p-6 rounded-2xl bg-gray-200 hover:shadow-xl"
        >
          <img src={item.image} alt="" />

          <div className=" border-b-2 md:border-b-0 md:border-r-2 border-r-0 border-dashed border-gray-400 w-24  md:h-24"></div>
          <div className="">
            <h3 className="text-2xl pb-3 font-bold text-secondary">
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="border-t-2 border-dashed border-gray-400 "></div>
    </div>
  );
};

export default Delevary;
