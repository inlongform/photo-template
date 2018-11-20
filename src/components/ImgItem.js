import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button
} from "reactstrap";

class ImgItem extends Component {
  render() {
    let thumb = "/images/thumb.jpg";
    if (
      this.props.index == 2 ||
      this.props.index == 4 ||
      this.props.index == 6
    ) {
      thumb = "/images/portrait.jpg";
    }
    console.log(this.props);
    return (
      <Col xl="3" lg="3" md="6" className="p-2">
        <Card>
          <CardImg top src={thumb} alt="Card image cap" className="p-10" />
          <CardBody className="p-2">
            <div>
              <img
                src="/images/avatar.jpg"
                alt="avatar"
                className="rounded-circle user-icon"
              />
            </div>
            <div>
              <CardTitle>truckules</CardTitle>
              <CardSubtitle>Nov 3, 2018 -12:30 AM</CardSubtitle>
            </div>
          </CardBody>
          <CardFooter>
            <div className="sep" />
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
          </CardFooter>
        </Card>
        {/* </div> */}
      </Col>
    );
  }
}

export default ImgItem;
