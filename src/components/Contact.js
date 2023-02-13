import {useState} from "react"

function Contact () {

    const [contactData, setContactData] = useState({})


  return (
    <div className="row">
      <div className="col-12 ">
      <h2 className = "header" style={{ textAlign: "center", fontFamily: "faune" }}>
        Contact
        </h2>
        <br></br>
        <h3 style={{ color: "#FFFFFF", textAlign: "center", fontFamily: "faune" }}>
        github.com/cedar-waxwing
        <br></br>
        linkedin.com/in/rachelwehlers
        </h3>
      </div>
    </div>
  )
}

export default Contact