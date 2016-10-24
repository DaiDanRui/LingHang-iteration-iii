/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';

import s from './LoginCard.scss'


const buttonStyle = {
    marginTop: '14px'
};

class LoginCard extends Component{
    render(){
        return(
            <Paper className={s.card}>
                <p className={s.cardTitle}>Welcome :D</p>
                <TextField
                    fullWidth={true}
                    hintText="username"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="password"
                /><br />
                <RaisedButton
                    label="LOGIN"
                    style={buttonStyle}
                    primary={true}
                    fullWidth={true} />
                <RaisedButton label="SIGN UP" style={buttonStyle} fullWidth={true} />
                <p>忘记密码?</p>
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default LoginCard