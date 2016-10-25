/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Text from '../../components/Text/Text'
import Divider from 'material-ui/Divider';

import s from './PersonalInfoSetCard.scss'

const buttonStyle = {
  marginTop:'10px'
};

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
        let hobby = this.props.hobby;
        let good_at = this.props.good_at;

        return(
            <div className={s.card}>
                <Text
                    title="昵称"
                    hintText="昵称"
                    defaultValue={nickName}
                    fullWidth={true}
                />
                <Text
                    title="姓名"
                    hintText="姓名"
                    defaultValue={name}
                    fullWidth={true}
                />
                <Text
                    title="性别"
                    hintText="性别"
                    defaultValue={gender}
                    fullWidth={true}
                />
                <Text
                    title="手机"
                    hintText="手机"
                    defaultValue={mobile}
                    fullWidth={true}
                />
                <Text
                    title="邮箱"
                    hintText="邮箱"
                    defaultValue={email}
                    fullWidth={true}
                />
                <Text
                    title="生日"
                    hintText="生日"
                    defaultValue={birth}
                    fullWidth={true}
                />
                <Text
                    title="爱好"
                    hintText="爱好"
                    defaultValue={hobby}
                    fullWidth={true}
                />
                <Text
                    title="擅长"
                    hintText="擅长"
                    defaultValue={good_at}
                    fullWidth={true}
                />
                <RaisedButton
                    style={buttonStyle}
                    label="确认修改" primary={true} fullWidth={true} />
            </div>
        );
    }
}

export default PersonalInfoSetCard