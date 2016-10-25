/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import DoneIcon from 'material-ui/svg-icons/Action/done';
import RefuseIcon from 'material-ui/svg-icons/Content/clear';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right'
import {List, ListItem} from 'material-ui/List';
import s from './MyAcceptedSkillCard.scss'

class MyAcceptedSkillCard extends Component {
    render(){
        return(
            <div>
                <Paper>
                    <ListItem
                        primaryText="购买者: user1"
                        rightIcon={<Right />}
                    />
                    <div className={s.content}>
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                        <div className={s.info}>
                            <p>标题。。。。</p>
                            <p>$1</p>
                        </div>
                    </div>
                    <div className={s.footer}>
                        <p>2016-10-01</p>
                        <RefuseIcon />
                        <p>拒绝</p>
                        <DoneIcon />
                        <p>接受</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default MyAcceptedSkillCard;