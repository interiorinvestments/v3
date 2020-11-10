/* eslint-disable max-len */
import {
  Box, Button, Grid, makeStyles, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(2),
  },
  img: {
    marginTop: theme.spacing(2),
    width: '415px',
    height: '287px',
  },
}));

const Overview = ({ onBack, onNext }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} lg={5}>
          <Typography variant="subtitle1">
            Choices for you to make in your office:
          </Typography>
          <Typography variant="body2" color="textPrimary">
            <strong>A. Primary Work Area</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Desk Size and Configuration
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Storage at Desk Area
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Desk Chair
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Technology Configuration
          </Typography>
          <Typography variant="body2" color="textPrimary">
            <strong>B. Secondary Work Area</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Storage, Lounge Seating & Other
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - Seating Selections
          </Typography>
          <Typography variant="body2" color="textPrimary" gutterBottom>
            <strong>C. Finishes</strong>
          </Typography>
          <Box my={2}>
            <Typography variant="subtitle1">
              Architectural Framework:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              1. Wall-mounted light fixture - directs light at ceiling to reduce glare within office (supplemented by additional ceiling lights)
            </Typography>
            <Typography variant="body2" color="textSecondary">
              2. Frosted glass door & sidelight - provides privacy within office and light to interior corridor
            </Typography>
            <Typography variant="body2" color="textSecondary">
              3. Painted wall finish - soft white color
            </Typography>
            <Typography variant="body2" color="textSecondary">
              4. Wood floor - dark color, walnut wood
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              5. Floor box - provides power, voice, data connections at table desk
              Note solar shades included in office, not shown in image
            </Typography>
          </Box>
          <Typography variant="subtitle1">
            Furniture Framework:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            6. Structural &quot;workwall&quot; - in light color anigre&apos; wood finish, a variety of storage choices can be hung off the workwall
          </Typography>
          <Typography variant="body2" color="textSecondary">
            7. Storage/wardrobe cabinet - space for long & short garments, shoes, (2) file drawers, additional shelving
          </Typography>
          <Typography variant="body2" color="textSecondary">
            8. Storage cabinet - 2 shelves at interior OR location for your refrigerator
          </Typography>
          <Typography variant="body2" color="textSecondary">
            9. Equipment cabinet - pull-out shelf for printer at bottom & pull-out shelf for port replicator (or general storage) at top
          </Typography>
          <Typography variant="body2" color="textSecondary">
            10. File/storage unit - 6&quot; high drawer & file drawer with lock
          </Typography>
          <Typography variant="body2" color="textSecondary">
            11. Work tool rail integrated in wood panels, additional trays, stackers, etc. may be hung off of tool rail
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
          <img className={classes.img} src="/img/customization/management/UniversalWorkwall-A-NESW.png" alt="floor plan" />
        </Grid>

      </Grid>
      <div className={classes.buttons}>
        <Button onClick={onBack}>Back</Button>
        <Button color="primary" variant="contained" onClick={onNext}>Next</Button>
      </div>
    </>
  );
};

Overview.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Overview;
