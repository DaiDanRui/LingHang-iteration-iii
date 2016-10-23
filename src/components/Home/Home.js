/**
 * Created by raychen on 16/8/31.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss'

import RaisedButton from 'material-ui/RadioButton'

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  render() {
    console.log('render HomePage');
    return (
      <div>
        <div className="test">
          Hello world!
        </div>
        <RaisedButton label="Primary" primary={true}/>
      </div>
    );
  }
}

export default Home;
