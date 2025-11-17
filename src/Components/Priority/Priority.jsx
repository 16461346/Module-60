import React from "react";
import image from "../../assets/be-a-merchant-bg.png";
import image2 from "../../assets/location-merchant.png";

const Priority = () => {
  return (
    <div className=" rounded-3xl relative mx-6 md:mx-15 my-10  bg-secondary md:h-100 h-80">
      <img src={image} alt="" />
      <img
        src={image2}
        className="absolute md:w-120 right-10 w-80 bottom-15"
        alt=""
      />
      <div className="md:w-2/4 left-4 right-4 md:left-16 absolute top-8 md:top-20">
        <h2 className="md:text-3xl text-xl  text-white font-bold">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="text-gray-300 md:text-base text-sm pt-2 md:pt-6 md:pr-20">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-col md:flex-row md:gap-4 items-center justify-center pt-2 md:pt-10">
          <button className="btn w-full md:w-1/2 rounded-2xl bg-primary mb-2 md:mb-0">
            Become a Merchant
          </button>
          <button className="btn w-full md:w-1/2 py-2 bg-secondary px-4 border border-primary text-primary font-bold rounded-2xl">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Priority;
