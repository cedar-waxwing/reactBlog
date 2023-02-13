import React, { useState, useEffect } from 'react';
// import "./fonts/ZnikomitNo24.otf"
//import { render } from "@testing-library/react";
//import Header from "./Header"
import Home from "./Home"
import About from "./About"
import OffCanvas from "./OffCanvas"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Contact from "./Contact"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
  // let pages = [
  //   { readableName: "Hero", url: "hero" },
  //   { readableName: "About", url: "about" },
  //   { readableName: "Blog", url: "blog" },
  //   { readableName: "Portfolio", url: "portfolio" },
  //   { readableName: "Contact", url: "contact" }
  // ];

  // const [currentPage, setCurrentPage] = useState(0)

  //class
  //   const setPage = (newPageNum) => {
  //   setCurrentPage(newPageNum)
  // }

  //class
  //this.setState({currentPage: newPageNum })

  return (
    <div className="App container text-light">
      <Router>
        {/* <a className="btn btn-transparent text-light col-1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" style={{ color: "#FFFFFF", fontFamily: "faune", fontStyle: "italic"}}>
        Menu
</a> */}

        <span className="btn navbar-toggler-icon bg-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" ></span>
        <OffCanvas />
        {/* <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
        /> */}
        {/* fix this lol */}
        {/* <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div> */}
        <div>&nbsp;</div>

        <Switch>
          <Route exact={true} path="/About">
            <About />
          </Route>
          <Route exact={true} path="/Home">
            <Home />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/Portfolio">
            <Portfolio />
          </Route>
          <Route>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
