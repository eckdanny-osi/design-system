import React, { Component } from "react";
import { Page } from "@cwds/components";
import FacilityProfile from "./FacilityProfile";
import Sidenav from "./FacilityProfile/Sidenav";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Page
        title="Cambell Family Home - License Number / Family ID #123456789a"
        layout="jumpnav"
        breadcrumb={[
          { path: "/", title: "Dashboard" },
          { path: "/rfa", title: "RFA List" },
          { path: "/rfa/123456789a", title: "Cambell Family Home" }
        ]}
        main={FacilityProfile}
        sidenav={Sidenav}
      />
    );
  }
  shmender() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
