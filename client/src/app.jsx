import React, { useState, useEffect } from 'react';
import { Container, Row, Accordion } from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';
import DetailedInfo from './components/detailedInfo';
import { getAllStyles, getInfo } from './lib/routes';

const App = () => {
  const [styles, setStyles] = useState({});
  const [productId, setId] = useState(1);
  // const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    // console.log('this time!');
    getAllStyles((error, response) => {
      // console.log('data within get all styles', response.data);
      if (error) {
        return 'Could not get styles';
      }
      return setStyles(response);
    });
    // listProducts((error, response) => {
    //   if (error) {
    //     return 'Could not get products';
    //   }
    //   return setProducts(response);
    // });
    getInfo((error, response) => {
      if (error) {
        return 'Could not get products';
      }
      // console.log('id in app: ', response.id);
      setId(response.id);
      return setProduct(response);
    });
  }, []);

  return (
    <Container>
      {/* <br /> */}
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
        </Row>
      </Container>
      <Container>
        <Accordion><DetailedInfo product={product} productId={productId} /></Accordion>
      </Container>
    </Container>
  );
};

export default App;
