import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <br />
        <TitleImage />
        <Container>
          <Row>
            <MainImage />
            Test
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
