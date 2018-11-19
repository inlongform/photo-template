import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class TopNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src="images/logo.svg" alt="logo" />
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar className="pr-4">
          <Form inline={true} className="ml-auto ">
            <FormGroup>
              <Label>Tags:</Label>
              <Input type="text" placeholder="nyc, party" />
            </FormGroup>
            <FormGroup>
              <Label>From:</Label>
              <DatePicker
                // selected={this.state.endDate}
                className="date-picker form-control form-control-md"
                onChange={date => {
                  this.setState({
                    startDate: date,
                    popoverOpen: false
                  });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>To:</Label>
              <DatePicker
                // selected={this.state.endDate}
                className="date-picker form-control form-control-md"
                onChange={date => {
                  this.setState({
                    endDate: date,
                    popoverOpen: false
                  });
                }}
              />
            </FormGroup>
            <FontAwesomeIcon icon={faSearch} />
          </Form>
          <div className="login-container">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </Collapse>
      </Navbar>
    );
  }
}
