import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DetailedInfo = ({ product }) => {
  const slogan = product && product.slogan;
  const description = product && product.description;
  // console.log('id passed in state', productId);
  // console.log('product obj', (product));
  // console.log('slogan', product.slogan);
  // console.log('description', product.description);
  // console.log('product id', product && product[]);
  return (
    <Card className="accordion-style">
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="accordion-links">
          { slogan }
          <br />
          <small>click for more info </small>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0" className="accordion-body">
        <Card.Body>
          { description }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

DetailedInfo.defaultProps = {
  product: PropTypes.objectOf(PropTypes.string),
};
DetailedInfo.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.number),
};
export default DetailedInfo;
