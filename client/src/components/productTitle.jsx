import React from 'react';
import PropTypes from 'prop-types';

const ProductTitle = ({ product }) => (
  <div className="product-title">{ product.name }</div>
);

ProductTitle.defaultProps = {
  product: PropTypes.objectOf(PropTypes.string),
};
ProductTitle.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};

export default ProductTitle;
