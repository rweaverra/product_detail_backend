import React, { useState, useEffect } from 'react';
import {
  Container, Row, Accordion, Col,
} from 'react-bootstrap';
import TitleImage from './components/titleImage';
import MainImage from './components/mainImage';
import DetailedInfo from './components/detailedInfo';
import Features from './components/features';
import ProductTitle from './components/productTitle';
import ProductCategory from './components/productCategory';
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
          <Col xs={12} sm={12} md={8} lg={8}>
            <MainImage styles={styles} />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Row>
              <span role="img" aria-label="stars">⭐️⭐️⭐️⭐️⭐️</span>
              Stars will go here
            </Row>
            <Row><ProductCategory product={product} /></Row>
            <Row><ProductTitle product={product} /></Row>
            <Row>Price will go here</Row>
            <Row>Style and Selected Style will go here</Row>
            <Row>Style Thumbnails will go here</Row>
            <Row>Size and Quantity Dropdowns will go here</Row>
            <Row>Add to Cart and Favorite Buttons will go here</Row>
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
