import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <Col>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default App;
