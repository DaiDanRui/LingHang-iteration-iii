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
const tempStyle = {
  margin: '16px'
};



class MarketRewardCard extends Component {
    render(){
        return(
            <div>
                <Paper style={tempStyle}>
                    <div className={s.header}>
                        <Avatar src={require("../../icons/avatar1.png")} />
                        <p>title......</p>
                        <p>$ 70</p>
                    </div>
                    <Divider/>
                    <div>
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                        <img className={s.pic} src={require('../../icons/avatar1.png')} />
                    </div>
                    <Divider/>
                    <div className={s.footer}>
                        <p>chendanni</p>
                        <p>(3 天前)</p>
                        <CommentIcon />
                        <p>3</p>
                        <LikeIcon />
                        <p>2</p>

                    </div>
                </Paper>
            </div>
        );
    }
}

export default MarketRewardCard;