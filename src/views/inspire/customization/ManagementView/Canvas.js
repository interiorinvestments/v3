import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  div: {
    paddingTop: '150px',
    top: 0,
    position: 'fixed',
  },
  img: {
    width: '415px',
    height: '287px',
    position: 'absolute',
  },
  hidden: {
    visibility: 'hidden',
  },
}));

const Canvas = ({ options }) => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img className={classes.img} src="/img/customization/management/1A.png" alt="background" />
      {/* 1.1 */}
      <img className={clsx(classes.img, options['1.1'] === 'A' && !options['1.2'] ? {} : classes.hidden)} src="/img/customization/management/2A.png" alt="table" />
      <img className={clsx(classes.img, options['1.1'] === 'B' && !options['1.2'] ? {} : classes.hidden)} src="/img/customization/management/2B.png" alt="table" />
      <img className={clsx(classes.img, options['1.1'] === 'C' && !options['1.2'] ? {} : classes.hidden)} src="/img/customization/management/2C.png" alt="table" />
      {/* task Chairs */}
      <img className={clsx(classes.img, options.taskChair === 'A' ? {} : classes.hidden)} src="/img/customization/management/12A-TaskChair-Tom1-A.png" alt="Task Chair" />
      <img className={clsx(classes.img, options.taskChair === 'B' ? {} : classes.hidden)} src="/img/customization/management/12B-TaskChair-Pilot1-A.png" alt="Task Chair" />
      <img className={clsx(classes.img, options.taskChair === 'C' ? {} : classes.hidden)} src="/img/customization/management/12C-TaskChair-Meda1-A.png" alt="Task Chair" />
      <img className={clsx(classes.img, options.taskChair === 'D' ? {} : classes.hidden)} src="/img/customization/management/12D-TaskChair-Imago1-A.png" alt="Task Chair" />
      <img className={clsx(classes.img, options.taskChair === 'E' ? {} : classes.hidden)} src="/img/customization/management/12E-TaskChair-Aeron1-D.png" alt="Task Chair" />

      {/* 1.4 */}
      <img className={clsx(classes.img, options['1.4'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/6B.png" alt="Additional Storage" />
      {/* 1.2  */}
      {/* A */}
      <img className={clsx(classes.img, options['1.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/3a-Table-W1.png" alt="table" />
      {/* B */}
      <img className={clsx(classes.img, options['1.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/3b-Table-W1.png" alt="table" />
      {/* C */}
      <img className={clsx(classes.img, options['1.2'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/3c-Table-W1.png" alt="table" />
      {/* D */}
      <img className={clsx(classes.img, options['1.2'] === 'D' ? {} : classes.hidden)} src="/img/customization/management/3d-Table-W1.png" alt="table" />
      {/* E */}
      <img className={clsx(classes.img, options['1.2'] === 'E' ? {} : classes.hidden)} src="/img/customization/management/3e-Table-W1.png" alt="table" />
      {/* F */}
      <img className={clsx(classes.img, options['1.2'] === 'F' ? {} : classes.hidden)} src="/img/customization/management/3f-Table-W1.png" alt="table" />
      {/* G */}
      <img className={clsx(classes.img, options['1.2'] === 'G' ? {} : classes.hidden)} src="/img/customization/management/3g-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'G' ? {} : classes.hidden)} src="/img/customization/management/3g-MATable-W1.png" alt="table" />
      {/* H */}
      <img className={clsx(classes.img, options['1.2'] === 'H' ? {} : classes.hidden)} src="/img/customization/management/3h-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'H' ? {} : classes.hidden)} src="/img/customization/management/3g-MATable-W1.png" alt="table" />
      {/* I */}
      <img className={clsx(classes.img, options['1.2'] === 'I' ? {} : classes.hidden)} src="/img/customization/management/3b-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'I' ? {} : classes.hidden)} src="/img/customization/management/3i-MATable-W1.png" alt="table" />
      {/* J */}
      <img className={clsx(classes.img, options['1.2'] === 'J' ? {} : classes.hidden)} src="/img/customization/management/3d-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'J' ? {} : classes.hidden)} src="/img/customization/management/3i-MATable-W1.png" alt="table" />
      {/* K */}
      <img className={clsx(classes.img, options['1.2'] === 'K' ? {} : classes.hidden)} src="/img/customization/management/3c-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'K' ? {} : classes.hidden)} src="/img/customization/management/3i-MATable-W1.png" alt="table" />
      {/* L */}
      <img className={clsx(classes.img, options['1.2'] === 'L' ? {} : classes.hidden)} src="/img/customization/management/3f-Table-W1.png" alt="table" />
      <img className={clsx(classes.img, options['1.2'] === 'L' ? {} : classes.hidden)} src="/img/customization/management/3i-MATable-W1.png" alt="table" />
      {/* 1.3 */}
      <img className={clsx(classes.img, options['1.3'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/4B.png" alt="Storage" zindex="5" />
      <img className={clsx(classes.img, options['1.3'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/4C.png" alt="Storage" zindex="5" />
      <img className={clsx(classes.img, options['1.3'] === 'D' ? {} : classes.hidden)} src="/img/customization/management/4D.png" alt="Storage" zindex="5" />
      <img className={clsx(classes.img, options['1.3'] === 'E' ? {} : classes.hidden)} src="/img/customization/management/4E.png" alt="Storage" zindex="5" />
      <img className={clsx(classes.img, options['1.3'] === 'F' ? {} : classes.hidden)} src="/img/customization/management/4F.png" alt="Storage" zindex="5" />
      <img className={clsx(classes.img, options['1.3'] === 'G' ? {} : classes.hidden)} src="/img/customization/management/4G.png" alt="Storage" zindex="5" />
      {/* 1.3.1 */}
      <img className={clsx(classes.img, options['1.3.1'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/5A.png" alt="Storage" zindex="6" />
      <img className={clsx(classes.img, options['1.3.1'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/5B.png" alt="Storage" zindex="6" />
      <img className={clsx(classes.img, options['1.3.1'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/5C.png" alt="Storage" zindex="6" />
      <img className={clsx(classes.img, options['1.3.1'] === 'D' ? {} : classes.hidden)} src="/img/customization/management/5D.png" alt="Storage" zindex="6" />
      {/* Monitor */}
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'A' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3A-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'B' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'C' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'D' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'E' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'F' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'G' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'H' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'I' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'J' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'K' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'L' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'A' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3A-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'B' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'C' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'D' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'E' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3E-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'F' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3E-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'G' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3H-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'H' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3H-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'I' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'J' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'K' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'A' && options['1.2'] === 'L' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3E-8b.png" alt="Monitor" />
      {/* WorkWall */}
      <img className={clsx(classes.img, options['1.6'] === 'B' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11b-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'B' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11b-8b.png" alt="Monitor" />
      {/* Bridge */}
      <img className={clsx(classes.img, options['1.6'] === 'C' && options['1.1'] === 'B' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11c-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'C' && options['1.1'] === 'B' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11c-8b.png" alt="Monitor" />
      {/* Desk position 2 */}
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'A' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'B' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'C' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'D' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'E' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'F' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'G' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3H-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'H' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3H-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'I' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'J' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'K' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'L' && options['1.5.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8a.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'A' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3A-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'B' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'C' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'D' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'E' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'F' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'G' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3H-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'H' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3H-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'I' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'J' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3B-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'K' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11a-3C-8b.png" alt="Monitor" />
      <img className={clsx(classes.img, options['1.6'] === 'D' && options['1.2'] === 'L' && options['1.5.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/11d-3E-8b.png" alt="Monitor" />
      {/* Secondary */}
      {/* 2.1 */}
      <img className={clsx(classes.img, options['2.1'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/18C-A.png" alt="Seating" />
      <img className={clsx(classes.img, options['2.1'] === 'D' ? {} : classes.hidden)} src="/img/customization/management/18D-A.png" alt="Seating" />
      <img className={clsx(classes.img, options['2.1'] === 'E' ? {} : classes.hidden)} src="/img/customization/management/18E-A.png" alt="Seating" />
      {/* 2.2 */}
      <img className={clsx(classes.img, options['2.2'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/19A-A.png" alt="Additional Storage" />
      <img className={clsx(classes.img, options['2.2'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/19B-A.png" alt="Additional Storage" />
      <img className={clsx(classes.img, options['2.2'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/19C-A.png" alt="Additional Storage" />
      <img className={clsx(classes.img, options['2.2'] === 'D' ? {} : classes.hidden)} src="/img/customization/management/19D-A.png" alt="Additional Storage" />
      {/* 2.3 */}
      <img className={clsx(classes.img, options['2.3'] === 'A' ? {} : classes.hidden)} src="/img/customization/management/20A.png" alt="Additional Storage" />
      <img className={clsx(classes.img, options['2.3'] === 'B' ? {} : classes.hidden)} src="/img/customization/management/20B.png" alt="Additional Storage" />
      <img className={clsx(classes.img, options['2.3'] === 'C' ? {} : classes.hidden)} src="/img/customization/management/20C.png" alt="Additional Storage" />
    </div>
  );
};

Canvas.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
};

export default Canvas;
