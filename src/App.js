import './App.css';

// import {blueGrey} from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core/styles'
import {responsiveFontSizes} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import React, {Component} from 'react';

import Routes from './routes'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: {
      main: '#0849A3'
    },
    primary: {
      main: '#fff'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"montserrat"', '"roboto"', 'sans-serif'].join(',')
  }
}));


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
