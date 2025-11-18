import React from "react";
import icon from '../../../assets/reviewQuote.png'

const ReviewCard = ({ Review }) => {
  const { userName, delivery_email, ratings, review, user_photoURL, date } = Review;

  return (
    <div className="p-4 md:p-10 bg-white shadow-2xl rounded-2xl w-full md:w-96 flex-shrink-0 break-words">
      {/* Review text with icon */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
        <img src={icon} alt="" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
        <p className="text-sm md:text-base text-gray-700 break-words overflow-hidden">{review}</p>
      </div>

      {/* Divider */}
      <div className="border-b-2 border-dashed my-2 md:my-4"></div>

      {/* User info */}
      <div className="flex items-center gap-3 md:gap-4">
        <img 
          src={user_photoURL} 
          className="rounded-full w-12 h-12 md:w-20 md:h-20 object-cover flex-shrink-0" 
          alt={userName} 
        />
        <div className="truncate">
          <h2 className="text-lg md:text-2xl font-bold text-secondary truncate">{userName}</h2>
          <p className="text-xs md:text-sm text-gray-500 truncate">{delivery_email}</p>
          {date && <p className="text-xs text-gray-400 truncate">{date}</p>}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
