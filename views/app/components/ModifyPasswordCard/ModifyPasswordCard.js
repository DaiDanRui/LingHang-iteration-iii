/**
 * Created by user on 16/10/25.
 */
/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


import s from './ModifyPasswordCard.scss'


class ModifyPasswordCard extends Component{
    render(){
        return(
            <div className={s.card}>
                <TextField
                    hintText="原密码"
                    type="password"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="新密码"
                    type="password"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="确认密码"
                    type="password"
                    fullWidth={true}
                /><br/>
                <Divider/>
                <RaisedButton label="确认修改" primary={true} fullWidth={true} />
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default ModifyPasswordCard