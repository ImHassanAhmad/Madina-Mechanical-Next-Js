import { useState } from "react";
import styles from "../About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Accordians(props) {
  const [isShowing, setIsShowing] = useState("Our motto");
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
        // marginTop:
        //   props.windowDimensions && props.windowDimensions.width <= 780
        //     ? "11vh"
        //     : "10vh",
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
              "Our motto is integrity and customer satisfaction. Whether you need HVAC solutions at a large facility or need a minor homerepair, we make sure to provide you with the best HVAC service. We can’t wait to help with your heating, ventilation and air conditioning. ",
          },
          {
            name: "Best quality",
            description:
              "Our motto is integrity and customer satisfaction. Whether you need HVAC solutions at a large facility or need a minor homerepair, we make sure to provide you with the best HVAC service. We can’t wait to help with your heating, ventilation and air conditioning. ",
          },
          {
            name: "Global Clients",
            description:
              "Our motto is integrity and customer satisfaction. Whether you need HVAC solutions at a large facility or need a minor homerepair, we make sure to provide you with the best HVAC service. We can’t wait to help with your heating, ventilation and air conditioning. ",
          },
          {
            name: " Customer satisfaction",
            description:
              "Our motto is integrity and customer satisfaction. Whether you need HVAC solutions at a large facility or need a minor homerepair, we make sure to provide you with the best HVAC service. We can’t wait to help with your heating, ventilation and air conditioning. ",
          },
        ].map((e, i) => {
          return (
            <div className={styles.accordian} key={i}>
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
                  }}
                  style={{
                    color: "#333333",
                    height: "17px",
                    width: "17px",
                    marginRight: "25px",
                    cursor: "pointer",
                    transition: "0.5s",
                    transform: isShowing == e.name ? "rotate(45deg)" : "",
                  }}
                />
              </div>

              {isShowing == e.name ? (
                <p
                  className={styles.accordianDescription}
                  style={{
                    maxHeight: "max-content",
                  }}
                >
                  {e.description}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordians;
