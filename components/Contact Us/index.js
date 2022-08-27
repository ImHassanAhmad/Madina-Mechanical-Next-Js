import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Why1 from "../../assets/why1.png";
import Why2 from "../../assets/why2.png";
import Why3 from "../../assets/why3.png";
import Why4 from "../../assets/why4.png";
import Why5 from "../../assets/why5.png";
import styles from "./ContactUs.module.css";

function ContactUs() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(null);

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
      id="contactUs"
      style={{
        width: "100%",
        minHeight: "250px",
        height: "100%",
        padding: "1vh 8vw",
        display: "flex",
        flexDirection:
          windowDimensions && windowDimensions.width <= 900
            ? "column-reverse"
            : "row",
        alignItems: "center",
        gap: windowDimensions && windowDimensions.width <= 900 ? "6vh" : "5vw",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {windowDimensions && windowDimensions.width <= 900 ? null : (
        <div
          style={{
            position: "absolute",
            bottom: "-3vh",
            right: "1vw",
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
                        backgroundColor: "#61ce70",
                        borderRadius: "50%",
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      <form
        style={{
          width:
            windowDimensions && windowDimensions.width <= 900 ? "100%" : "40vw",
        }}
      >
        <p className={styles.headerTitle}>Contact Us</p>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "20px",
          }}
        >
          <span
            style={{
              width: "100%",
            }}
          >
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter your first name"
            />
          </span>
          <span
            style={{
              width: "100%",
            }}
          >
            <label className={styles.label}>Last Name</label>
            <input
              className={styles.input}
              type="text"
              id="lname"
              name="lasttname"
              placeholder="Enter your last name"
            />
          </span>
        </div>
        <span>
          <label className={styles.label}>Your Email</label>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </span>
        <span>
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.input}
            style={{ resize: "none", height: "10vh" }}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your message"
          />
        </span>
        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            gap: "10px",
            width: "100px",
            height: "35px",
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
            Send Message
          </p>
        </button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11518.486030851504!2d-79.2365618!3d43.8014663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fc97325d9ff7cdd!2sMadina%20Mechanical%20Inc.!5e0!3m2!1sen!2s!4v1661164000540!5m2!1sen!2s"
        style={{
          border: 0,
          width:
            windowDimensions && windowDimensions.width <= 900 ? "100%" : "40vw",
          height: "40vh",
          borderRadius: "8px",
          alignSelf: "center",
        }}
        allowFullScreen="allowfullscreen"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactUs;
