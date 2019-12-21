import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import React, {Component} from 'react';

import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Topbar from './Topbar';
import Footer from './Footer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    background: "url(background.jpg) no-repeat",
    backgroundSize: 'cover'
  },
  grid: {
    marginTop: 10,
    padding:0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paperMain: {
    minHeight: "60vh",
    width: "100%",
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, .1)"
  },
  paper: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.secondary.dark,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .4)"
  },
  paperDark: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .8)"
  },
  mainTitle: {
    color: theme.palette.secondary.dark
  },
  title: {
    color: theme.palette.secondary.light
  },
  titleDark: {
    color: theme.palette.secondary.dark
  },
  titleLight: {
    color: theme.palette.primary.light
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    margin: "auto",
    maxWidth: 1000
  },
  boxMain: {
    width: "100%",
    minHeight: 300,
    margin: "auto",
    textAlign: "center",
    maxWidth: 1000
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

class Main extends Component {

  state = {
    aboutUsDialog: false,
    clubDialog: false,
    contactDialog: false
  };

  componentDidMount() {}

  openAboutUsDialog = (event) => {
    this.setState({ aboutUsDialog: true});
  }

  openClubDialog = (event) => {
    this.setState({ clubDialog: true });
  }

  openContactDialog = (event) => {
    this.setState({ contactDialog: true });
  }

  dialogClose = (event) => {
    this.setState({ aboutUsDialog: false,
                    clubDialog: false,
                    contactDialog: false
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
              <Grid item xs={12}>
                <Paper className={classes.paperMain}>
                  <div className={classes.boxMain}>
                    <Typography style={{fontWeight: "bold"}} variant="h2" className={classes.mainTitle} gutterBottom>

                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperDark}>
                <div className={classes.box}>
                  <Typography variant="h6" className={classes.title} gutterBottom>
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button onClick={this.openClubDialog} color="secondary" variant="contained" className={classes.actionButtom}>
                    Club
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h6" className={classes.titleLight} gutterBottom>
                    Duis aute irure
                  </Typography>
                  <Typography variant="body1" gutterBottom color="primary">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button color='primary' variant="outlined" className={classes.actionButtom} component={Link} to="about">
                    About Us
                  </Button>
                  <Button onClick={this.openContactDialog} color='secondary' variant="contained" className={classes.actionButtom}>
                    Contact
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.clubDialog}
            onClose={this.dialogClose} />
          <InstructionDialog
            open={this.state.contactDialog}
            onClose={this.dialogClose}
          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));
