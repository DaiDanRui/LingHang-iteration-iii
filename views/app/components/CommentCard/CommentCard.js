/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import CommentItem from '../CommentItem/CommentItem'
import {List, ListItem} from 'material-ui/List';
import s from './CommentCard.scss'

class CommentCard extends Component {
    render(){
        return(
            <div>
                <Paper>
                    <div className={s.header}>
                        <Avatar src={require('../../icons/avatar1.png')}/>
                        <p>user1 for me</p>
                    </div>
                    <Divider/>
                    <div className={s.title}>
                        <p>title</p>
                        <p>$2</p>
                    </div>
                    <div className={s.detail}>
                        <CommentItem
                            title="语言表达"
                            stars="2"
                            half_star="1"
                        />
                        <CommentItem
                            title="耐心"
                            stars="2"
                            half_star="1"
                        />
                        <CommentItem
                            title="总体"
                            stars="2"
                            half_star="1"
                        />
                    </div>
                    <Divider/>
                    <div className={s.footer}>
                        <p>2016-10-01</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default CommentCard;