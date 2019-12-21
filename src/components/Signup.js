import React,  { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Back from './Back';

const numeral = require('numeral');
numeral.defaultFormat('0');

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    width: "100%",
    background: "url(background.jpg) no-repeat",
    backgroundSize: 'cover',
    padding: 10,
    paddingBottom: 800
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: '100%'
  },
  bigContainer: {
    width: '90%'
  },
  logo: {
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'center'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepGrid: {
    width: '80%'
  },
  buttonBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: theme.palette.primary
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42
  },
  formControl: {
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
})

const getSteps = () => {
  return [
    'Name',
    'Email',
    'Go'
  ];
}

class Signup extends Component {

  state = {
    activeStep: 0,
    email: '',
    name: '',
    termsChecked: false,
    loading: true,
    labelWidth: 0
  }

  componentDidMount() {

  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if(this.state.activeStep === 2) {
      setTimeout(() => this.props.history.push('/'), 5000)
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    if(this.state.activeStep === 0) {
      return 'Next';
    }
    if(this.state.activeStep === 1) {
      return 'Next';
    }
    if(this.state.activeStep === 2) {
      return 'Accept';
    }
    return 'Next';
  }

  render() {

    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, loading } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Back />
          <Grid container justify="center">
            <Grid alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                {/*<div className={classes.logo}>
                  <img width={100} height={100} src={logo} alt="" />
                </div>*/}
                <div className={classes.stepContainer}>
                  <div className={classes.stepGrid}>
                    <Stepper classes={{root: classes.stepper}} activeStep={activeStep} alternativeLabel>
                      {steps.map(label => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </div>
                  { activeStep === 0 && (
                  <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                          <div style={{ marginBottom: 32 }}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                              Name
                          </Typography>
                            <Typography variant="body1" gutterBottom>
                              Please enter your Name
                          </Typography>
                          </div>
                          <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <OutlinedInput value={this.state.name}
                                onChange={this.handleChange}
                                id="name" name="name" type="text" required placeholder="Enter your Name..." autoComplete="name" />
                            </FormControl>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                  { activeStep === 1 && (
                  <div className={classes.smallContainer}>
                      <Paper className={classes.paper}>
                        <div>
                          <div style={{ marginBottom: 32 }}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                              Email Address
                          </Typography>
                            <Typography variant="body1" gutterBottom>
                              Please enter your preferred contact address
                          </Typography>
                          </div>
                          <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <OutlinedInput value={this.state.email}
                                onChange={this.handleChange}
                                id="email" name="email" type="email" required placeholder="Enter your email address..." autoComplete="email" />
                            </FormControl>
                          </div>
                        </div>
                      </Paper>
                    </div>
                  )}
                  { activeStep === 2 && (
                  <div className={classes.smallContainer}>
                    <Paper className={classes.paper}>
                      <div>
                        <div style={{marginBottom: 32}}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }} gutterBottom>
                            Permissions
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            We utilize MailChimp for our marketing. Clicking Submit below will redirect you to their site to finish subscribing. 
                          </Typography>
                          <Typography variant="body1" color='secondary' gutterBottom>
                              Please see our privacy policy for more information about what data we collect.
                          </Typography>
                        </div>
                      </div>
                    </Paper>
                    </div>
                  )}
                  { activeStep === 3 && (
                  <div className={classes.bigContainer}>
                    <Paper className={classes.paper}>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: 380, textAlign: 'center'}}>
                          <div style={{marginBottom: 32}}>
                            <Typography variant="h6" style={{fontWeight: 'bold'}} gutterBottom>
                              Collecting your data
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              We are processing your request
                            </Typography>
                          </div>
                          <div>
                            <Fade
                              in={loading}
                              style={{
                                transitionDelay: loading ? '800ms' : '0ms',
                              }}
                              unmountOnExit
                            >
                              <CircularProgress style={{marginBottom: 32, width: 100, height: 100}} />
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </Paper>
                    </div>
                  )}
                  { activeStep !== 3 && (
                     <div className={classes.buttonBar}>
                       <Button
                       disabled={activeStep === 0}
                       onClick={this.handleBack}
                       className={classes.backButton}
                       size='large'
                       >
                         Back
                       </Button>
                     { activeStep === 0 ? (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={this.handleNext}
                          size='large'
                          style={this.state.name.length ? { background: classes.button, color: 'white' } : {}}
                          disabled={!this.state.name.length}
                        >
                          {this.stepActions()}
                        </Button>
                     ): (activeStep === 1 ? (
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.handleNext}
                            size='large'
                            style={this.state.email.length ? { background: classes.button, color: 'white' } : {}}
                            disabled={!this.state.email.length}
                          >
                            {this.stepActions()}
                          </Button>
                     ) : (
                        <Button
                          variant="contained"
                          color="secondary"
                          component={Link}
                          to="/"
                          style={{ background: classes.button, color: 'white' }}
                          size='large'
                        >
                          Submit
                       </Button>
                     ))}
                   </div>
                  )}

                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Signup))
