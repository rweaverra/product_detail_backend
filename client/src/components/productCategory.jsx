import React from 'react';
import PropTypes from 'prop-types';

const ProductCategory = ({ product }) => (
  <div className="product-category">
    category:&nbsp;
    { product.category }
  </div>
);

ProductCategory.defaultProps = {
  product: PropTypes.objectOf(PropTypes.string),
};
ProductCategory.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};

export default ProductCategory;
