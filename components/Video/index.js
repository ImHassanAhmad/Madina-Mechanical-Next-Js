import { useState, useEffect, Fragment } from "react";
import styles from "./Video.module.css";

function WhyUs(props) {
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
        padding: "0 5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "2.5vh 5vw",
          height: "100%",
          display: "flex",
          flexDirection:
            windowDimensions && windowDimensions.width <= 780
              ? "column"
              : "row",
          alignItems: "center",
          gap:
            windowDimensions && windowDimensions.width <= 780 ? "10vh" : "5vw",
          justifyContent:
            windowDimensions && windowDimensions.width <= 780
              ? "center"
              : "space-between",
          position: "relative",
        }}
      >
        <p className={styles.headerTitle}>
          Why Madina Mechanical Is The Best Choice?
        </p>
        {windowDimensions && windowDimensions.width <= 780 ? null : (
          <p style={{ color: "rgba(56, 56, 56, 0.8)" }}>
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        )}
      </div>
      <div
        style={{
          background: "grey",
          height:
            windowDimensions && windowDimensions.width <= 780 ? "25vh" : "50vh",
          width: "100%",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default WhyUs;
