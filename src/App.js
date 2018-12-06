import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import queryString from "query-string";
import TopNav from "./components/TopNav";
import Results from "./components/Results";
import Settings from "./components/Settings";
import Full from "./components/Full";
import AddPost from "./components/AddPost";
import PopOver from "./components/PopOver";
import Notifications from "./components/Notifications";

import {
  faCalendarAlt,
  faTags,
  faEnvelope,
  faCog,
  faTrashAlt,
  faSearch,
  faUserCircle,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    library.add(
      fab,
      faCalendarAlt,
      faTags,
      faEnvelope,
      faCog,
      faTrashAlt,
      faSearch,
      faUserCircle,
      faTimes
    );
  }

  renderComp() {
    const page = queryString.parse(document.location.search);

    if (page && page.show === "full") {
      return (
        <Fragment>
          <TopNav />
          <Container fluid={true} id="main">
            <Full />
          </Container>
        </Fragment>
      );
    } else if (page.show === "upload") {
      return (
        <Fragment>
          <AddPost showMenu={true} />
          <TopNav />
          <Container fluid={true} id="main">
            <Results />
          </Container>
        </Fragment>
      );
    } else if (page.show === "settings") {
      return (
        <Fragment>
          <TopNav />
          <Container fluid={true} id="main">
            <Settings />
          </Container>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <TopNav />
          <Container fluid={true} id="main">
            <Results />
          </Container>
        </Fragment>
      );
    }
  }
  render() {
    this.renderComp();

    return (
      <Fragment>
        <Notifications
          type="info"
          message="this is the message"
          title="this is the title"
        />
        <PopOver showModal={false} />

        {this.renderComp()}
      </Fragment>
    );
  }
}

export default App;
