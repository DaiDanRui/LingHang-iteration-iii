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

const iconStyle = {
    color:"#868686",
    height:'20px',
    width:'20px'
};

class MyPublicCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let type = this.props.type;
        let currentType = this.props.currentType;
        let title = this.props.title;
        let price = this.props.price;
        let pic1 = this.props.picOne;
        let pic2 = this.props.picTwo;
        let pic3 = this.props.picThree;
        let days = this.props.days;
        let comments = this.props.comments;
        let stars = this.props.stars;


        if (type != currentType){
            return null;
        }


        return(
            <div>
                <Paper className={s.card}>
                    <div className={s.title}>
                        <p>{title}</p>
                        <p className={s.price}>¥ {price}</p>
                    </div>
                    <div className={s.pics}>
                        <img className={s.pic} src={pic1} />
                        <img className={s.pic} src={pic2} />
                        <img className={s.pic} src={pic3} />
                    </div>
                    <div className={s.footer}>
                        <p>剩余 {days} 天</p>
                        <div className={s.info}>
                            <CommentIcon
                                style={iconStyle}
                            />
                            <p>{comments}</p>
                            <LikeIcon
                                style={iconStyle}
                            />
                            <p>{stars}</p>
                            <DeleteIcon
                                style={iconStyle}
                            />
                            <p>删除</p>
                            <EditorIcon
                                style={iconStyle}
                            />
                            <p>编辑</p>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default MyPublicCard;