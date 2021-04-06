import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
// import "./fonts/ZnikomitNo24.otf"
//import { render } from "@testing-library/react";
import Header from "./Header"
import Hero from "./Hero"
import AboutPage from "./AboutPage"
//import { Component } from "react";

class App extends React.Component {

  constructor() {
    super();
    this.pages = [
      { readableName: "About", url: "about" },
      { readableName: "Blog", url: "blog" },
      { readableName: "Contact", url: "contact" }
    ];
    this.state = {
      currentPage: 0
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }

  // componantDidMount(){
  //   console.log(name)

  //   if (name) {

  //   } else {
  //     let name = window.localStorage.setItem("name", "Rachel")
  //   }
  // }

    

  render() {
    return (
      <div className="App container text-light">
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
        {/* <Hero /> */}
        <AboutPage />
        
      </div>
      
    );
  }
}

export default App;
