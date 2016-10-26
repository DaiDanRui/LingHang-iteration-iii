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
import IconButton from 'material-ui/IconButton';
import s from './MyAcceptedCard.scss'
const iconStyle = {
    color:"#868686",
    height:'20px',
    width:'20px'
};
const icon = {
    height:'30px',
    width:'30px'
};
const buttonStyle = {
    height:'30px',
    width:'30px',
    padding:'0'
};

class MyAcceptedCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let type = this.props.type;
        let currentType = this.props.currentType;
        let pic = this.props.pic;
        let title = this.props.title;
        let price = this.props.price;
        let time = this.props.time;
        let accepter = this.props.accepter;
        let accepterTitle = '';

        if(currentType != type)
            return null;
        if (type == 'skill')
            accepterTitle = '购买者';
        if (type == 'reward')
            accepterTitle = '接单人';

        return(
            <div>
                <Paper className={s.card}>

                    <div className={s.title}>
                        <p>{accepterTitle}: {accepter}</p>
                        <IconButton
                            iconStyle={icon}
                            style={buttonStyle}
                            href='/personal_info'>
                            <Right />
                        </IconButton>
                    </div>
                    <Divider/>

                    <div className={s.content}>
                        <img className={s.pic} src={pic} />
                        <div className={s.info}>
                            <p>{title}</p>
                            <p className={s.price}>¥ {price}</p>
                        </div>
                    </div>

                    <Divider/>

                    <div className={s.footer}>
                        <p>{time}</p>
                        <div className={s.action}>
                            <RefuseIcon
                                style={iconStyle}
                            />
                            <p>拒绝</p>
                            <DoneIcon
                                style={iconStyle}
                            />
                            <p>接受</p>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default MyAcceptedCard;