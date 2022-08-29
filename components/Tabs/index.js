import { useState, useEffect, Fragment } from "react";
import Grid from "./Grid";
import styles from "./Tabs.module.css";

function Navbar(props) {
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
      id="tabs"
      style={{
        width: "100%",
        margin: "2vh 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p className={styles.headerTitle}>Our Latest Work</p>
      <p className={styles.headerDescription}>
        HVAC service doesn’t need to be stressful! We are Toronto’s best HVAC
        solution.. Affordable HVAC in Toronto (GTA) has never been so great!
        When you work with us, we listento your needs. When people think heating
        and cooling, they think Madina Mechanical.
      </p>
      <div
        style={{
          margin: "2vh 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5vw",
        }}
      >
        {["Heating", "Ventilation", "Air Conditioning"].map((elm, i) => {
          return (
            <div key={i} style={{ display: "grid", gridGap: "10px" }}>
              <p
                className={tab == elm ? styles.tab : styles.disabledTab}
                style={{ userSelect: "none" }}
                onClick={() => setTab(elm)}
              >
                {elm}
              </p>
              <div
                style={{
                  width: "100%",
                  height: "0.3vh",
                  background:
                    "linear-gradient(97.54deg, #2EA83F 38.07%, #2EC743 93.63%)",
                  opacity: tab == elm ? "0.8" : "0",
                  borderRadius: "20px",
                  transition: "0.5s",
                }}
              />
            </div>
          );
        })}
      </div>
      <Grid tab={tab} />
    </div>
  );
}

export default Navbar;
