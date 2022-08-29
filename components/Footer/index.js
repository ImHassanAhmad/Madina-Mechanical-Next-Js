import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import Fb from "../../assets/fb.png";
import Twitter from "../../assets/twitter.png";
import Insta from "../../assets/insta.png";
import Contact from "../../assets/contact.png";
import Msg from "../../assets/msg.png";

function Navbar(props) {
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
      style={{
        width: "100%",
        minHeight: "250px",
        height: "100%",
        background: "#383838",
        display: "flex",
        flexDirection:
          windowDimensions && windowDimensions.width <= 900 ? "column" : "row",
        gap: windowDimensions && windowDimensions.width <= 900 ? "5vh" : "2vw",
        justifyContent: "space-between",
        position: "relative",
        marginTop: "10vh",
        padding: "5vh 3vw",
      }}
    >
      {windowDimensions && windowDimensions.width > 900 ? null : (
        <div
          style={{
            position: "absolute",
            right: "1vw",
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
      <div
        style={
          windowDimensions && windowDimensions.width <= 900
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
      >
        <Image
          src={Logo}
          height="39px"
          width="81px"
          alt="madina mechanical inc logo"
        />

        <p className={styles.headerDescription} style={{ margin: "3vh 0" }}>
          Madina Mechanical is Toronto’s top HVAC (heating, ventilation and air
          conditioning) service to the GTA for over 35 years.
        </p>
        <span style={{ display: "flex", gap: "4vw" }}>
          {[
            { icon: Fb, alt: "madina mechanical inc logo facebook" },
            { icon: Twitter, alt: "madina mechanical inc logo twitter" },
            { icon: Insta, alt: "madina mechanical inc logo instagram" },
          ].map((elm) => (
            <Image
              src={elm.icon}
              alt={elm.alt}
              style={{
                transform:
                  windowDimensions && windowDimensions.width >= 580
                    ? "scale(1)"
                    : "scale(0.6)",
              }}
            />
          ))}
        </span>
      </div>
      <div className={styles.grid}>
        <div>
          <p className={styles.headerTitle}>Get in Touch</p>
          {[
            {
              name: `100 McLevin Ave #212,
            Scarborough, ON M1B 5K1`,
              icon: Msg,
              alt: "madina mechanical inc logo adress",
            },
            {
              name: "info@madinamechanical.com",
              icon: Msg,
              alt: "madina mechanical inc logo email",
            },
            {
              name: "(416) 424-4328",
              icon: Contact,
              alt: "madina mechanical inc logo phone number",
            },
          ].map((elm, i) => (
            <div
              style={{
                display: "flex",
                margin: "3vh 0",
                gap: "1vw",
                alignItems: "center",
              }}
              key={i}
            >
              <span
                style={{
                  minWidth: "20px",
                  transform:
                    windowDimensions && windowDimensions.width >= 580
                      ? "scale(1)"
                      : "scale(0.6)",
                }}
              >
                <Image src={elm.icon} alt={elm.alt} />
              </span>
              <p className={styles.headerDescription}>{elm.name}</p>
            </div>
          ))}
        </div>
        <div>
          <p className={styles.headerTitle}>Service</p>
          {[
            "Air Conditioning",
            "Furnace",
            "Boiler",
            "Gas Pipping",
            "Duck Work",
            "Tankless Waterheater",
            "High Velocity System",
            "Indoor Air Quality Product",
            "Wifi Thermostats",
          ].map((elm, i) => (
            <div style={{ margin: "1vh 0" }} key={i}>
              <p className={styles.headerDescription}>{elm}</p>
            </div>
          ))}
        </div>
        <div>
          <p className={styles.headerTitle}>Company</p>
          {[
            "Home",
            "About Us",
            "Our Services",
            "Testimonials",
            "Our Latest Work",
            "Contact us",
          ].map((elm, i) => (
            <div style={{ margin: "1vh 0" }} key={i}>
              <p className={styles.headerDescription}>{elm}</p>
            </div>
          ))}
        </div>
        <div>
          <p className={styles.headerTitle}>Timings</p>
          {[
            "Mon: 8:30a.m – 9.30p.m",
            "Tue: 8:30a.m – 9.30p.m",
            "Wed: 8:30a.m – 9.30p.m",
            "Thur: 8:30a.m – 9.30p.m",
            "Fri: 8:30a.m – 9.30p.m",
            "Sat: 8:30a.m – 10.30p.m",
            "Sun: 8:30a.m – 10.30p.m",
          ].map((elm, i) => (
            <div style={{ margin: "1vh 0" }} key={i}>
              <p className={styles.headerDescription}>{elm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
