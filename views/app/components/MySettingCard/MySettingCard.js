/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';

import s from './MySettingCard.scss'

class MySettingCard extends Component{
    render(){
        return(
            <div>
                <List>
                    <ListItem
                        primaryText="账号设置"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="更改个人信息"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="主题设置"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
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