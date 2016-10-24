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


import s from './MarketPublicCard.scss'


class MarketPublicCard extends Component{
    render(){
        return(
            <div className={s.card}>
                <TextField
                    hintText="主题"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="简要描述"
                    multiLine={true}
                    fullWidth={true}
                    rows={4}
                /><br />
                <DatePicker
                    hintText="截止日期"
                    container="inline" />
                <TextField
                    hintText="价格"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="类型"
                    fullWidth={true}
                /><br/>
                <TextField
                    hintText="联系方式"
                    fullWidth={true}
                /><br/>
                <Divider/>
                <RaisedButton label="确认" primary={true} fullWidth={true} />
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MarketPublicCard