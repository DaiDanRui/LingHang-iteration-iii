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
    constructor(props){
        super(props);
    }
    render(){
        let avatar = this.props.avatar;
        let name = this.props.username;
        let title = this.props.title;
        let price = this.props.price;
        let lan_star = this.props.lanStar;
        let p_star = this.props.pStar;
        let totalStar = this.props.totalStar;
        let time = this.props.time;
        let type = this.props.type;
        let currentType = this.props.currentType;

        if (type != currentType)
            return null;

        return(
            <div>
                <Paper className={s.card}>

                    <div className={s.header}>
                        <Avatar
                            size={34}
                            src={avatar}/>
                        <p>{name} for me</p>
                    </div>

                    <Divider/>
                    <div className={s.title}>
                        <p className={s.name}>{title}</p>
                        <p className={s.price}>¥ {price}</p>
                    </div>
                    <div className={s.detail}>
                        <CommentItem
                            className={s.comment}
                            title="语言表达"
                            stars={lan_star}
                        />
                        <CommentItem
                            title="耐心细心"
                            stars={p_star}
                        />
                        <CommentItem
                            title="总体评价"
                            stars={totalStar}
                        />
                    </div>
                    <Divider/>
                    <div className={s.footer}>
                        <p>{time}</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default CommentCard;