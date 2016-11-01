/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Router, Route, Link } from 'react-router';
import $ from 'jquery'

import FlatButton from 'material-ui/FlatButton';

import s from './LoginCard.scss'


const buttonStyle = {
    marginTop: '14px'
};

class LoginCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userNameError: '',
            passwordError: ''
        }
    }

    handleSubmit() {
        let username = this.refs.username.input.value;
        let password = this.refs.password.input.value;

        let url = 'http://115.29.138.254/login/'+username+'/'+password;

        $.ajax(url, {type: 'get', dataType: 'json'})
            .done((message) => {
                console.log(message.result);
                switch (message.result) {
                    case 'success':
                        window.location.href='/market';
                        break;
                    case 'fail':
                        console.log('login fail!');
                        break;
                }
            })
    }

    render(){
        return(
            <Paper className={s.card}>
                <p className={s.cardTitle}>Welcome :D</p>
                <TextField
                    fullWidth={true}
                    ref="username"
                    hintText="username"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    ref="password"
                    hintText="password"
                /><br />
                <RaisedButton
                    label="LOGIN"
                    style={buttonStyle}
                    primary={true}
                    fullWidth={true}
                    onTouchTap={this.handleSubmit.bind(this)}
                />
                <RaisedButton label="SIGN UP" href="/register" style={buttonStyle} fullWidth={true} />
                <div className={s.forget}>
                    <Link className={s.link} to="/forget_password">忘记密码? -></Link>
                </div>
            </Paper>
        );
    }
}
// export default withStyles(LoginCard,s);
export default LoginCard