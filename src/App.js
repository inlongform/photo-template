import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import TopNav from "./components/TopNav";

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNav />

        <Container fluid={true} id="main" />
      </Fragment>
    );
  }
}

export default App;
