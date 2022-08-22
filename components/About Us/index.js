import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Shape from "../../assets/shape.png";
import About1 from "../../assets/About_1.png";
import About2 from "../../assets/About_2.png";
import Accordians from "./Acoordians";

function AboutUs() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    handleResize();
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "1vh",
        flexDirection:
          windowDimensions && windowDimensions.width <= 780 ? "column" : "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "35vw",
            marginTop: "10vh",
          }}
        >
          <Image src={Shape} />
        </div>
        <div
          style={{
            position: "absolute",
            // minHeight: "420px",
            left:
              windowDimensions && windowDimensions.width <= 780
                ? "12vw"
                : "3vw",
            top: "14vh",
          }}
        >
          <div
            style={{
              position: "relative",
              width:
                windowDimensions && windowDimensions.width <= 780
                  ? "60vw"
                  : "38vw",
            }}
          >
            <Image src={About1} />
            <div
              style={{
                position: "absolute",
                width:
                  windowDimensions && windowDimensions.width <= 780
                    ? "50vw"
                    : "30vw",
                height: "15vh",
                left: "55%",
                bottom: "0",
              }}
            >
              <Image src={About2} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5vh",
        }}
      >
        <Accordians windowDimensions={windowDimensions} />
      </div>
    </div>
  );
}

export default AboutUs;
