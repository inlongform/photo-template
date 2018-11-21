import React, { Component } from "react";
import {
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

export default class TopNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar>
        <NavbarBrand href="/">
          <img src="images/logo.svg" alt="logo" />
        </NavbarBrand>
        <NavbarToggler />
        {/* <Collapse navbar className="pr-4"> */}
        <Form inline={true} className="ml-auto ">
          <FormGroup>
            {/* <Label>Tags:</Label> */}
            <FontAwesomeIcon icon="tags" className="mr-2" />
            <Input type="text" placeholder="nyc, party" />
          </FormGroup>
          <FormGroup>
            {/* <Label>From:</Label> */}
            <FontAwesomeIcon icon="calendar-alt" className="mr-2" />
            <DatePicker
              // selected={this.state.endDate}
              className="date-picker form-control form-control-md"
              placeholderText="From"
              onChange={date => {
                this.setState({
                  startDate: date,
                  popoverOpen: false
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label>To:</Label> */}
            <FontAwesomeIcon icon="calendar-alt" className="mr-2" />
            <DatePicker
              // selected={this.state.endDate}
              className="date-picker form-control form-control-md"
              placeholderText="To"
              onChange={date => {
                this.setState({
                  endDate: date,
                  popoverOpen: false
                });
              }}
            />
          </FormGroup>
          {/* <a href="#">
            <FontAwesomeIcon icon="search" />
          </a> */}
          <FontAwesomeIcon icon="search" />
        </Form>
        <div className="login-container">
          <FontAwesomeIcon icon="user-circle" />
        </div>
        {/* </Collapse> */}
      </Navbar>
    );
  }
}
