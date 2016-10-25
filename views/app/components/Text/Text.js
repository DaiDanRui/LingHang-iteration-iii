/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import s from './Text.scss'

class Text extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let fullWidth = false;
        let title = this.props.title;
        let hintText = this.props.hintText;
        let defaultValue = this.props.defaultValue;
        fullWidth = this.props.fullWidth;
        return(
          <div className={s.text}>
              <p>{title}</p>
              <TextField
                  hintText={hintText}
                  defaultValue={defaultValue}
                  fullWidth={fullWidth}
              />
          </div>
        );
    }
}

export default Text;