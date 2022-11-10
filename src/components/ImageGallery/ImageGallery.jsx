import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import '../../styles.css';

export const ImageGallery = ({ images, onClickGallery }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, webURL, largeURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webURL={webURL}
              largeURL={largeURL}
              tags={tags}
              onClickGallery={onClickGallery}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  onClickGallery: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webURL: PropTypes.string.isRequired,
      largeURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
