// FIXES: Needs to be looking at the currentStyle nam
import React from 'react';
import PropTypes from 'prop-types';

const StyleName = ({ styles }) => (
  <div>
    <h3 className="styles-name">
      Style →&nbsp;
    </h3>
    <h3 className="styles-name-selected">
      {styles.results[0].name}
    </h3>
  </div>
);

StyleName.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default StyleName;
