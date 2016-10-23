/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import s from './FriendCard.scss'
import {greenDark2} from '../../config'

const menuStyle = {
    backgroundColor: greenDark2
};

class FriendCard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            openMenu: false
        };
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
    }

    handleOpenMenu() {
        this.setState({
            openMenu: true
        });
    };

    handleOnRequestChange (value) {
        this.setState({
            openMenu: value
        });
    }

    render(){
        return (
            <div className={s.backImg}>
                <Paper className={s.container}>
                    <Badge
                        className={s.badge}
                        badgeContent={4}
                        primary={true}
                    >
                        <Avatar size={50} src={require('../../assets/7.jpg')} />
                    </Badge>
                    <div className={s.name}> raychen </div>
                    <div className={s.steps}>
                        <div>日均步数</div>
                        <div>12345</div>
                    </div>
                    <IconMenu
                        menuStyle={menuStyle}
                        className={s.menu}
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        open={this.state.openMenu}
                        onRequestChange={this.handleOnRequestChange}
                    >
                        <MenuItem value="1" primaryText="删除好友" />
                        <MenuItem value="2" primaryText="查看详情" />
                    </IconMenu>
                </Paper>
            </div>
        );
    }
}

export default FriendCard;