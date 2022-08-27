import { useState, useEffect, Fragment } from "react";
import styles from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Grid(props) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(null);
  const [tab, setTab] = useState("Heating");

  useEffect(() => {
    handleResize();
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.grid} id="services">
      {[
        { name: "services" },
        { name: "card" },
        { name: "a" },
        { name: "a" },
        { name: "a" },
        { name: "a" },
      ].map((elm, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            alignItems:
              windowDimensions && windowDimensions.width <= 720
                ? "center"
                : "flex-start",
            justifyContent: "center",
            height:
              (windowDimensions &&
                windowDimensions.width <= 720 &&
                elm.name == "services") ||
              elm.name == "card"
                ? "auto"
                : "30vh",
            background:
              elm.name == "services"
                ? "white"
                : elm.name == "card"
                ? " linear-gradient(180deg, #3CD250 -9%, #1B912B 109%)"
                : "black",
            opacity: elm.name == "card" ? "0.8" : "1",
            borderRadius: "8.14935px",
            padding: "7%",
          }}
        >
          {elm.name == "services" ? (
            <Fragment>
              <p className={styles.headerTitle}>Our Services</p>
              <p className={styles.headerMain}>
                Madina Mechanical is Toronto’s top HVAC (heating, ventilation
                and air conditioning) service.
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
                  Get Started
                </p>
              </button>
            </Fragment>
          ) : elm.name == "card" ? (
            <Fragment>
              <p className={styles.cardheaderTitle}>
                Industrial and residential HVAC solutions in Toronto and beyond
              </p>
              <p className={styles.cardheaderMain}>
                We focus on installing quality HVAC systems and paying close
                attention to detail.Customer experience and satisfaction is at
                the top of ourpriority list, which is why Madina Mechani-cal is
                the best Toronto HVAC service
              </p>
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1vw",
                  cursor: "pointer",
                }}
              >
                <p style={{ color: "white", fontSize: "0.9rem" }}>Get Quote </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "white" }}
                />
              </div>
            </Fragment>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Grid;
