import React, { Component } from "react";
import { Navbar, NavbarBrand, Form, FormGroup, Input } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

export default class TopNav extends Component {
  state = {
    startDate: moment(),
    endDate: moment()
  };
  render() {
    return (
      <Navbar>
        <NavbarBrand href="/">
          <img src="images/logo.svg" alt="logo" />
        </NavbarBrand>
        <Form>
          <FormGroup>
            {/* <FontAwesomeIcon icon="tags" className="mr-2" /> */}
            <Input type="text" placeholder="nyc, party" />
          </FormGroup>
          <FormGroup>
            {/* <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> */}
            <DatePicker
              selected={this.state.startDate}
              className="date-picker form-control form-control-md"
              placeholderText="From"
              onChange={date => {
                this.setState({
                  startDate: date
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            {/* <FontAwesomeIcon icon="calendar-alt" className="mr-2" /> */}
            <DatePicker
              selected={this.state.endDate}
              className="date-picker form-control form-control-md"
              placeholderText="To"
              onChange={date => {
                this.setState({
                  endDate: date
                });
              }}
            />
          </FormGroup>
          <a href="">
            <FontAwesomeIcon icon="search" />
          </a>
        </Form>
        <div className="login-container">
          <FontAwesomeIcon icon="user-circle" />
        </div>
      </Navbar>
    );
  }
}
