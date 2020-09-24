import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

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
    <Row>
      <Col md={8}>md8</Col>
      <Col md={4}><Button>It's my Button</Button></Col>
    </Row>
    <Row>

    </Row>
    <div id="test">
      It is my app!
      <div>no</div>
    </div>
  </Container>
);

export default App;
