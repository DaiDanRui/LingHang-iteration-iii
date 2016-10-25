/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CommentIcon from 'material-ui/svg-icons/Communication/comment';
import LikeIcon from 'material-ui/svg-icons/Action/favorite-border';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';

import s from './SkillInfoCard.scss'


class SkillInfoCard extends Component{
    render(){
        return(
            <card>
                <CardHeader
                    title="c++入门"
                    subtitle="from chenrui"
                    avatar={require("../../icons/avatar1.png")}
                />
                <CardText>
                    真的可以一小时初步入门,周末有空
                </CardText>
                <CardMedia>
                    <img src={require("../../icons/avatar1.png")} />
                    <img src={require("../../icons/avatar1.png")} />
                </CardMedia>

                <div className={s.footer}>
                    <Divider/>
                    <CommentIcon />
                    <p>3</p>
                    <LikeIcon />
                    <p>2</p>
                    <Divider/>
                </div>

                <div>
                    <Divider/>
                    <div className={s.comment_avatar}>
                        <Avatar
                            size={40}
                            src={require('../../icons/avatar1.png')}/>
                        <div className={s.comment_info}>
                            <p>user1</p>
                            <p>3 天前</p>
                        </div>
                    </div>
                    <p>还不错,先收藏</p>
                </div>
                <div>
                    <Divider/>
                    <div className={s.comment_avatar}>
                        <Avatar
                            size={40}
                            src={require('../../icons/avatar1.png')}/>
                        <div className={s.comment_info}>
                            <p>user1</p>
                            <p>3 天前</p>
                        </div>
                    </div>
                    <p>还不错,先收藏</p>
                </div>

                <Toolbar>
                    <FlatButton label="留言" primary={true} />
                    <FlatButton label="收藏" primary={true} />
                    <FlatButton label="我要买" primary={true} />
                </Toolbar>

            </card>
        );
    }
}

// export default withStyles(LoginCard,s);
export default SkillInfoCard