import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  EmailIcon,
} from 'react-share';
import PropTypes from 'prop-types';

const SocialShare = ({ styles, product }) => (
  <div>
    <TwitterShareButton
      className="social-spacing"
      title={product.name}
      via="TheProtoCompany"
      hashtags={['TheProtoCo', 'MyProto']}
      url="twitter.com"
    >
      <TwitterIcon size={24} round />
    </TwitterShareButton>
    <FacebookShareButton
      className="social-spacing"
      quote="Check out this style from The Proto Company!"
      hashtag="TheProtoCo"
      url="facebook.com"
    >
      <FacebookIcon size={24} round />
    </FacebookShareButton>
    <PinterestShareButton
      className="social-spacing"
      media={styles.results}
      description={product.name}
      url="pinterest.com"
    >
      <PinterestIcon size={24} round />
    </PinterestShareButton>
    <EmailShareButton
      className="social-spacing"
      subject={product.name}
      body="Check out this style I found at the Proto Company!"
    >
      <EmailIcon size={24} round />
    </EmailShareButton>
  </div>
);

SocialShare.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SocialShare;
