/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';

import s from './AccountSettingCard.scss'

const itemStyle = {
    paddingLeft:'8px'
};


class AccountSettingCard extends Component{
    render(){
        return(
            <div>
                <List>
                    <ListItem
                        style={itemStyle}
                        primaryText="修改密码"
                        rightIcon={<Right />}
                        href="modify_password"
                    />
                    <Divider/>
                </List>
            </div>
        );
    }
}

export default AccountSettingCard