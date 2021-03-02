import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";


function About() {
  return (
    <Row  id= "aboutme">
    <Col size= "s6">
      <div className="card">
        <div className="card-image">
      <img alt="" src="./assets/img/pic.png" />
        </div>
        <div className="card-content">
          <div className="card-content">My name is Bethany and this is my about me page! Although I am new at coding, I am excited and determined to learn and move forward in this field of work as it fascinates me. I am excited to increase my knowledge and get
            better every day! I am from Southern California, but currently
            live in Gainesville, Florida. I like caving, camping, and
            playing my guitar or piano.
          </div>
        </div>
      </div>
    </Col>
  </Row>
  );
}

export default About;
