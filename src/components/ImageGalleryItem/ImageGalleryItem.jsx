import PropTypes from 'prop-types';
import '../../styles.css';

export const ImageGalleryItem = ({
  webURL,
  largeURL,
  tags,
  onClickGallery,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClickGallery({ largeURL, tags })}
    >
      <img src={webURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  largeURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickGallery: PropTypes.func.isRequired,
};
