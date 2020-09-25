import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { Container, Jumbotron, Button, Col, Row, Carousel } from 'react-bootstrap';
import MainImage from './mainImage';

// const apiTest = () => {
//   fetch('http://52.26.193.201:3000/products/list')
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//         })
// }

const App = () => (
  <Container>
    <br></br>
    <Jumbotron>
      <h1>The Proto Company</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn More</Button>
      </p>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={0} s={2}> </Col>
        <Col xs={12} s={8}> </Col>
        <Col xs={0} s={2}> </Col>
      </Row>
      <Row>
        <Col xs={0} s={2}> </Col>
        <Col xs={12} s={6}> 
        <Carousel interval={null}>
          <Carousel.Item>
            <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"/>
          </Carousel.Item>
        </Carousel></Col>
        <Col xs={12} s={4}> 
          Product Details Here :D 
        </Col>
        <Col xs={0} s={2}> </Col>
      </Row>
    </Container>
  </Container>
);

export default App;
