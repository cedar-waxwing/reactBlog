import React from "react"
//import Skiing from "src/components/4975288886482180773.jpg"

const AboutPage = () => {
  return (
    <div className="row">
       <a class="btn btn-transparent text-light col-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ color: "#FFFFFF", fontFamily: "faune", fontStyle: "italic"}}>
        Menu
</a>
      <div className="col-6">
        &nbsp;
                <h1 className="About" style={{ color: "#FFFFFF", textAlign: "right", fontFamily: "faune", fontStyle: "" }}>
          About
                </h1>
                &nbsp;
                <h2 className="About" style={{ color: "#FFFFFF", textAlign: "right", fontFamily: "faune" }}>
          I'm a full-stack web developer based in the United States. <br></br> <special style={{ color: "#FFFFFF", textAlign: "right", fontFamily: "faune", fontWeight: "100", fontStyle: "normal" }}>When I'm not coding, I enjoy reading & spending time outdoors.</special>
        </h2>
      </div>

      <div className="col-5" >
        <img src="./images/Skiing.jpg"></img>
      </div>
            &nbsp;
      {/* beginning of offcanvas */}
      <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close btn-dark text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body menu" style={{color: "#FFFFFF", textAlign: "left", fontFamily: "faune", fontWeight: "100", fontStyle: "italic" }}>
          <ul style={{listStyle: "none"}}>
            <li>Home</li>
            <br></br>
            <li>About</li>
            <br></br>
            <li>Blog</li>
            <br></br>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* end of offcanvas */}
    </div>


  )
}

export default AboutPage