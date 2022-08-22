import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
    <Fragment>
      {windowDimensions && windowDimensions.width >= 580 ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "80px",
            left: "0px",
            top: "0px",
            background: "rgba(56, 56, 56, 0.6)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0rem 4.5vw",
            zIndex: "1",
          }}
        >
          <Image src={Logo} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "31px",
            }}
          >
            {[
              { name: "Home" },
              { name: "About us" },
              { name: "Services" },
              { name: "Testimonials" },
              { name: "Contact us" },
            ].map((elm) => {
              return (
                <p
                  style={{
                    height: "24px",
                    fontWeight: elm.name == "Home" ? "700" : "",
                    fontSize: "1rem",
                    lineHeight: "150%",
                    textAlign: "right",
                    color: "#FFFFFF",
                  }}
                >
                  {elm.name}
                </p>
              );
            })}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Navbar;
