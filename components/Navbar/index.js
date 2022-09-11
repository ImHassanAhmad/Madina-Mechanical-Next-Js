import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const [visible, setVisible] = useState("home");
  const [menu, setMenu] = useState(false);

  function chkVisible() {
    [
      "home",
      "aboutUs",
      "services",
      "testimonials",
      "Contact us",
      "contactUs",
    ].forEach((id) => {
      if (document.getElementById(id)) {
        const rect = document.getElementById(id).getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        )
          setVisible(id);
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", chkVisible);
    return () => {
      window.removeEventListener("scroll", chkVisible);
    };
  }, []);

  return (
    <Fragment>
      <div
        style={{
          position:
            props.windowDimensions && props.windowDimensions.width >= 580
              ? "fixed"
              : "absolute",
          width: "100%",
          height:
            props.windowDimensions && props.windowDimensions.width >= 580
              ? "80px"
              : "55px",
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
        <Image
          alt="madina mechanical inc logo"
          src={Logo}
          height={
            props.windowDimensions && props.windowDimensions.width >= 580
              ? "58px"
              : "39px"
          }
          width={
            props.windowDimensions && props.windowDimensions.width >= 580
              ? "120px"
              : "81px"
          }
        />
        {props.windowDimensions && props.windowDimensions.width >= 580 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "31px",
            }}
          >
            {[
              { name: "Home", id: "home" },
              { name: "About us", id: "aboutUs" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact us", id: "contactUs" },
            ].map((elm, i) => {
              return (
                <a
                  key={i}
                  href={`#${elm.id}`}
                  style={{
                    height: "24px",
                    fontWeight: visible == elm.id ? "700" : "",
                    fontSize: "1rem",
                    lineHeight: "150%",
                    textAlign: "right",
                    color: visible == elm.id ? "#2ec743" : "#FFFFFF",
                  }}
                >
                  {elm.name}
                </a>
              );
            })}
          </div>
        ) : (
          <FontAwesomeIcon
            icon={menu ? faXmark : faBars}
            onClick={() => {
              setMenu(!menu);
            }}
            style={{
              color: "white",
              height: "17px",
              width: "17px",
              marginRight: "2vw",
              cursor: "pointer",
            }}
          />
        )}
      </div>
      {props.windowDimensions && props.windowDimensions.width < 580 ? (
        <div
          className={styles.menu}
          style={{
            position: "absolute",
            right: "0",
            top: "55px",
            zIndex: "2",
            borderRadius: "0 0 0 10px",
            background: "#424242",
            height: menu ? "24.5vh" : "0",
            width: "30vw",
            borderTop: menu ? "0.5px solid #3b3935" : "",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1vh",
            }}
          >
            {[
              { name: "Home", id: "home" },
              { name: "About us", id: "aboutUs" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact us", id: "contactUs" },
            ].map((elm, i) => {
              return (
                <a
                  key={i}
                  href={`#${elm.id}`}
                  style={{
                    height: "24px",
                    fontWeight: visible == elm.id ? "700" : "",
                    fontSize: "1rem",
                    lineHeight: "150%",
                    textAlign: "right",
                    color: visible == elm.id ? "#2ec743" : "white",
                  }}
                  onClick={() => setMenu(false)}
                >
                  <div
                    style={{ borderBottom: "0.5px solid grey", width: "100%" }}
                  >
                    {elm.name}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Navbar;
