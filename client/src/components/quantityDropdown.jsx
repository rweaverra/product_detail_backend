// The dropdown for quantity selection will go here
// how many items of the current style are left
// display quantity of 5 to start
// display max quantity amount once dropdown functionality is understood
import React from 'react';
import Dropdown from 'react-dropdown';

const QuantityDropdown = () => {
  const options = [
    'one', 'two', 'three', 'four', 'five',
  ];
  return (
    <Dropdown
      options={options}
      // onChange={}
      value="quantity"
      placeholder="Select an option"
    />
  );
};

export default QuantityDropdown;
