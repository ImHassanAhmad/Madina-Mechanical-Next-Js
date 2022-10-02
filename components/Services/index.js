import { Fragment } from "react";
import styles from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Grid(props) {
  return (
    <div className={styles.grid} id="services">
      {[
        { name: "services" },
        { name: "card" },
        { name: "a", num: 0 },
        { name: "a", num: 1 },
        { name: "a", num: 2 },
        { name: "a", num: 3 },
      ].map((elm, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            alignItems:
              props.windowDimensions && props.windowDimensions.width <= 720
                ? "center"
                : "flex-start",
            justifyContent: "center",
            height:
              props.windowDimensions &&
              props.windowDimensions.width <= 720 &&
              elm.name == "services"
                ? "20vh"
                : props.windowDimensions &&
                  props.windowDimensions.width <= 720 &&
                  elm.name == "card"
                ? "100%"
                : "30vh",
            background:
              elm.name == "services"
                ? "white"
                : elm.name == "card"
                ? " linear-gradient(180deg, #3CD250 -9%, #1B912B 109%)"
                : "grey",
            opacity: elm.name == "card" ? "0.8" : "1",
            borderRadius: "8.14935px",
            backgroundImage:
              elm.name == "a"
                ? `url(https:${props.fields[elm.num].fields.file.url})`
                : "",
            backgroundSize: "cover",
          }}
        >
          {elm.name == "services" ? (
            <Fragment>
              <p className={styles.headerTitle}>Our Services</p>
              <p className={styles.headerMain}>
                Madina Mechanical is Toronto’s top HVAC (heating, ventilation
                and air conditioning) service.
              </p>
              <a href="#contactUs">
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
              </a>
            </Fragment>
          ) : elm.name == "card" ? (
            <div
              style={{
                padding: "4vh 3vw",
                display: "flex",
                flexDirection: "column",
                gap: "2vh",
              }}
            >
              <p className={styles.cardheaderTitle}>
                Industrial and residential HVAC solutions in Toronto and beyond
              </p>
              <p className={styles.cardheaderMain}>
                We focus on installing quality HVAC systems and paying close
                attention to detail.Customer experience and satisfaction is at
                the top of ourpriority list, which is why Madina Mechani-cal is
                the best Toronto HVAC service
              </p>
              <a
                href="#contactUs"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1vw",
                  cursor: "pointer",
                }}
              >
                <p style={{ color: "white", fontSize: "0.8rem" }}>Get Quote </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "white" }}
                />
              </a>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Grid;
