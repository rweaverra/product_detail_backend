import React, { useState, useEffect } from 'react';
import {
  Container, Row, Accordion, Col,
} from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';
import DetailedInfo from './components/detailedInfo';
import Features from './components/features';
import ProductTitle from './components/productTitle';
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
      <TitleImage />
      <Container>
        <Row>
          <Col xs={12} sm={8} md={8}>
            <MainImage styles={styles} />
          </Col>
          <Col xs={12} sm={4} md={4}>
            Stars will go here
            <br />
            Category will go here
            <br />
            <ProductTitle product={product} />
            Price will go here
            <br />
            Style and Selected Style will go here
            <br />
            Style Thumbnails will go here
            <br />
            Size and Quantity Dropdowns will go here
            <br />
            Add to Cart and Favorite Buttons will go here
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={8} md={8}>
            <Accordion className="accordion-height"><DetailedInfo product={product} productId={productId} /></Accordion>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <Features product={product} />
          </Col>
        </Row>
      </Container>
      <br />
    </Container>
  );
};

export default App;
