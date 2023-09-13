import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';


const OffCanvas = () => {

  const [offCanvas, setOffCanvas] = useState(null);
  var bsOffcanvas;

  useEffect(() => {
    var myOffcanvas = document.getElementById('myOffcanvas')
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
    setOffCanvas(bsOffcanvas)
  }, []);

  const toggleOffcanvas = (event) => {
    event.preventDefault();
    bsOffcanvas.hide();
  }

  return (
    <div>
      <div className="offcanvas offcanvas-end bg-dark"
        onClick={toggleOffcanvas} 
        tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn btn-close btn-light text-reset sunmenu" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body menu" style={{ color: "#FFFFFF", textAlign: "left", fontFamily: "faune", fontWeight: "100" }}>
          <ul>
            <Link to="/Home" className="text-decoration-none text-light">Home</Link>
            <br></br>
            <br></br>
            <Link to="/About" className="text-decoration-none text-light">About</Link>
            <br></br>
            <br></br>
            <Link to="/Contact" className="text-decoration-none text-light">Contact</Link>
          </ul>
        </div>
      </div>
    </div>


  )
}

export default OffCanvas