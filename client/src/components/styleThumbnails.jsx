/* eslint-disable no-console */
// FIXES: Need to map over all styles for product image
//        and display first image of each style.
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

const StyleThumbnails = ({ styles, setCurrentStyle, currentStyle }) => {
  // eslint-disable-next-line no-unused-vars
  const [isSelected, setIsSelected] = useState(false);
  const stylesArr = Object.entries(styles.results);

  const handleStyleSelect = (styleId) => {
    for (let i = 0; i < stylesArr.length; i += 1) {
      const current = stylesArr[i][1];
      if (current.style_id === styleId) {
        setCurrentStyle(current);
      }
    }
    console.log('Style Thumbnails: current style', currentStyle);
  };
  let className = 'thumbnails-img ';
  if (isSelected) {
    className += 'thumbnails-selected';
  }
  return (
    <div>
      {/* <Col sm={10} md={7}> */}
      <Container className="thumbnails-cage">
        {stylesArr.map((photo) => {
          let photoUrl = '';
          const styleId = photo[1].style_id;
          // console.log('styleId', styleId);
          // console.log('photo in map', photo);
          if (photo[1].photos.thumbnail_url === null) {
            photoUrl = '/comingSoon.jpg';
          } else {
            photoUrl = photo[1].photos[0].thumbnail_url;
          }
          return (
            <Image
              id={styleId}
              key={uuidv4()}
              className={className}
              src={photoUrl}
              alt={photo.name}
              roundedCircle
              onClick={() => {
                handleStyleSelect(styleId);
              }}
            />
          );
        })}
      </Container>
      {/* </Col> */}
    </div>
  );
};

StyleThumbnails.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentStyle: PropTypes.shape({
    'default?': PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    sale_price: PropTypes.string,
    skus: PropTypes.objectOf(PropTypes.number),
    style_id: PropTypes.number,
  }).isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  // productId: PropTypes.number.isRequired,
};

export default StyleThumbnails;
