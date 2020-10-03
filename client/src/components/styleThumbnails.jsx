// style thumbnails go here
// How will you display the style images?
// Will you use the thumbnail or the full image from the style?
// How will a user see they selected a style?
// What will the badge look like?
// How will you grab the image url and the style id?
// What will be held in state?
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { v4 as uuidv4 } from 'uuid';

const StyleThumbnails = ({ styles }) => {
  const [isSelected, imgIsSelected] = useState(false);
  const photoArr = styles.results[0].photos;
  const handleStyleSelect = useCallback(() => {
    imgIsSelected(!isSelected); // current style will go here
  }, [isSelected]);

  let className = 'thumbnails-img ';
  if (isSelected) {
    className += 'thumbnails-selected';
  }

  return (
    <div>
      {/* <Col sm={10} md={7}> */}
      <Container className="thumbnails-cage">
        {photoArr.map((photo) => {
          let photoUrl = '';
          if (photo.thumbnail_url === null) {
            photoUrl = 'https://i.imgur.com/5vMEbrv.jpg';
          } else {
            photoUrl = photo.thumbnail_url;
          }
          return (
            <Image
              key={uuidv4()}
              className={className}
              src={photoUrl}
              alt={photo.name}
              roundedCircle
              onClick={handleStyleSelect}
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
  // productId: PropTypes.number.isRequired,
};

export default StyleThumbnails;
