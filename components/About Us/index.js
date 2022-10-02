import Image from "next/image";
import Shape from "../../assets/shape.png";
import Accordians from "./Acoordians";
import styles from "./About.module.css";

function AboutUs(props) {
  return (
    <div
      id="aboutUs"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "1vh",
        flexDirection:
          props.windowDimensions && props.windowDimensions.width <= 780
            ? "column"
            : "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "35vw",
            marginTop: "4vh",
          }}
        >
          <Image src={Shape} alt="green shape" />
        </div>
        <div
          style={{
            position: "absolute",
            left:
              props.windowDimensions && props.windowDimensions.width <= 780
                ? "12vw"
                : "3vw",
            top:
              props.windowDimensions && props.windowDimensions.width <= 780
                ? "5vh"
                : "10vh",
          }}
        >
          <div
            style={{
              position: "relative",
              width:
                props.windowDimensions && props.windowDimensions.width <= 780
                  ? "60vw"
                  : "38vw",
            }}
          >
            <img
              src={`https:${props.fields[0].fields.file.url}`}
              className={styles.responsiveImg}
              alt="hvac engineering image 1"
            />
            <div className={styles.image2}>
              <img
                src={`https:${props.fields[1].fields.file.url}`}
                className={styles.responsiveImg}
                alt="hvac engineering image 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Accordians windowDimensions={props.windowDimensions} />
      </div>
    </div>
  );
}

export default AboutUs;
