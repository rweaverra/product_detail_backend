import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';
// import listProducts from './lib/routes.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this.getProducts = this.getProducts.bind(this);
  }
  // getProducts((error, data) => {
  //   if (error) {
  //     throw(error)
  //   } else {
  //     console.log(data.results);
  //   }
  // })

  render() {
    return (
      <Container>
        <br />
        <TitleImage />
        <Container>
          <Row>
            <MainImage />
            Stars will go here
            <br />
            Category will go here
            <br />
            Product Name will go here
            <br />
            Price will go here
            <br />
            Style and Selected Style will go here
            <br />
            Style Thumbnails will go here
            <br />
            Size and Quantity Dropdowns will go here
            <br />
            Add to Cart and Favorite Buttons will go here
            <br />
          </Row>
        </Container>
        <Container>
          Product Description will go here
        </Container>
      </Container>
    );
  }
}

export default App;
