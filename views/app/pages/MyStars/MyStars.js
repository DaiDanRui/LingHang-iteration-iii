/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MarketRewardCard from '../../components/MarketRewardCard/MarketRewardCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import {Tabs, Tab} from 'material-ui/Tabs';

import s from './MyStars.scss'

class MyStars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'skill',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.setState({
            value: value,
        });
    };
    render(){

        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="我的收藏"
                        href="/my"
                    />
                    <div className={s.stars}>
                        <MarketRewardCard
                            avatar={require('../../icons/avatar1.png')}
                            title="c++上册"
                            price="10"
                            pic1={require('../../icons/avatar1.png')}
                            pic2={require('../../icons/avatar1.png')}
                            pic3={require('../../icons/avatar1.png')}
                            author="cr"
                            days="3"
                            comments="3"
                            stars="2"
                            type="skill"
                            currentType={this.state.value}
                        />
                        <MarketRewardCard
                            avatar={require('../../icons/avatar1.png')}
                            title="来教c++的。。"
                            price="10"
                            pic1={require('../../icons/avatar1.png')}
                            pic2={require('../../icons/avatar1.png')}
                            pic3={require('../../icons/avatar1.png')}
                            author="cr"
                            days="3"
                            comments="3"
                            stars="2"
                            type="reward"
                            currentType={this.state.value}
                        />
                    </div>

                    <div className={s.footer}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <Tab label="技能" value="skill" />
                            <Tab label="悬赏" value="reward"/>
                        </Tabs>
                    </div>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyStars