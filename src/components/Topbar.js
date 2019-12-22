/* eslint-disable react/forbid-prop-types */
import { Link as MaterialLink } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Menu from './Menu';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
  },
  inline: { display: 'inline' },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  link: { textDecoration: 'none', color: 'inherit' },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey.A100}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: { paddingTop: '1.5em' },
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: { paddingTop: '0.8em' },
  },
  iconContainer:
      { display: 'none', [theme.breakpoints.down('sm')]: { display: 'block' } },
  iconButton: { float: 'right' },
  tabContainer:
      { marginLeft: 32, [theme.breakpoints.down('sm')]: { display: 'none' } },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto',
    color: theme.palette.primary.dark,
  },
});

class Topbar extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      menuDrawer: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = (value) => {
    this.setState({ value });
  };


  mobileMenuOpen = () => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = () => {
    this.setState({ menuDrawer: false });
  }

  current = () => {
    const { currentPath } = this.props;
    if (currentPath === '/home') {
      return 0;
    }
    if (currentPath === '/about') {
      return 1;
    }
    if (currentPath === '/club') {
      return 2;
    }
    if (currentPath === '/signup') {
      return 3;
    }
    return 0;
  }

  render() {
    const { classes, noTabs, location } = this.props;
    const { value, menuDrawer } = this.state;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to="/" className={classes.link}>
                    {/* <img width={20} src={logo} alt="" /> */}
                    <span className={classes.tagline}>Columbia Club</span>
                  </Link>
                </Typography>
              </div>
              { !noTabs && (
                <>
                  <div className={classes.productLogo}>
                    <Typography>
                          NYC
                    </Typography>
                  </div>
                  <div className={classes.iconContainer}>
                    <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tabContainer}>
                    <SwipeableDrawer anchor="right" open={menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                      <AppBar title="Menu" />
                      <List>
                        {Menu.map((item) => (
                          <ListItem
                            component={item.external ? MaterialLink : Link}
                            href={item.external ? item.pathname : null}
                            to={item.external ? null : { pathname: item.pathname, search: location.search }}
                            button
                            key={item.label}
                          >
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </SwipeableDrawer>
                    <Tabs
                      value={this.current() || value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                      {Menu.map((item, index) => (
                        <Tab
                          // eslint-disable-next-line react/no-array-index-key
                          key={index}
                          component={item.external ? MaterialLink : Link}
                          href={item.external ? item.pathname : null}
                          to={item.external ? null : { pathname: item.pathname, search: location.search }}
                          classes={{ root: classes.tabItem }}
                          label={item.label}
                        />
                      ))}
                    </Tabs>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPath: PropTypes.string,
  noTabs: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

Topbar.defaultProps = {
  currentPath: '/',
  noTabs: false,
};

export default withRouter(withStyles(styles)(Topbar));
