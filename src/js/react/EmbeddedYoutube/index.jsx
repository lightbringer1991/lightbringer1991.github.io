import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class EmbeddedYoutube extends React.PureComponent {
  render() {
    const { url, ratio } = this.props;
    return (
      <div className={`embedded-youtube embed-responsive embed-responsive-${ratio}`}>
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
    );
  }
}

EmbeddedYoutube.propTypes = {
  url: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(['21by9', '16by9', '4by3', '1by1']),
};

EmbeddedYoutube.defaultProps = {
  ratio: '16by9',
};

export default EmbeddedYoutube;
