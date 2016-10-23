/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';

import s from './RankCard.scss'

class RankCard extends Component{
    render(){
        let ava1 = require('../../assets/1.jpg');
        let ava2 = require('../../assets/3.jpg');
        return (
            <Paper className={s.container}>
                <List>
                    <Subheader>Today's ranking</Subheader>
                    <ListItem
                        primaryText="raychen"
                        leftAvatar={<Avatar src={ava1} />}
                    />
                    <ListItem
                        primaryText="cdn"
                        leftAvatar={<Avatar src={ava2} />}
                    />
                </List>
            </Paper>
        );
    }
}

export default RankCard