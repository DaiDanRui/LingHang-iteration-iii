/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';
import CommentCard from '../../components/CommentCard/CommentCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './MyComments.scss'

class MyComments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'teacher',
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
                <div className={s.container}>
                    <TitleBar
                        title="评价详情"
                        href="/my"
                    />

                    <div className={s.comments}>
                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="C++教程2"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="teacher"
                            currentType={this.state.value}
                        />
                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="C++教程2"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="teacher"
                            currentType={this.state.value}
                        />
                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="C++教程2"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="teacher"
                            currentType={this.state.value}
                        />
                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="C++教程2"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="teacher"
                            currentType={this.state.value}
                        />
                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="C++教程2"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="teacher"
                            currentType={this.state.value}
                        />

                        <CommentCard
                            avatar={require('../../icons/avatar1.png')}
                            username="user1"
                            title="student"
                            price="10"
                            lanStar="5"
                            pStar="5"
                            totalStar="4"
                            time="2016-10-10"
                            type="student"
                            currentType={this.state.value}
                        />
                    </div>

                    <div className={s.footer}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <Tab label="我是老师" value="teacher" />
                            <Tab label="我是学生" value="student" />
                        </Tabs>

                    </div>


                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyComments