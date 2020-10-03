import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DetailedInfo from './detailedInfo';

const ProductDetails = ({ product, productId }) => (
  <Container>
    <Row>
      <DetailedInfo product={product} productId={productId} />
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
