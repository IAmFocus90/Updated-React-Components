import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const colorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHexColor = () => {
    const hexArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[colorUtility(hexArray.length)];
    }
    // console.log(hexColor)
    setColor(hexColor);
  };

  const handleRandomRgbColor = () => {
    let r = colorUtility(256);
    let g = colorUtility(256);
    let b = colorUtility(256);
    let rgb = `rgb(${r},${g},${b})`;
    //console.log(rgb);
    setColor(rgb);
  };
  
   useEffect(()=> {
    typeOfColor === "hex" ? handleRandomHexColor() : handleRandomRgbColor()
  }, [typeOfColor])

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
      <button onClick={() => setTypeOfColor("rgb")}>RGB Random Color</button>
      <button onClick={() => setTypeOfColor("hex")}>Hex Random Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Get Random Color
      </button>
      <div
        style={{
          display: "flex",
          gap: "50px",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
          margin: "2rem",
        }}
      >
        <h2>{typeOfColor === "hex" ? "HEX - Color" : "RGB - Color"}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
