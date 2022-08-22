import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Scroll from "../../assets/scroll.png";
import styles from "./Milestone.module.css";

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
      style={{
        margin: "10vh 0",
        width: "100%",
        minHeight: "250px",
        height:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? "20vh"
            : "50vh",
        background:
          " linear-gradient(97.54deg, #2EA83F 38.07%, #2EC743 93.63%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "0 5%",
          width: "100%",
          justifyContent: "space-between",
          gap: "10%",
        }}
      >
        <div>
          <p className={styles.headerTitle}>MILESTONE</p>
          <p className={styles.headerDescription}>
            How about some fact number about us
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10%",
            }}
          >
            {[
              { name: "Years Experience", num: "12" },
              { name: "Work Completed", num: "375K" },
              { name: "Client Satisfied", num: "19K" },
            ].map((elm) => (
              <div>
                <p className={styles.number}>{elm.num}</p>
                <p className={styles.name}>{elm.name}</p>
              </div>
            ))}
          </div>
          <p className={styles.text}>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative.
          </p>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
              width: "100px",
              height: "35px",
              background: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <p className={styles.button}>Get Started</p>
          </button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "1vw",
          top: "-3.1vw",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((elm) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1vw",
                marginBottom: "1vw",
              }}
            >
              {[1, 2, 3, 4].map(() => {
                return (
                  <div
                    style={{
                      maxHeight: "6px",
                      maxWidth: "6px",
                      width: "0.6vw",
                      height: "0.6vw",
                      backgroundColor: "#61CE70",
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

export default Navbar;
