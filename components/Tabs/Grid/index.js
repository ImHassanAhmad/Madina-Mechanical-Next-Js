import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Grid(props) {
  return (
    <div
      style={{
        height:
          props.windowDimensions && props.windowDimensions.width > 780
            ? "70vh"
            : "30vh",
        minHeight:
          props.windowDimensions && props.windowDimensions.width > 780
            ? "300px"
            : "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1vw",
        padding: "0 5vw",
      }}
    >
      {["Heating", "Ventilation", "Air Conditioning"].map((e, i) => (
        <div
          key={i}
          style={{
            height: "100%",
            backgroundImage: `url(https:${
              props.fields[props.tab][0].fields.file.url
            })`,
            backgroundSize: "cover",
            width: "40%",
            borderRadius: "8.14935px",
            display: props.tab == e ? "block" : "none",
          }}
        />
      ))}

      <div
        style={{
          height: "100%",
          width: "60%",
          borderRadius: "8.14935px",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
        }}
      >
        <div
          style={{
            height: "50%",
            width: "100%",
            display: "flex",
            gap: "1vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 3vw",
              height: "100%",
              background: "linear-gradient(180deg, #3CD250 -9%, #1B912B 109%)",
              opacity: "0.8",
              width: "30vw",
              borderRadius: "8.14935px",
              gap: "1vh",
            }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>{props.tab}</p>
            <p
              style={{
                color: "white",
                fontSize:
                  props.windowDimensions && props.windowDimensions.width > 780
                    ? "13px"
                    : props.windowDimensions &&
                      props.windowDimensions.width > 450
                    ? "9px"
                    : "7px",
              }}
            >
              {props.tab} service doesn’t need to be stressful! We are Toronto’s
              best HVAC solution.
            </p>
            <a
              href="#contactUs"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "1vw",
                cursor: "pointer",
              }}
            >
              <p style={{ color: "white", fontSize: "0.84rem" }}>Get Quote </p>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} />
            </a>
          </div>
          {["Heating", "Ventilation", "Air Conditioning"].map((e, i) => (
            <div
              key={i}
              style={{
                height: "100%",
                backgroundImage: `url(https:${
                  props.fields[props.tab][2].fields.file.url
                })`,
                backgroundSize: "cover",
                width: "30vw",
                borderRadius: "8.14935px",
                display: props.tab == e ? "block" : "none",
              }}
            />
          ))}
        </div>
        {["Heating", "Ventilation", "Air Conditioning"].map((e, i) => (
          <div
            key={i}
            style={{
              height: "50%",
              backgroundImage: `url(https:${
                props.fields[props.tab][1].fields.file.url
              })`,
              backgroundSize: "cover",
              width: "100%",
              borderRadius: "8.14935px",
              display: props.tab == e ? "block" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
