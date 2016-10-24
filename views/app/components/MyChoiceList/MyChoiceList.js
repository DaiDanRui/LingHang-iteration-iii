/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import Divider from 'material-ui/Divider';

import s from './MyChoiceList.scss'

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
                        primaryText="我发布的"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="被接受的"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="我的收藏"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="评价详情"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="我的账户"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                    <ListItem
                        primaryText="设置"
                        rightIcon={<Right />}
                    />
                    <Divider/>
                </List>
            </div>
        );
    }
}

// export default withStyles(LoginCard,s);
export default MyChoiceList