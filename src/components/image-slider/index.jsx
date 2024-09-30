import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./styles.css";

export const ImageSlider = ({ imageUrl, page = 1, limit = 5 }) => {
  const [imageData, setImageData] = useState([]);
  const [currentSlide, setCurentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setIsLoading(false);
        setImageData(data);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    if (imageUrl !== "") {
      fetchData(`${imageUrl}page=${page}&limit=${limit}`);
    }
  }, [imageUrl]);

//   console.log(imageData);

  if (isLoading) {
    return <div>Loading Please Wait!</div>;
  }

  if (errorMsg) {
    return <div>Oops! there was an error {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurentSlide(
      currentSlide === 0 ? imageData.length - 1 : currentSlide - 1
    );
  };

  const handleNext = () => {
    setCurentSlide(
      currentSlide === imageData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="container">
      <BsArrowLeftCircle
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {imageData && imageData.length
        ? imageData.map((image, index) => {
            return (
              <img
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
              />
            );
          })
        : null}
      <BsArrowRightCircle onClick={handleNext} className="arrow arrow-right" />
      <span className="circle-indicators">
        {imageData && imageData.length
          ? imageData.map((_, index) => {
              return (
                <button
                  onClick={() => setCurentSlide(index)}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  key={index}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};
