import { useState, useEffect } from "react";
import Grid from "./Grid";
import styles from "./Tabs.module.css";

const tabs = ["Heating", "Ventilation", "Air Conditioning"];
let tempStatus = "Heating";

let refreshIntervalId;

function Navbar(props) {
  const [tab, setTab] = useState("Heating");

  function IntializeTimer() {
    refreshIntervalId = setInterval(() => {
      let index = tabs.indexOf(tempStatus);
      if (index == tabs.length - 1) {
        setTab(tabs[0]);
        tempStatus = tabs[0];
      } else {
        setTab(tabs[index + 1]);
        tempStatus = tabs[index + 1];
      }
    }, 3000);
  }

  useEffect(() => {
    IntializeTimer();

    return () => {
      clearInterval(refreshIntervalId);
    };
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
        {tabs.map((elm, i) => {
          return (
            <div key={i} style={{ display: "grid", gridGap: "10px" }}>
              <p
                className={tab == elm ? styles.tab : styles.disabledTab}
                style={{ userSelect: "none" }}
                onClick={() => {
                  setTab(elm);
                  tempStatus = elm;
                  clearInterval(refreshIntervalId);
                  IntializeTimer();
                }}
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
      <Grid tab={tab} fields={props.fields} />
    </div>
  );
}

export default Navbar;
