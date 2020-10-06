// FIXES: Needs to be looking at the currentStyle price and sale price
import React from 'react';
import PropTypes from 'prop-types';

const StylePrice = ({ currentStyle }) => {
  if (currentStyle.sale_price > 0) {
    return (
      <div>
        <div className="price price-original">
          $
          {
        currentStyle.original_price
        }
        </div>
        <div className="price price-sale">
        &nbsp;$
          {
        currentStyle.sale_price
        }
        </div>
      </div>
    );
  }
  return (
    <div className="price">
      $
      {
      currentStyle.original_price
    }
    </div>
  );
};

StylePrice.propTypes = {
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

export default StylePrice;
