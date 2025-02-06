import { useState, useEffect } from "react";

const ResizeComponent = () => {
  const [windowWidth, setWindonWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindonWidth(window.innerWidth);
    console.log("Event listener added");

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Evnet remvoed");

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>window width : {windowWidth}px</p>
    </div>
  );
};

export default ResizeComponent;
