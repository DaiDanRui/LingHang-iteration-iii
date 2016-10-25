/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import CommentIcon from 'material-ui/svg-icons/Communication/comment';
import LikeIcon from 'material-ui/svg-icons/Action/favorite-border';
import DeleteIcon from 'material-ui/svg-icons/Action/delete';
import EditorIcon from 'material-ui/svg-icons/Content/create';

import s from './MyPublicCard.scss'

class MyPublicCard extends Component {
    render(){
        return(
            <div>
                <Paper>
                    <div className={s.header}>
                        <p>skill/reward name</p>
                        <p>$2</p>
                    </div>
                    <div>
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                    </div>
                    <div className={s.footer}>
                        <p>剩余 3 天</p>
                        <CommentIcon />
                        <p>3</p>
                        <LikeIcon />
                        <p>2</p>
                        <DeleteIcon />
                        <p>删除</p>
                        <EditorIcon />
                        <p>编辑</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default MyPublicCard;