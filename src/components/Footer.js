/* eslint-disable react/forbid-prop-types */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const styles = (theme) => ({
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
  },
  flex: {
    display: 'flex',
    padding: 5,
    margin: 'auto',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  link: { textDecoration: 'none', color: 'inherit' },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey.A100}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: { paddingTop: '1.5em' },
  },
});

const Footer = (props) => {
  const { classes } = props;
  return (
    <div
      position="absolute"
      color="default"
      className={classes.footer}
    >
      {' '}
      <Grid item xs={12} className={classes.flex}>
        <Typography variant="body1" color="inherit" noWrap>
          <Link to="/" className={classes.link}>
            {
        /* <img width={20} src={logo} alt="" /> */}
            <span>
              CCNY
            </span>
          </Link>
        </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          <span>© 2019</span>
        </Typography>
        <Typography variant="body1" color="inherit" noWrap>
          <span>columbiaclub.nyc</span>
        </Typography>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Footer));
