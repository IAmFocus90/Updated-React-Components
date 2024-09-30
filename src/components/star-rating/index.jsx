import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export const StarRating = ({ numOfStars = 10 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (currentIndex) => {
    // console.log(currentIndex);
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex) => {
    // console.log(currentIndex);
    setHover(currentIndex);
  };

  const handleMouseExit = () => {
    // console.log(currentIndex);
    setHover(rating);
  };

  const handleNoRating = () => {
    setHover(0);
    setRating(0);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleNoRating}>No Rating</button>
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseExit()}
            size={40}
          />
        );
      })}
    </div>
  );
};
