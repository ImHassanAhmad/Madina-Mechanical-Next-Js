import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Scroll from "../../assets/scroll.png";
import styles from "./Header.module.css";

function Navbar(props) {
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
      id="home"
      style={{
        width: "100%",
        padding: "3vh 0",
        height: "100%",
        height:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? "100%"
            : "40vh",
        background: "#4F4F4F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <p className={styles.headerTitle}>Heating Ventilation Air Conditioning</p>
      <p className={styles.headerDescription}>
        We provide Durable, Qualitative & Long Lasting Solution With Twenty
        years of Customer Trust Call us at 416 -424 - Heat (4328)
      </p>
      <div
        style={{
          position: "absolute",
          right: "1vw",
          top: "55%",
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
              {[1, 2, 3, 4].map((elm, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      maxHeight: "6px",
                      maxWidth: "6px",
                      width: "0.6vw",
                      height: "0.6vw",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          left: "1vw",
          bottom: "-3.1vw",
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
              {[1, 2, 3, 4].map((elm, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      maxHeight: "6px",
                      maxWidth: "6px",
                      width: "0.6vw",
                      height: "0.6vw",
                      backgroundColor: elm > 4 ? "#4F4F4F" : "white",
                      borderRadius: "50%",
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {windowDimensions && windowDimensions.width >= 580 ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "22px",
          }}
        >
          <Image src={Scroll} height="30px" width="20px" alt="mouse scroll" />
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
