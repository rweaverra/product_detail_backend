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

const SocialShare = ({ product, currentStyle, styles }) => {
  const body = `Check out ${product.name} in ${currentStyle.name} from The Proto Company!`;
  const subject = `${product.name} in ${currentStyle.name} from The Proto Co.`;
  return (
    <div>
      <TwitterShareButton
        className="social-spacing"
        title={body}
        via="TheProtoCompany"
        hashtags={['TheProtoCo', 'MyProto']}
        url="protoco.com"
      >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <FacebookShareButton
        className="social-spacing"
        quote={body}
        hashtag="TheProtoCo"
        url={styles.results[0].photos[0].url}
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>
      <PinterestShareButton
        className="social-spacing"
        media={styles.results[0].photos[0].url}
        description={body}
        url="protoco.com"
      >
        <PinterestIcon size={24} round />
      </PinterestShareButton>
      <EmailShareButton
        className="social-spacing"
        subject={subject}
        body={body}
        url={styles.results[0].photos[0].url}
      >
        <EmailIcon size={24} round />
      </EmailShareButton>
    </div>
  );
};

SocialShare.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    default: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.object),
    skus: PropTypes.objectOf(PropTypes.number),
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
