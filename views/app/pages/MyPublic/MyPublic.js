/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyPublicCard from '../../components/MyPublicCard/MyPublicCard'
import MRChoiceBar from '../../components/MRChoiceBar/MRChoiceBar'
import TitleBar from '../../components/TitleBar/TitleBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import s from './MyPublic.scss'

class MyPublic extends Component{
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
                        title="我发布的"
                        href="/my"
                    />
                    <div className={s.publics}>
                        <MyPublicCard
                            type="skill"
                            currentType={this.state.value}
                            title="skill title"
                            price="10"
                            picOne={require('../../icons/avatar1.png')}
                            picTwo={require('../../icons/avatar1.png')}
                            picThree={require('../../icons/avatar1.png')}
                            days="3"
                            comments="3"
                            stars="2"
                        />
                        <MyPublicCard
                            type="reward"
                            currentType={this.state.value}
                            title="reward title"
                            price="10"
                            picOne={require('../../icons/avatar1.png')}
                            picTwo={require('../../icons/avatar1.png')}
                            picThree={require('../../icons/avatar1.png')}
                            days="3"
                            comments="3"
                            stars="2"
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

export default MyPublic