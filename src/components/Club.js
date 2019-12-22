import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Antitrademark from './club/Lorem';
import Topbar from './Topbar';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 20
  },
  grid: {
  }
})

class Club extends Component {

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Club);