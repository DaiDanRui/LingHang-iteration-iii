/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';

import s from './PersonalInfoCard.scss'

class PersonalInfoCard extends Component{
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
                <div className={s.comment}>
                    <p>买家好评: 0%</p>
                    <p>卖家好评: 0%</p>
                </div>
                <p>昵称: {nickName}</p>
                <Divider/>
                <p>姓名: {name}</p>
                <Divider/>
                <p>性别: {gender}</p>
                <Divider/>
                <p>手机: {mobile}</p>
                <Divider/>
                <p>邮箱: {email}</p>
                <Divider/>
                <p>生日: {birth}</p>
                <Divider/>
                <p>爱好: {habit}</p>
                <Divider/>
                <p>擅长: {good_at}</p>
                <Divider/>
            </div>
        );
    }
}

export default PersonalInfoCard