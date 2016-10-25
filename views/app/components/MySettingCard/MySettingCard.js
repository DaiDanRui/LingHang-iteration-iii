/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';

import s from './MySettingCard.scss'

const itemStyle = {
    paddingLeft:'8px'
};

class MySettingCard extends Component{
    render(){
        return(
            <div>
                <List>
                    <ListItem
                        style={itemStyle}
                        primaryText="账号设置"
                        rightIcon={<Right />}
                        href="/account_setting"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="更改个人信息"
                        rightIcon={<Right />}
                        href="/personal_info_set"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="主题设置"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="关于我们"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                </List>
            </div>
        );
    }
}

export default MySettingCard