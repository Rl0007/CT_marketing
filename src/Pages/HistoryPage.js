import React from "react";
import History_image from "../images/mountian2.jpg";
import "./HistoryPage.css";
import Carousel from "react-bootstrap/Carousel";
import mountain1 from "../images/mountian1.jpg";
import mountain2 from "../images/mountian2.jpg";
import climbing_mountain from "../images/climbing.jpg";
function HistoryPage() {
  return (
    <div className="Historypage" id="Historypage_scroll">
      <div className="content">
        <div className="no_and_history">
          <p className="number">01</p>
          <p className="his">History</p>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          libero voluptatem veniam recusandae id laudantium perspiciatis odit,
          nemo voluptate in dolorem optio, corrupti dolor ab numquam doloremque
          itaque mollitia deserunt! Tempora nostrum voluptatem a libero
          laboriosam provident numquam. Ipsam quod incidunt molestias ullam,
          sequi adipisci aliquam cum! Qui, alias beatae.
        </p>
      </div>
      <img src={History_image} alt="" className="Historypage_image" />
      {/* <img src={mountain1} className="test" alt="" /> */}
      {/* <p className="test"></p> */}
      <Carousel indicators={false} className="carousel">
        <Carousel.Item>
          <div className="carousel_container">
            <img className="carousel_image" src={mountain1} alt="First slide" />
            <img className="carousel_image" src={mountain2} alt="First slide" />
            <img
              className="carousel_image"
              src={climbing_mountain}
              alt="First slide"
            />
            <img className="carousel_image" src={mountain1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel_container">
            <img className="carousel_image" src={mountain2} alt="First slide" />
            <img className="carousel_image" src={mountain1} alt="First slide" />
            <img className="carousel_image" src={mountain2} alt="First slide" />
            <img
              className="carousel_image"
              src={climbing_mountain}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel_container">
            <img className="carousel_image" src={mountain1} alt="First slide" />
            <img
              className="carousel_image"
              src={climbing_mountain}
              alt="First slide"
            />
            <img className="carousel_image" src={mountain2} alt="First slide" />
            <img className="carousel_image" src={mountain1} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HistoryPage;
