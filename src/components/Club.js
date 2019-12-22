/* eslint-disable react/forbid-prop-types */
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';

import Antitrademark from './club/Lorem';
import Footer from './Footer';
import SectionHeader from './SectionHeader';
import Topbar from './Topbar';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey.A500,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 20,
  },
  grid: {
  },
});

const Club = (props) => {
  const { classes, location } = props;
  const currentPath = location.pathname;

  return (
    <>
      <CssBaseline />
      <Topbar currentPath={currentPath} />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
            <Grid item xs={12}>
              <SectionHeader title="Club" subtitle="About the club." />
              <Antitrademark />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

Club.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Club);
