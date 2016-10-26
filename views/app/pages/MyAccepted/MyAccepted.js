/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyAcceptCard from '../../components/MyAcceptedCard/MyAcceptedCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import s from './MyAccepted.scss'

class MyAccept extends Component{
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
                        title="被接受的"
                        href="/my"
                    />
                    <div className={s.accepteds}>
                        <MyAcceptCard
                            type="skill"
                            currentType={this.state.value}
                            pic={require('../../icons/avatar1.png')}
                            title="c++教程1"
                            price="10"
                            time="2016-10-10"
                            accepter="aaa"
                        />
                        <MyAcceptCard
                            type="reward"
                            currentType={this.state.value}
                            pic={require('../../icons/avatar1.png')}
                            title="c++"
                            price="10"
                            time="2016-10-10"
                            accepter="aaa"
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

export default MyAccept