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
import $ from 'jquery'

const fakeData = [
    {
        id: 1,
        avatar: require('../../icons/avatar1.png'),
        title: "c++上册",
        price: 10,
        pic_paths: [require('../../icons/avatar1.png')],
        name: "cr",
        message_number: 3,
        praise_number: 2,
        type: 0,
        publish_time: 3,
        currentType: 'market'
    },
    {
        id: 2,
        avatar: require('../../icons/avatar1.png'),
        title: "c++上册",
        price: 10,
        pic_paths: [require('../../icons/avatar1.png')],
        name: "cr",
        message_number: 3,
        praise_number: 2,
        type: 0,
        publish_time: 3,
        currentType: 'market'
    }
];

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

    fetchListData(){
        let url = 'http://115.29.138.254/search/all/1/null/id/asc/-1/0/sports'+username+'/'+password;
    }

    renderCards(){
        let data = fakeData;
        let cards = fakeData.map(item => {
           return (
               <MarketRewardCard
                   key= {item.id}
                   avatar= {item.avatar}
                   title= {item.title}
                   price= {item.price}
                   pic1= {item.pic_paths.length>0?item.pic_paths[0]:null}
                   pic2= {item.pic_paths.length>1?item.pic_paths[1]:null}
                   pic3= {item.pic_paths.length>2?item.pic_paths[2]:null}
                   author= {item.name}
                   days= {item.publish_time}
                   comments= {item.message_number}
                   stars= {item.praise_number}
                   type= {item.type==0?'market':'reward'}
                   currentType= {item.currentType}
               />
           )
        });
        return (
            <div className={s.cards}>
                {cards}
            </div>)
    }

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <div className={s.poition}>
                        <Navigation/>
                    </div>

                    {this.renderCards()}

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