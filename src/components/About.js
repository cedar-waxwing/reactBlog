import { useState } from "react";

function About() {
  const [aboutData, setAboutData] = useState({});

  return (
    <div className="row">
      <div className="col-7">
        &nbsp;
        <h1
          className="About"
          style={{
            color: "#cd2912",
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
            When I'm not coding, I enjoy hiking, traveling, and horseback riding.<br></br>{" "}
          </special>
          <special
            style={{
              color: "#FFFFFF",
              textAlign: "right",
              fontFamily: "faune",
              fontStyle: "normal",
            }}
          >
            My favorite genres are progressive house and trance. Check out what I'm listening to on Spotify: <br></br>{" "}
          </special>
        </h2>
      </div>
      <div className="col-5">
        <img src="./images/Rachel-Cheng.jpg" className="propic" alt="Rachel Cheng"></img>
      </div>
      &nbsp;
    </div>
  );
}

export default About;
