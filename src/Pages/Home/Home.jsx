import React from "react";
import Banar from "./Banar";
import HowItWork from "../../Components/Header/HowItWork";
import OurServices from "../../Components/OurService/OurServices";
import WorkedPlace from "../../Components/WorkCompany/WorkedPlace";
import Delevary from "../../Components/Delevary/Delevary";
import Priority from "../../Components/Priority/Priority";
import Review from "./Reviews/Review";

const reviewPromise= fetch('/reviews.json')
.then(res=>res.json())

const Home = () => {
  return (
    <div>
      <Banar />
      <div className="py-10">
        <HowItWork/>
      </div>
      <OurServices/>
      <WorkedPlace/>
      <Delevary/>
      <Priority/>
      <Review reviewPromise={reviewPromise}/>
    </div>
  );
};

export default Home;
