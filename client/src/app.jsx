import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';
import { getAllStyles } from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [productId, setId] = useState(1);

  useEffect(() => {
    // console.log('this time!');
    getAllStyles((error, response) => {
      // console.log('data within get all styles', response.data);
      if (error) {
        return 'Could not get styles';
      }
      setId(response.product_id);
      return setStyles(response);
    });
  }, []);

  return (
    <Container>
      <br />
      <TitleImage />
      <Container>
        <Row>
          <MainImage styles={styles} />
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
};

export default App;
