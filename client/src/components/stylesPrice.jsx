import React from 'react';
import PropTypes from 'prop-types';

const StylePrice = ({ styles }) => {
  // console.log('Style Price: sales price', styles.results[0].sale_price);
  // console.log('Style Price: original price', styles.results[0].original_price);
  if (styles.results.sale_price > 0) {
    return (
      <div>
        <div className="price price-original">
          $
          {
        styles.results[0].original_price
        }
        </div>
        <div className="price price-sale">
          $
          {
        styles.results[0].sale_price
        }
        </div>
      </div>
    );
  }
  return (
    <div className="price">
      $
      {
      styles.results[0].original_price
    }
    </div>
  );
};

StylePrice.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default StylePrice;
