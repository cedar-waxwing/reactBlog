import { useState } from "react";

function About() {
  const [aboutData, setAboutData] = useState({});

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img
            src="./images/Rachel-Cheng.jpg"
            className="propic"
            alt="Rachel Cheng"
          ></img>
        </div>
        <div className="col-6">
          <h2
            className="About"
            // style={{
            //   color: "#cd2912",
            //   textAlign: "left",
            //   fontFamily: "faune",
            //   fontStyle: "bold",
            // }}
          >
            About
          </h2>
          <p
            className="AboutBody"
            style={{ color: "#FFFFFF", textAlign: "left", fontFamily: "faune" }}
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
              When I'm not coding, I enjoy hiking, traveling, and horseback
              riding.<br></br> My favorite music genres are progressive house
              and trance.
            </special>
          </p>
        </div>
        <div className="col-12 spotifyNotif">
          <special
            style={{
              color: "#cd2912",
              // textAlign: "right",
              fontFamily: "faune",
              fontWeight: "100",
              fontStyle: "normal",
            }}
          >
            <i>Check out what I'm listening to on Spotify:</i>
          </special>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <h2
            className="header"
            style={{ textAlign: "center", fontFamily: "faune" }}
          >
            Contact
          </h2>
          <br></br>
          <h3
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "faune",
            }}
          >
            github.com/cedar-waxwing
            <br></br>
            linkedin.com/in/rachelwehlers
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
