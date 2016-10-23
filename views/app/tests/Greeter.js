//Greeter,js
import React, {Component} from 'react'
import config from '../config.json';
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';

class Greeter extends Component{
  render() {
    return (
        <MuiThemeProvider>
          <RaisedButton label="Default"/>
        </MuiThemeProvider>
    );
  }
}

export default Greeter
