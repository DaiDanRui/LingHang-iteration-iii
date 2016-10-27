/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import PublicChoiceBar from '../../components/PublicChoiceBar/PublicChoiceBar'
import MarketRewardCard from '../../components/MarketRewardCard/MarketRewardCard'
import {Tabs, Tab} from 'material-ui/Tabs';
import ContentAdd from 'material-ui/svg-icons/Content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SvgIcon from 'material-ui/SvgIcon';
import s from './Market.scss'


class Market extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'market',
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
                    <div className={s.poition}>
                        <Navigation/>
                    </div>

                    <div className={s.cards}>
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
                            type="market"
                            currentType={this.state.value}
                        />
                    </div>

                    <Tabs
                        className={s.footer}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab
                            label="市场" value="market" />
                        <Tab
                            href="/market_public"
                            icon={<ContentAdd/>} value="add"
                        />
                        <Tab
                            label="悬赏" value="reward"/>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Market