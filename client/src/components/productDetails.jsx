import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import DetailedInfo from './detailedInfo';
import Features from './features';

const ProductDetails = ({ product, productId }) => (
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
);

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default ProductDetails;
