import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  FormGroup,
  Label
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditPosts from "./EditPosts";

class Settings extends Component {
  render() {
    return (
      <Container id="settings">
        <Row>
          <Col xl="3" lg="3" md="12">
            <Card>
              <CardHeader className="pb-0">
                <FontAwesomeIcon icon="cog" className="mr-2" />
                <h5>Settings</h5>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="sep" />
                <FormGroup className="mt-3">
                  <Label>Display Name</Label>
                  <Input />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label>Location</Label>
                  <Input />
                </FormGroup>
                <Button color="link">Save</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xl="9" lg="9" md="12" id="myposts">
            <Card>
              <CardHeader className="pb-0">
                <h5>My Posts</h5>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="sep" />
                <EditPosts />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Settings;
