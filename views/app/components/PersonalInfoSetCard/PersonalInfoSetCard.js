/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import s from './PersonalInfoSetCard.scss'

class PersonalInfoSetCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let nickName = this.props.nickName;
        let name = this.props.name;
        let gender = this.props.gender;
        let mobile = this.props.mobile;
        let email = this.props.email;
        let birth = this.props.birth;
        let habit = this.props.habit;
        let good_at = this.props.good_at;

        return(
            <div>
                <TextField
                    id="nickName"
                    defaultValue={nickName}
                    fullWidth={true}
                /><br />
                <TextField
                    id="name"
                    defaultValue={name}
                    fullWidth={true}
                /><br />
                <TextField
                    id="gender"
                    defaultValue={gender}
                    fullWidth={true}
                /><br />
                <TextField
                    id="mobile"
                    defaultValue={mobile}
                    fullWidth={true}
                /><br />
                <TextField
                    id="email"
                    defaultValue={email}
                    fullWidth={true}
                /><br />
                <TextField
                    id="birth"
                    defaultValue={birth}
                    fullWidth={true}
                /><br />
                <TextField
                    id="habit"
                    defaultValue={habit}
                    fullWidth={true}
                /><br />
                <TextField
                    id="good_at"
                    defaultValue={good_at}
                    fullWidth={true}
                />
            </div>
        );
    }
}

export default PersonalInfoSetCard