import React from 'react';
import PropTypes from 'prop-types';

const StyleName = ({ currentStyle }) => (
  <div>
    <h3 className="styles-name">
      Style →&nbsp;
    </h3>
    <h3 className="styles-name-selected">
      {currentStyle.name}
    </h3>
  </div>
);

StyleName.propTypes = {
  currentStyle: PropTypes.shape({
    'default?': PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.number),
    style_id: PropTypes.number,
  }).isRequired,
};

export default StyleName;
