import { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import { createClient } from "contentful-management";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  function showNoti() {
    setIsActive(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setLoading(false);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }

  function sendMessage(e) {
    if (!loading) {
      e.preventDefault();
      setLoading(true);
      const client = createClient({
        accessToken: "CFPAT-fZlTwU6-C7USJjKu4obEQDohomO3txIGNjDAOnBLT38",
      });

      client
        .getSpace("ekq2l24qwz6g")
        .then((space) => space.getEnvironment("master"))
        .then((environment) =>
          environment.createEntry("messages", {
            fields: {
              firstName: { "en-US": firstName },
              lastName: { "en-US": lastName },
              email: { "en-US": email },
              message: { "en-US": message },
            },
          })
        )
        .then(() => showNoti())
        .catch(console.error);
    }
  }

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
      <div
        className={
          isActive ? [styles.snackbar, styles.show].join(" ") : styles.snackbar
        }
      >
        Message Sent
      </div>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </span>
        <button
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            padding: "5px 10px",
            width: "auto",
            height: "4vh",
            background:
              "linear-gradient(97.54deg, #2EA83F 38.07%, #2EC743 93.63%)",
            borderRadius: "6px",
            border: "none",
            cursor: loading ? "" : "pointer",
          }}
          onClick={sendMessage}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "11px",
              lineHeight: "150%",
              color: "white",
            }}
          >
            {loading ? "Sending Message..." : "Send Message"}
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
