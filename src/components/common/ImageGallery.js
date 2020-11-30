import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

const Gallery = ({ images }) => {
  const items = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    description: image.name,
  }));

  return <ImageGallery items={items} showIndex lazyLoad showPlayButton={false} />;
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
