import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ImgItem from "./ImgItem";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: "" };

class Results extends Component {
  componentWillMount() {}

  render() {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const items = ids.map((id, ind) => {
      return <ImgItem key={ind} index={ind} />;
    });

    return (
      <Container id="results">
        <Row>
          <Col>
            <Masonry
              className={"my-gallery-class"} // default ''
              elementType={"div"} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              // imagesLoadedOptions={} // default {}
              onImagesLoaded={this.handleImagesLoaded}
            >
              {items}
            </Masonry>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;
