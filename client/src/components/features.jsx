import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Features = ({ product }) => (
  <Card className="features-height">
    <Card.Header className="accordion-style">
      <p className="accordion-links features-title">Features</p>
    </Card.Header>
    <Card.Body className="accordion-body">
      List of features
    </Card.Body>
  </Card>
);

// Features.defaultProps = {
// };
// Features.propTypes = {
// };
export default Features;
