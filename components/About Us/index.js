import { useState, useEffect } from "react";
import Image from "next/image";
import Shape from "../../assets/shape.png";
import Accordians from "./Acoordians";
import styles from "./About.module.css";

function AboutUs(props) {
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
      id="aboutUs"
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
            marginTop: "4vh",
          }}
        >
          <Image src={Shape} alt="green shape" />
        </div>
        <div
          style={{
            position: "absolute",
            left:
              windowDimensions && windowDimensions.width <= 780
                ? "12vw"
                : "3vw",
            top: "5vh",
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
            <img
              src={`http:${props.fields[0].fields.file.url}`}
              className={styles.responsiveImg}
              alt="hvac engineeringh image 1"
            />
            <div
              style={{
                position: "absolute",
                width:
                  windowDimensions && windowDimensions.width <= 780
                    ? "50vw"
                    : "30vw",
                height: "15vh",
                left: "55%",
                bottom:
                  windowDimensions && windowDimensions.width < 520
                    ? "0"
                    : windowDimensions && windowDimensions.width <= 780
                    ? "10vh"
                    : "1vh",
              }}
            >
              <img
                src={`http:${props.fields[1].fields.file.url}`}
                className={styles.responsiveImg}
                alt="hvac engineeringh image 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Accordians windowDimensions={windowDimensions} />
      </div>
    </div>
  );
}

export default AboutUs;
