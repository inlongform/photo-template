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
import { faCog } from "@fortawesome/free-solid-svg-icons";
import EditPosts from "./EditPosts";

class Settings extends Component {
  render() {
    return (
      <Container id="settings">
        <Row>
          <Col xl="3" lg="3" md="12">
            <Card>
              <CardHeader className="pb-0">
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                <h4>Settings</h4>
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
          <Col xl="9" lg="9" md="12">
            <Card>
              <CardHeader>
                <h4>My Posts</h4>
              </CardHeader>
              <CardBody>
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
