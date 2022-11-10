import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    currentItem: PropTypes.objectOf({
      largeURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape);
  }

  onCloseByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onCloseByBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    console.log(this.props.currentItem);
    const {
      currentItem: { largeURL, tags },
    } = this.props;

    return (
      <div className="Overlay" onClick={this.onCloseByBackdrop}>
        <div className="Modal">
          <img src={largeURL} alt={tags} />
        </div>
      </div>
    );
  }
}