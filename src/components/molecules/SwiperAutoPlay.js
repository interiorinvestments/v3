import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 'auto',
  },
  swiperSlide: {
    width: 'auto',
  },
  image: {
    objectFit: 'cover',
  },
}));

SwiperCore.use([Autoplay]);

const SwiperAutoPlay = ({ items }) => {
  const classes = useStyles();

  return (
    <Swiper loop autoplay={{ delay: 13000 }} className={classes.root}>
      {items.map((item) => (
        <SwiperSlide
          className={classes.swiperSlide}
          key={item.src}
        >
          <Image
            src={item.src}
            alt={item.alt}
            srcSet={item.srcSet}
            layout="fill"
            loading="eager"
            className={classes.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

SwiperAutoPlay.propTypes = {
  /**
   * The array of images object which should consist of src, alt and srcset attributes
   */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SwiperAutoPlay;
