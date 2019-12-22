/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { products } from '../club/AllProducts';

import BaseDialog from './BaseDialog';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = (theme) => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stepsContainer: {
    marginLeft: 72,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 40,
    height: 65,
  },
  bottomMargin: {
    marginBottom: theme.spacing(2),
  },
});

class SwipeDialog extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
    };
  }

handleNext = () => {
  this.setState((prevState) => ({
    activeStep: prevState.activeStep + 1,
  }));
};

handleBack = () => {
  this.setState((prevState) => ({
    activeStep: prevState.activeStep - 1,
  }));
};

handleStepChange = (activeStep) => {
  this.setState({ activeStep });
};

render() {
  const { classes } = this.props;
  const maxSteps = products.length;
  const { activeStep } = this.state;
  return (
    <BaseDialog {...this.props}>
      <div className={classes.container}>
        <div className={classes.gutterBottom}>
          {
          /* <img width={100} src={logo} alt="" /> */}
        </div>
        <div>
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {products.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath} alt={step.label} />)
                  : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={(
              <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
              </Button>
              )}
            backButton={(
              <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                  Back
              </Button>
              )}
          />
        </div>
        <div className={classes.stepsContainer}>
          <Typography style={{ textTransform: 'uppercase' }} color="secondary" gutterBottom>
            {products[activeStep].label}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {products[activeStep].description}
          </Typography>
        </div>
        <div>
          <Button component={Link} to="/club" variant="contained" onClick={this.handleClose} color="primary" autoFocus>
                The Club
          </Button>
        </div>
      </div>
    </BaseDialog>
  );
}
}

SwipeDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
};

SwipeDialog.defaultProps = {
  children: [],
};

export default withRouter(withStyles(styles)(SwipeDialog));
