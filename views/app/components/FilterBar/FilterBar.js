/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import ActionClock from 'material-ui/svg-icons/Action/schedule';
import Money from 'material-ui/svg-icons/Editor/attach-money';
import Types from 'material-ui/svg-icons/AV/library-books';


import s from './FilterBar.scss';

const clockIcon = <ActionClock />;
const moneyIcon = <Money />;
const typesIcon = <Types />;


class FilterBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            typeOpen: false,
            timeOpen: false,
            priceOpen: false,
            selectedIndex: 0
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleTypeToggle = this.handleTypeToggle.bind(this);
        this.handleTimeToggle = this.handleTimeToggle.bind(this);
        this.handlePriceToggle = this.handlePriceToggle.bind(this);
    }

    handleTypeToggle(){
        this.setState({typeOpen: !this.state.typeOpen});
    }
    handleTimeToggle(){
        this.setState({timeOpen: !this.state.timeOpen});
    }
    handlePriceToggle(){
        this.setState({priceOpen: !this.state.priceOpen});
    }

    handleClose(){
        this.setState({
            typeOpen: false,
            timeOpen: false,
            priceOpen: false
        });
    }

    render(){
        return(
            <div>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            icon={typesIcon}
                            onTouchTap={this.handleTypeToggle}
                        />
                        <BottomNavigationItem
                            icon={clockIcon}
                            onTouchTap={this.handleTimeToggle}
                        />
                        <BottomNavigationItem
                            icon={moneyIcon}
                            onTouchTap={this.handlePriceToggle}
                        />
                    </BottomNavigation>
                </Paper>

                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.typeOpen}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>理工</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>文史哲</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>计算机</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>音乐</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>绘画</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>体育</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>舞蹈</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>语言</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>娱乐</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>其他</MenuItem>
                </Drawer>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.timeOpen}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>时间最远</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>时间最近</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>3天内</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>7天内</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>一个月内</MenuItem>
                </Drawer>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.priceOpen}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>从高到低</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>从低到高</MenuItem>
                </Drawer>
            </div>

        );
    }
}

export default FilterBar;