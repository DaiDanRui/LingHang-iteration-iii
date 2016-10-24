/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


import s from './RegisterCard.scss'

const buttonStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

class RegisterCard extends Component{
    render(){
        return(
            <Paper className={s.card}>
                <p>欢迎加入</p>
                <TextField
                    fullWidth={true}
                    hintText="姓名"
                /><br />
                <TextField
                    fullWidth={true}
                    hintText="手机"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="密码"
                /><br />
                <TextField
                    fullWidth={true}
                    type="password"
                    hintText="再次输入"
                /><br />
                <RaisedButton
                    primary={true}
                    label="SIGN UP"
                    style={buttonStyle}
                    fullWidth={true} />
            </Paper>

        );
    }
}
// export default withStyles(LoginCard,s);
export default RegisterCard