import React from "react";

const Accroding = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-500 leading-5 pt-2 w-[50%] mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-10 flex flex-col gap-2">
        <div className="collapse hover:bg-cyan-100   collapse-arrow bg-gray-200 border border-base-300">
          <input type="checkbox" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-secondary text-xl font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content  text-gray-500">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>
        <div className="collapse hover:bg-cyan-100  collapse-arrow bg-gray-200 border border-base-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl  text-secondary font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content  text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, id ex? Enim optio, autem vitae iure error porro assumenda! Illo laudantium ullam ipsa quos odio laborum eaque adipisci id nesciunt obcaecati aperiam perferendis quidem maxime, nemo et praesentium? Doloremque ut ipsum veritatis officia laudantium minus enim velit, iure nam maiores.
          </div>
        </div>
        <div className="collapse collapse-arrow hover:bg-cyan-100 bg-gray-200 border border-base-300">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl text-secondary font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content  text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus aliquid et qui recusandae eius voluptatum totam, hic quo unde! Cum, sed laborum. Maiores, odit! Aliquam in nemo cupiditate! Dolores.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accroding;
