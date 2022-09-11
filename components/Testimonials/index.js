import { useState, useEffect, Fragment } from "react";
import styles from "./Testiminials.module.css";

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
    <div className={styles.grid} id="testimonials">
      {props.reviews.map((elm, i) => (
        <div key={i}>
          {elm.name == "description" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  windowDimensions && windowDimensions.width <= 720
                    ? "center"
                    : "flex-start",
                height: "auto",
                gap: "2vh",
                background: "inherit",
                padding: "5%",
              }}
            >
              <p className={styles.headerTitle}>Testimonials</p>
              <p className={styles.headerMain}>Hear what our clients say</p>
              <p className={styles.headerDescription}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
              </p>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                bottom:
                  windowDimensions && windowDimensions.width > 950 && i == 2
                    ? "25%"
                    : "",
                display: "flex",
                flexDirection: "column",
                gap: "3vh",
                // justifyContent: "space-between",
                alignItems:
                  windowDimensions && windowDimensions.width <= 720
                    ? "center"
                    : "flex-start",
                height: "auto",
                background: "white",
                border: "1px solid #EFF0F7",
                boxShadow: "0px 5px 14px rgba(8, 15, 52, 0.04)",
                borderRadius: "8px",
                padding: "3%",
              }}
            >
              <p
                className={styles.headerCardDescription}
              >{`❝${elm.description}❞`}</p>
              <div
                style={{
                  display: "flex",
                  gap: "5%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    height: "45px",
                    width: "45px",
                    background:
                      "linear-gradient(180deg, #3cd250 -9%, #1b912b 109%)",
                  }}
                >
                  <p
                    style={{
                      color: "#383838",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {elm.name[0]}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p className={styles.headerName}>{elm.name}</p>
                  <p className={styles.headerCardTitle}>{elm.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Grid;
