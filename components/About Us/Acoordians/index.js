import { useState, useEffect } from "react";
import styles from "../About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Accordians(props) {
  const [isShowing, setIsShowing] = useState("Our motto");

  useEffect(() => {
    var panel = document.getElementById("accordian0");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? "70vw"
            : "30vw",
        minWidth:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? ""
            : "330px",
        margin:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? "5vh 3vw 0 3vw"
            : "10vh 5vw 0 0",
      }}
    >
      <p className={styles.aboutTitle}>ABOUT US</p>
      <p className={styles.aboutText}>
        Madina Mechanical makes provided affordable HVAC services
      </p>
      <div>
        {[
          {
            name: "Our motto",
            description:
              "Our motto is integrity and customer satisfaction. Whether you need HVAC solutions at a large facility or need a minor homerepair, we make sure to provide you with the best HVAC service. We can’t wait to help with your heating, ventilation and air conditioning.",
          },
          {
            name: "Best quality",
            description:
              "We take the time to provide you with the best quality HVAC solution in Toronto, to make sure you won’t have to worry about it again. Heating and cooling is a fundamental part of a happy home or businessand Madina Mechanical can’t wait to improve your overall comfort.",
          },
          {
            name: "Global Clients",
            description:
              "We have experience in commercial, industrial and residential HVAC solutions, providing excellent service to clients in Toronto and beyond.",
          },
          {
            name: " Customer satisfaction",
            description:
              "Our HVAC technicians and engineers provide the best service every time. We focus on installing quality HVAC systems and paying close attention to detail. Customer experience and satisfaction is at the top of our priority list, which is why Madina Me-chanical is the best Toronto HVAC service.",
          },
        ].map((e, i) => {
          return (
            <div className={styles.accordian} key={i} id={`accordian${i}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className={styles.accordianTitle}>{e.name}</p>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    if (isShowing != e.name) setIsShowing(e.name);
                    else setIsShowing("");
                    var panel = document.getElementById(`accordian${i}`);
                    if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                    } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                  }}
                  style={{
                    color: "#333333",
                    height:
                      props.windowDimensions &&
                      props.windowDimensions.width >= 580
                        ? "17px"
                        : "13px",
                    width:
                      props.windowDimensions &&
                      props.windowDimensions.width >= 580
                        ? "17px"
                        : "13px",
                    marginRight: "25px",
                    cursor: "pointer",
                    transition: "0.5s",
                    transform: isShowing == e.name ? "rotate(45deg)" : "",
                  }}
                />
              </div>

              <p className={styles.accordianDescription}>{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordians;
