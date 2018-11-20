import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import TopNav from "./components/TopNav";
import Results from "./components/Results";
import Settings from "./components/Settings";

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopNav />
        <Container fluid={true} id="main">
          {/* <Results /> */}
          <Settings />
        </Container>
      </Fragment>
    );
  }
}

export default App;
