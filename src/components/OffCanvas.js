import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OffCanvas = () => {

  // const [offCanvas, setOffCanvas] = useState(null);
  // useEffect(() => {
  //   var myOffcanvas = document.getElementById('offcanvas')
  //   var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
  //   setOffCanvas(bsOffcanvas)
  // }, []);

  // const toggleOffcanvas = (event) => {
  //   event.preventDefault();
  //   bsOffcanvas.hide();
  // }

  return (
    <div>
      {/* beginning of offcanvas */}
      <div className="offcanvas offcanvas-start bg-dark"
        //onClick={toggleOffcanvas} 
        tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn btn-close btn-light text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body menu" style={{ color: "#FFFFFF", textAlign: "left", fontFamily: "faune", fontWeight: "100" }}>
          <ul>
            <Link to="/Home" className="text-decoration-none text-light">Home</Link>
            <br></br>
            <br></br>
            <Link to="/About" className="text-decoration-none text-light">About</Link>
            <br></br>
            <br></br>
            {/* <Link to="/Blog" className="text-decoration-none text-light">Blog</Link>
            <br></br>
            <br></br> */}
            <Link to="/Portfolio" className="text-decoration-none text-light">Portfolio</Link>
            <br></br>
            <br></br>
            <Link to="/Contact" className="text-decoration-none text-light">Contact</Link>
          </ul>
        </div>
      </div>
      {/* end of offcanvas */}
    </div>


  )
}

export default OffCanvas