/* eslint-disable no-console */
// The dropdown for size will go here
// How many items are available for each style and size?
// if no items are available how will you display that?
import React from 'react';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';

const SizeDropdown = ({ currentStyle }) => {
  console.log('SizeDropdown: current Style', currentStyle);
  console.log('SizeDropdown: current Style skus', Object.keys(currentStyle.skus));
  // const options = [
  //   'x-small', 'small', 'medium', 'large', 'x-large',
  // ];
  let options = [];
  if (
    currentStyle.skus.length !== 0
    || Object.keys(currentStyle.skus) !== null
    || Object.keys(currentStyle.skus) !== undefined) {
    options = Object.keys(currentStyle.skus);
  }
  return (
    <Dropdown
      options={options}
      // onChange={}
      value="size"
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
};

export default SizeDropdown;
