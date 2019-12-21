import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';

const styles = theme => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomMargin: {
    marginBottom: theme.spacing(2)
  }
});

class InstructionDialog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BaseDialog {...this.props} >
        <div className={classes.bottomMargin}>
          <Typography variant="body2" gutterBottom>
            Sign up to receive more information about our ongoing product development, or send us an email for a private demo.
          </Typography>
        </div>
        <Button component={Link} to='/signup' className={classes.bottomMargin} variant='contained' onClick={this.handleClose} color="primary" autoFocus>
          Sign up
        </Button>
        <Button component={Link} to='mailto:' variant='contained' onClick={this.handleClose} color="primary" autoFocus>
          Email Us
        </Button>
      </BaseDialog>
    )
  }
}

export default withRouter(withStyles(styles)(InstructionDialog));
