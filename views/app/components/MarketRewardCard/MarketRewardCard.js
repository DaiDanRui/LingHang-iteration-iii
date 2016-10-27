/**
 * Created by chendanni on 16/10/24.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import CommentIcon from 'material-ui/svg-icons/Communication/comment';
import LikeIcon from 'material-ui/svg-icons/Action/favorite-border';


import s from './MarketRewardCard.scss'

const iconStyle = {
    color:"#868686",
    height:'20px',
    width:'20px'
};

class MarketRewardCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let avatar = this.props.avatar;
        let title = this.props.title;
        let price = this.props.price;
        let pic1 = this.props.picOne;
        let pic2 = this.props.picTwo;
        let pic3 = this.props.picThree;
        let author = this.props.author;
        let days = this.props.days;
        let comments = this.props.comments;
        let stars = this.props.stars;
        let type = this.props.type;
        let currentType = this.props.currentType;

        if (type != currentType)
            return null;

        return(
            <div>
                <Paper
                    className={s.card}>
                    <div className={s.header}>
                        <div className={s.hin}>
                            <Avatar
                                size={34}
                                src={avatar} />
                            <p>{title}</p>
                        </div>
                        <p className={s.price}>¥ {price}</p>
                    </div>
                    <Divider/>
                    <div className={s.pics}>
                        <img className={s.pic} src={pic1} />
                        <img className={s.pic} src={pic2} />
                        <img className={s.pic} src={pic3} />
                    </div>
                    <Divider/>
                    <div className={s.footer}>
                        <div className={s.days}>
                            <p>{author}</p>
                            <p>({days} 天前)</p>
                        </div>

                        <div className={s.info}>
                            <CommentIcon
                                style={iconStyle}
                            />
                            <p>{comments}</p>
                            <LikeIcon
                                style={iconStyle}
                            />
                            <p>{stars}</p>
                        </div>


                    </div>
                </Paper>
            </div>
        );
    }
}

export default MarketRewardCard;