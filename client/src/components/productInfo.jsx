/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainImage from './mainImage';
// import StarRating from './starRating';
// import ProductTitle from './productTitle';
// import ProductCategory from './productCategory';

const ProductInfo = ({ styles, product }) => {
  // console.log('count and rating in productInfo before passing to StarRating', count, rating);
  console.log('ProductInfo: styles, product');
  return (
    <Container>
      <Row>
        {/* Product Image Carousel & Thumbnail Viewer */}
        <div>
          <Col xs={12}>
            <MainImage styles={styles} />
          </Col>
        </div>
        <div>
          <Col xs={12}>
            {/* Product Star Ratings */}
            <Row>
              Redo Star Ratings Here.
              {/* <StarRating rating={rating} count={count} /> */}
            </Row>
            {/* Product Category */}
            <Row>
              <div className="product-category">
                category:&nbsp;
                { product.category }
              </div>
            </Row>
            {/* Product Title */}
            <Row>
              <div className="product-title">
                { product.name }
              </div>
            </Row>
            {/* Product Price */}
            <Row>Price will go here</Row>
            {/* Product Style */}
            <Row>Style and Selected Style will go here</Row>
            {/* Product Style Thumbnails */}
            <Row>Style Thumbnails will go here</Row>
            {/* Size and Quantity Selectors */}
            <Row>Size and Quantity Dropdowns will go here</Row>
            {/* Cart Options */}
            <Row>Add to Cart and Favorite Buttons will go here</Row>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

ProductInfo.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  // reviews: PropTypes.shape({
  //   product_id: PropTypes.string,
  //   ratings: PropTypes.objectOf(PropTypes.string),
  //   recommended: PropTypes.objectOf(PropTypes.string),
  //   characteristics: PropTypes.objectOf(PropTypes.string),
  // }).isRequired,
  // rating: PropTypes.number.isRequired,
  // count: PropTypes.number.isRequired,
};

export default ProductInfo;
