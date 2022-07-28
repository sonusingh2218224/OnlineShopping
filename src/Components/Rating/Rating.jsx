import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ value, color }) {
  const [stars, setStars] = useState(value);
  console.log(stars);

  const ChangeStartHandler = (index) => {
    setStars(index + 1);
    console.log(index);
  };

  const renderStars = (value) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < value ? (
          <AiFillStar key={i} onClick={() => ChangeStartHandler(i)} />
        ) : (
          <AiOutlineStar key={i} onClick={() => ChangeStartHandler(i)} />
        )
      );
    }
    return stars;
  };
  return (
    <div className="display-1" style={{ color }}>
      {renderStars(stars)}
    </div>
  );
}

export default Rating;

Rating.defaultProps = {
  value: 0,
  color: "#FDCC0D",
};
