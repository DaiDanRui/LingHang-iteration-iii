/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';
import { Router, Route, Link } from 'react-router';

import s from './MyChoiceList.scss'

const itemStyle = {
    paddingLeft:'8px'
};

class MyChoiceList extends Component{
    render(){
        return(
            <div>
                <List>
                    <ListItem>
                        <div className={s.comment}>
                            <p>买家好评: 0%</p>
                            <p>卖家好评: 0%</p>
                        </div>
                    </ListItem>
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="我发布的"
                        rightIcon={<Right />}
                        href="/my_public"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="被接受的"
                        rightIcon={<Right />}
                        href="/my_accepted"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="我的收藏"
                        rightIcon={<Right />}
                        href="/my_stars"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="评价详情"
                        rightIcon={<Right />}
                        href="/my_comments"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="我的账户"
                        rightIcon={<Right />}
                        href="/my_account"
                    />
                    <Divider/>
                    <ListItem
                        style={itemStyle}
                        primaryText="设置"
                        rightIcon={<Right />}
                        href="/my_setting"
                    />
                    <Divider/>
                </List>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MyChoiceList