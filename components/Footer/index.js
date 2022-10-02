import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import Fb from "../../assets/fb.png";
import Wa from "../../assets/wa.png";
import Insta from "../../assets/insta.png";
import Contact from "../../assets/contact.png";
import Msg from "../../assets/msg.png";
import Map from "../../assets/map.png";

function Navbar(props) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "250px",
        height: "100%",
        background: "#383838",
        display: "flex",
        flexDirection:
          props.windowDimensions && props.windowDimensions.width <= 900
            ? "column"
            : "row",
        gap:
          props.windowDimensions && props.windowDimensions.width <= 900
            ? "5vh"
            : "2vw",
        justifyContent: "space-between",
        position: "relative",
        marginTop: "10vh",
        padding: "5vh 3vw",
      }}
    >
      {props.windowDimensions && props.windowDimensions.width > 900 ? null : (
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
          props.windowDimensions && props.windowDimensions.width <= 900
            ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }
            : { maxWidth: "20vw" }
        }
      >
        <Image
          src={Logo}
          height="39px"
          width="81px"
          alt="madina mechanical inc logo"
        />

        <p
          className={styles.headerDescription}
          style={{
            margin: "3vh 0",
            textAlign:
              props.windowDimensions && props.windowDimensions.width <= 900
                ? "center"
                : "",
          }}
        >
          Madina Mechanical is Toronto’s top HVAC (heating, ventilation and air
          conditioning) service to the GTA for over {props.info.experience}{" "}
          years.
        </p>
        <span style={{ display: "flex", gap: "4vw" }}>
          {[
            {
              icon: Fb,
              alt: "madina mechanical inc logo facebook",
              link: "https://www.facebook.com/madina.mechanical/",
            },
            {
              icon: Wa,
              alt: "madina mechanical inc logo Wa",
              link: "https://api.whatsapp.com/send?phone=14168781581",
            },
            {
              icon: Insta,
              alt: "madina mechanical inc logo instagram",
              link: "https://www.instagram.com/madinamechanical/",
            },
          ].map((elm, i) => (
            <a key={i} href={elm.link} target="_blank" rel="noreferrer">
              <Image
                key={i}
                src={elm.icon}
                alt={elm.alt}
                style={{
                  cursor: "pointer",
                  transform:
                    props.windowDimensions &&
                    props.windowDimensions.width >= 580
                      ? "scale(1)"
                      : "scale(0.7)",
                }}
              />
            </a>
          ))}
        </span>
      </div>
      <div className={styles.grid}>
        <div>
          <p className={styles.headerTitle}>Get in Touch</p>
          {[
            {
              name: props.info.adress,
              icon: Map,
              alt: "madina mechanical inc logo adress",
              link: "https://www.google.com/maps/dir//Madina+Mechanical+Inc.+100+McLevin+Ave+%23212+Scarborough,+ON+M1B+5K1+Canada/@43.8014663,-79.2365618,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d4d0c2708a9f2f:0x3fc97325d9ff7cdd!2m2!1d-79.2365618!2d43.8014663",
            },
            {
              name: props.info.email,
              icon: Msg,
              alt: "madina mechanical inc logo email",
              link: `mailto:${props.info.email}`,
            },
            {
              name: props.info.phone,
              icon: Contact,
              alt: "madina mechanical inc logo phone number",
              link: `tel:${props.info.phone}`,
            },
          ].map((elm, i) => (
            <a
              style={{
                display: "flex",
                margin: "3vh 0",
                gap: "1vw",
                alignItems: "center",
              }}
              key={i}
              href={elm.link}
              target="_blank"
              rel="noreferrer"
            >
              <span
                style={{
                  minWidth: "20px",
                  transform:
                    props.windowDimensions &&
                    props.windowDimensions.width >= 580
                      ? "scale(1)"
                      : "scale(0.6)",
                }}
              >
                <Image
                  src={elm.icon}
                  alt={elm.alt}
                  width={
                    elm.alt == "madina mechanical inc logo adress" ? "16px" : ""
                  }
                  height={
                    elm.alt == "madina mechanical inc logo adress" ? "22px" : ""
                  }
                />
              </span>
              <p className={styles.headerDescription}>{elm.name}</p>
            </a>
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
            { name: "Home", id: "#home" },
            { name: "About Us", id: "#aboutUs" },
            { name: "Our Services", id: "#services" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Our Latest Work", id: "#tabs" },
            { name: "Contact us", id: "#contactUs" },
          ].map((elm, i) => (
            <a key={i} href={elm.id}>
              <div style={{ margin: "1vh 0" }} className={styles.hover}>
                <p className={styles.headerDescriptionHover}>{elm.name}</p>
              </div>
            </a>
          ))}
        </div>
        <div>
          <p className={styles.headerTitle}>Timings</p>
          {[
            `Mon: ${props.info.timingMonFri}`,
            `Tue: ${props.info.timingMonFri}`,
            `Wed: ${props.info.timingMonFri}`,
            `Thur: ${props.info.timingMonFri}`,
            `Fri: ${props.info.timingMonFri}`,
            `Sat: ${props.info.timingFriSun}`,
            `Sun: ${props.info.timingFriSun}`,
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
