import { useEffect, useState } from "react";
import "./scroll.css"

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progressLevel, setProgressLevel] = useState(0)

  const fetchData = async (currentUrl) => {
    try {
      setLoading(true);
      const res = await fetch(currentUrl);
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setLoading(false);
        setData(data.products);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  const handleScrollLevel = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const scrollprogress  = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setProgressLevel((scrollprogress / height) * 100 )

  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollLevel);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // console.log(progressLevel)

  return (
    <div className="progress-main-container">
      <div className="progress-header">
      <h1>Scroll Indicator</h1>
        <div className="progress-bar-container">
          <div style={{width: `${progressLevel}%`}} className="progress-bar"></div>
        </div>
      </div>
      <div className="progress-item-container"></div>
      {data && data.length ? data.map((item) => <p key={item.id}>{item.title}</p>) : null}
    </div>
  );
};
