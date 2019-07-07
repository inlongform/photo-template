/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";

const ImgItem = props => {
  let thumb = "images/thumb.jpg";
  if (props.index === 2 || props.index === 4 || props.index === 6) {
    thumb = "images/portrait.jpg";
  }

  return (
    <Col xl="3" lg="3" md="6" className="p-2">
      <Card>
        <CardImg top src={thumb} alt="Card image cap" className="p-10" />
        <CardBody className="p-2">
          <div>
            <img
              src="images/avatar.jpg"
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
    </Col>
  );
};

export default ImgItem;
