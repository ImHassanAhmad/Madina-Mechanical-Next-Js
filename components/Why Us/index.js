import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Why1 from "../../assets/why1.png";
import Why2 from "../../assets/why2.png";
import Why3 from "../../assets/why3.png";
import Why4 from "../../assets/why4.png";
import Why5 from "../../assets/why5.png";
import Why6 from "../../assets/why6.png";
import styles from "./WhyUs.module.css";

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
        height: "100%",
        margin: "3vh 0",
        padding: "3vh 5vw",
        background: "#f7fdf8",
        display: "flex",
        flexDirection:
          windowDimensions && windowDimensions.width <= 780 ? "column" : "row",
        alignItems: "center",
        gap: windowDimensions && windowDimensions.width <= 780 ? "5vh" : "4vw",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3vh",
          justifyContent: "center",
          alignItems:
            windowDimensions && windowDimensions.width <= 780
              ? "center"
              : "flex-start",
        }}
      >
        <p className={styles.headerTitle}>WHY US</p>
        <p className={styles.headerMain}>Our Capabilities</p>
        <p style={{ fontSize: "1rem", color: "rgba(56, 56, 56, 0.8)" }}>
          Madina Mechanical is Toronto’s top HVAC (heating, ventilation and air
          conditioning) service. Our professional team has provided affordable
          HVAC services to the GTA for over 35 years.{" "}
        </p>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 10px",
            width: "auto",
            height: "4vh",
            gap: "10px",
            background:
              "linear-gradient(97.54deg, #2EA83F 38.07%, #2EC743 93.63%)",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "11px",
              lineHeight: "150%",
              color: "white",
            }}
          >
            Get Quote
          </p>
        </button>
      </div>
      <div style={{ display: "grid", gridGap: "5vh" }}>
        <div style={{ display: "flex", gap: "3vw" }}>
          {[
            { img: Why1, des: "Fast and Easy Booking" },
            { img: Why2, des: "Energy Efficient Units" },
            { img: Why3, des: "Competitive Pricing" },
          ].map((elm, i) => (
            <div key={i}>
              <Image src={elm.img} alt={elm.des} />
              <p className={styles.headerDescription}>{elm.des}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "3vw" }}>
          {[
            { img: Why4, des: "All Major Brands in Stock" },
            { img: Why5, des: "Installation Available" },
            { img: Why6, des: "30 Day Satisfaction Guarantee" },
          ].map((elm, i) => (
            <div key={i}>
              <Image src={elm.img} alt={elm.des} />
              <p className={styles.headerDescription}>{elm.des}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "1vw",
          bottom: "5%",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((elm, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1vw",
                marginBottom: "1vw",
              }}
            >
              {[1, 2, 3].map((elm, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      maxHeight: "6px",
                      maxWidth: "6px",
                      width: "0.6vw",
                      height: "0.6vw",
                      backgroundColor: "#5abf68",
                      borderRadius: "50%",
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyUs;
