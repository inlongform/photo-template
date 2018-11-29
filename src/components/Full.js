import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Full extends Component {
  render() {
    return (
      <Container id="full">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <div className="user-info">
                  <ul>
                    <li>
                      <img
                        src="/images/avatar.jpg"
                        className="rounded-circle"
                      />
                    </li>
                    <li>
                      <h6 className="heavy">truckules</h6>
                    </li>
                  </ul>
                  <ul className="dtime">
                    <li>
                      <FontAwesomeIcon icon="calendar-alt" />
                    </li>
                    <li>
                      <h6>Nov 3, 2018 -12:30 AM</h6>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={["fab", "google"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <img src="/images/full.jpg" alt="img" />
              </CardBody>
              <CardFooter>
                <div className="tags mb-3">
                  <FontAwesomeIcon icon="tags" />
                  <ul>
                    <li>
                      <a href="#">#wallpaper</a>
                    </li>
                    <li>
                      <a href="#">#cute</a>
                    </li>
                    <li>
                      <a href="#">#mon</a>
                    </li>
                  </ul>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Full;
