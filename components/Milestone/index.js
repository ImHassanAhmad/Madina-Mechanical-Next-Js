import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Scroll from "../../assets/scroll.png";
import styles from "./Milestone.module.css";

function Milestone(props) {
  return (
    <div
      style={{
        margin: "8vh 0 5vh 0",
        width: "100%",
        height: "100%",
        padding: "3vh 4vw",
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
              { name: "Years Experience", num: props.info.experience },
              { name: "Work Completed", num: props.info.work },
              { name: "Client Satisfied", num: props.info.clients },
            ].map((elm, i) => (
              <div key={i}>
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
                maxWidth: "100px",
                background: "white",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p className={styles.button}>Get Started</p>
            </button>
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "1vw",
          top: "-4.2vw",
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

export default Milestone;
