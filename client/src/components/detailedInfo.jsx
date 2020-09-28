import React from 'react';
import {
  Accordion, Card, Button, Row,
} from 'react-bootstrap';
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
          <Row>
            { slogan }
          </Row>
          <Row>
            <small>click for more info </small>
          </Row>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0" className="accordion-body">
        <Card.Body>
          <Row>
            {/* <Col xs={12} sm={12} md={8} lg={8}> */}
            { description }
            {/* </Col> */}
            {/* <Col xs={12} sm={12} md={4} lg={4} /> */}
          </Row>
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
