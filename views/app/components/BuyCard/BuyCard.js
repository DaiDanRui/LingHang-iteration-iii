/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';


import s from './BuyCard.scss'

class BuyCard extends Component {
    render(){
        return(
            <div>
                <Divider/>
                <div className={s.header}>
                    <Avatar src={require("../../icons/avatar1.png")} />
                    <p>user1</p>
                </div>
                <Divider/>
                <div className={s.description}>
                    <img
                        className={s.pic}
                        src={require('../../icons/avatar1.png')} />
                    <p>文字介绍。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
                </div>
                <Divider/>
            </div>
        );
    }
}

export default BuyCard;