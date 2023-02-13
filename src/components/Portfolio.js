import React, { useState } from 'react';
import weather from "./img/weather.jpg";
import campaign from "./img/campaign.jpg";
import puzzle from "./img/puzzle.png";

function Portfolio() {
  const [paragraph, setParagraph] = useState("Hello World")
  const [number, setNumber] = useState(0)

  //setState("Goodbye world")


  return (
    <div>


<h1 className="header">Portfolio</h1> 
<div className="portfolioBody">This portfolio is constantly growing, and is updated here as projects are finalized on GitHub and Firebase.
For additional projects, go to <a href="https://github.com/cedar-waxwing">github.com/cedar-waxwing</a>.</div>   
    <br></br>
    <div className="card text-white bg-dark" styles="width: 18rem;">
  <img src={puzzle} class="card-img-top" alt="Puzzle slider"></img>
  <div className="card-body">
    <h5 className="card-title uniqueTitle">Puzzle Slider</h5>
    <p className="card-text uniqueBody">Uses React to display a working slide puzzle that shuffles and solves.</p>
  </div>
  <div className="card-body">
    {/* <a href="#" className="card-link text-light link-text">firebase</a> */}
  </div>
</div>
<br></br>
    <div className="card text-white bg-dark" styles="width: 18rem;">
  <img src={weather} class="card-img-top" alt="Weather App"></img>
  <div className="card-body">
    <h5 className="card-title uniqueTitle">Weather App</h5>
    <p className="card-text uniqueBody">Allows the user to enter a ZIP code and returns the current weather data for that location. Uses the OpenWeather API.

</p>
  </div>
  <div className="card-body">
    <a href="https://cedar-waxwing.github.io/WeatherApp" className="card-link text-light link-text">github</a>
  </div>
</div>
<br></br>
<div className="card text-white bg-dark" styles="width: 18rem;">
  <img src={campaign} class="card-img-top" alt="Campaign App"></img>
  <div className="card-body">
    <h5 className="card-title uniqueTitle">Campaign App</h5>
    <p className="card-text uniqueBody">This fictional campaign site uses Bootstrap to display tables, cards, header images and navigation bars.
</p>
  </div>
  <div className="card-body">
    <a href="https://cedar-waxwing.github.io/CampaignSite/." className="card-link text-light link-text">github</a>
  </div>
</div>
</div>

  )

  }

  export default Portfolio