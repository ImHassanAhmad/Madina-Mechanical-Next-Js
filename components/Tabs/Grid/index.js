import { useState, useEffect } from "react";
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
    <div
      style={{
        height:
          windowDimensions && windowDimensions.width > 780 ? "50vh" : "35vh",
        minHeight:
          windowDimensions && windowDimensions.width > 780 ? "300px" : "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1vw",
        padding: "0 5vw",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "black",
          width: "40%",
          borderRadius: "8.14935px",
        }}
      />
      <div
        style={{
          height: "100%",
          width: "60%",
          borderRadius: "8.14935px",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
        }}
      >
        <div
          style={{
            height: "50%",
            width: "100%",
            display: "flex",
            gap: "1vw",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "3vw",
              height: "100%",
              background: "linear-gradient(180deg, #3CD250 -9%, #1B912B 109%)",
              opacity: "0.8",
              width: "30vw",
              borderRadius: "8.14935px",
              gap: "1vh",
            }}
          >
            <p style={{ color: "white", fontWeight: "bold" }}>{props.tab}</p>
            <p
              style={{
                color: "white",
                fontSize:
                  windowDimensions && windowDimensions.width > 780
                    ? "13px"
                    : windowDimensions && windowDimensions.width > 450
                    ? "10px"
                    : "7px",
              }}
            >
              {props.tab} service doesn’t need to be stressful! We are Toronto’s
              best HVAC solution.
            </p>
            <a
              href="#contactUs"
              style={{
                position: "absolute",
                bottom: "2vh",
                left: "2vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1vw",
                gap: "1vw",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "white", fontSize: "0.84rem" }}>Get Quote </p>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} />
            </a>
          </div>
          <div
            style={{
              height: "100%",
              background: "green",
              width: "30vw",
              borderRadius: "8.14935px",
            }}
          />
        </div>
        <div
          style={{
            height: "50%",
            background: "pink",
            width: "100%",
            borderRadius: "8.14935px",
          }}
        />
      </div>
    </div>
  );
}

export default Grid;
