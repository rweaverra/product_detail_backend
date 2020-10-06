// The dropdown for size will go here
// How many items are available for each style and size?
// if no items are available how will you display that?
import React from 'react';
import Dropdown from 'react-dropdown';

const SizeDropdown = () => {
  const options = [
    'x-small', 'small', 'medium', 'large', 'x-large',
  ];
  return (
    <Dropdown
      options={options}
      // onChange={}
      value="size"
      placeholder="Select an option"
    />
  );
};

export default SizeDropdown;
