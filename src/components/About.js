import { useState } from "react";

function About() {
  const [aboutData, setAboutData] = useState({});

  return (
    <div className="row">
      <div className="col-6">
        &nbsp;
        <h1
          className="About"
          style={{
            color: "#CBCB41",
            textAlign: "right",
            fontFamily: "faune",
            fontStyle: "bold",
          }}
        >
          About
        </h1>
        &nbsp;
        <h2
          className="About"
          style={{ color: "#FFFFFF", textAlign: "right", fontFamily: "faune" }}
        >
          I'm a full-stack web developer based in the United States. <br></br>{" "}
          <special
            style={{
              color: "#FFFFFF",
              textAlign: "right",
              fontFamily: "faune",
              fontWeight: "100",
              fontStyle: "normal",
            }}
          >
            When I'm not coding, I enjoy reading & spending time outdoors.
          </special>
        </h2>
      </div>
      <div className="col-5">
        <img src="./images/Rachel-Ehlers.jpg"></img>
      </div>
      &nbsp;
    </div>
  );
}

export default About;
