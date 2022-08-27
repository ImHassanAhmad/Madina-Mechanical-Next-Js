import { useState, useEffect, Fragment } from "react";
import styles from "./Testiminials.module.css";

function Grid(props) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(null);
  const [tab, setTab] = useState("Heating");

  useEffect(() => {
    handleResize();
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.grid} id="testimonials">
      {[
        { name: "description" },
        {
          name: "Dwayne Butler",
          title: "Web Designer at Airtable",
          description:
            "“ I am the owner of a professional renovation company and over the past 5 years we have worked with Rizwan and his team to help us get the special mechanical work done that no one else was able to do.We received professional advice, timely service to work with our schedules and most of all profession-al workmanship. Amazing team here at Madina Mechanical “",
        },
        {
          name: "Mirza Nabeel Khan",
          title: "Customer",
          description:
            "“  My HRV needed to be balanced and Madina Mechanical did a fabulous job. Rizwan was on time, hewas courteous and well mannered. He did the job diligently and charged me a very fair price. He also did extra work by fixing a few small things that weren’t don’t right. All in all, great service, great atti-tude and reasonable. Will definitely call again ”.",
        },
        {
          name: "Syed Aziz",
          title: "Product Manager at Zapier",
          description:
            "Our hot water tank broke and stopped working a day before so we were without hot water. Since the AC/furnace was also due to get replaced and was giving problems, I called a few places and got the quote for all three items such AC, furnace and water tank. Did some research of my own as well about the product I got the quote for and decided to go with Madina Me-chanical Inc. and I am glad to make that decision.Will definitely recommend Madina Mechanical Inc. for anyone who wants quality work and satisfaction.",
        },
      ].map((elm, i) => (
        <div key={i}>
          {elm.name == "description" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  windowDimensions && windowDimensions.width <= 720
                    ? "center"
                    : "flex-start",
                height: "auto",
                gap: "2vh",
                background: "inherit",
                padding: "5%",
              }}
            >
              <p className={styles.headerTitle}>Testimonials</p>
              <p className={styles.headerMain}>Hear what our clients say</p>
              <p className={styles.headerDescription}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
              </p>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                bottom:
                  windowDimensions && windowDimensions.width > 950 && i == 2
                    ? "25%"
                    : "",
                display: "flex",
                flexDirection: "column",
                gap: "3vh",
                // justifyContent: "space-between",
                alignItems:
                  windowDimensions && windowDimensions.width <= 720
                    ? "center"
                    : "flex-start",
                height: "auto",
                background: "white",
                border: "1px solid #EFF0F7",
                boxShadow: "0px 5px 14px rgba(8, 15, 52, 0.04)",
                borderRadius: "8px",
                padding: "3%",
              }}
            >
              <p className={styles.headerCardDescription}>{elm.description}</p>
              <div
                style={{
                  display: "flex",
                  gap: "5%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    height: "45px",
                    width: "45px",
                    background: "grey",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p className={styles.headerName}>{elm.name}</p>
                  <p className={styles.headerCardTitle}>{elm.title}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Grid;
