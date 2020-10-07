import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

const QuantityDropdown = ({ currentStyle, sku }) => {
  let options = ['select a size'];

  if (currentStyle.skus[sku.label] !== undefined) {
    options = Array.from({ length: currentStyle.skus[sku.label] }, (_, i) => i + 1);
  }
  return (
    <Dropdown
      options={options}
      // onChange={}
      value="quantity"
    />
  );
};

QuantityDropdown.propTypes = {
  currentStyle: PropTypes.shape({
    'default?': PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.number),
    style_id: PropTypes.number,
  }).isRequired,
  sku: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default QuantityDropdown;
