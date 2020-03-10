import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Add from "./components/Add";
import Edit from "./components/Edit";
import GlobalNav from "./components/GlobalNav";
import ViewAll from "./components/ViewAll";
import uuid from "react-uuid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeListPopulated: true,
      characters: [
        {
          name: "Anne",
          job: "Tutor",
          uuid: uuid()
        },
        {
          name: "Helen",
          job: "Craft Brewer",
          uuid: uuid()
        },
        {
          name: "Mel",
          job: "Journalist",
          uuid: uuid()
        },
        {
          name: "Sean",
          job: "Tech Sales",
          uuid: uuid()
        }
      ]
    };
  }

  removePerson = evt => {
    console.log("DELETE OP");
  };

  addPerson = evt => {
    console.log("ADD OP");
  };

  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        <Router>
          <Home path="/" />
          <ViewAll
            removePerson={this.removePerson}
            path="/viewall"
            characterData={this.state.characters}
          />
          <Add addPerson={this.addPerson} path="/addemployee" />
          <Edit path="/editemployee/:uuid" />
          <Edit path="/editemployee/" />
          <NotFound default />
        </Router>
      </React.Fragment>
    );
  }
}
