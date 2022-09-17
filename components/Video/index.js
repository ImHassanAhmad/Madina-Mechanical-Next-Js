import { useEffect, useRef } from "react";
import styles from "./Video.module.css";

function Video(props) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "0 5vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "2.5vh 5vw",
          height: "100%",
          display: "flex",
          flexDirection:
            props.windowDimensions && props.windowDimensions.width <= 780
              ? "column"
              : "row",
          alignItems: "center",
          gap:
            props.windowDimensions && props.windowDimensions.width <= 780
              ? "10vh"
              : "5vw",
          justifyContent:
            props.windowDimensions && props.windowDimensions.width <= 780
              ? "center"
              : "space-between",
          position: "relative",
        }}
      >
        <p className={styles.headerTitle}>
          Why Madina Mechanical Is The Best Choice?
        </p>
        {props.windowDimensions &&
        props.windowDimensions.width <= 780 ? null : (
          <p style={{ color: "rgba(56, 56, 56, 0.8)" }}>
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        )}
      </div>

      {/* <iframe
        style={{
          height:
            props.windowDimensions && props.windowDimensions.width <= 780 ? "25vh" : "50vh",
          width: "100%",
          borderRadius: "8px",
          border: "none",
        }}
        src={`http:${props.fields.fields.file.url}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Madina Mechanical Video"
      ></iframe> */}

      <video
        style={{
          height:
            props.windowDimensions && props.windowDimensions.width <= 780
              ? "25vh"
              : "50vh",
          width: "100%",
          borderRadius: "8px",
          border: "none",
        }}
        loop
        muted
        ref={videoEl}
      >
        <source src={`http:${props.fields.fields.file.url}`} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
