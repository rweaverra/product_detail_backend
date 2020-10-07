import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

const SizeDropdown = ({ currentStyle, setSku }) => {
  let options = [];
  if (
    currentStyle.skus.length !== 0
    || Object.keys(currentStyle.skus) !== null
    || Object.keys(currentStyle.skus) !== undefined) {
    options = Object.keys(currentStyle.skus);
  }

  const handleSetSku = (value) => {
    setSku(value);
  };
  return (
    <Dropdown
      options={options}
      value="size"
      onChange={(value) => handleSetSku(value)}
      placeholder="Select an option"
    />
  );
};

SizeDropdown.propTypes = {
  currentStyle: PropTypes.shape({
    'default?': PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.any),
    style_id: PropTypes.number,
  }).isRequired,
  setSku: PropTypes.func.isRequired,
};

export default SizeDropdown;
