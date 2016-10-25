/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import PersonalInfoHeader from '../../components/PersonalInfoHeader/PersonalInfoHeader'
import TitleBar from '../../components/TitleBar/TitleBar'
import PersonalInfoSetCard from '../../components/PersonalInfoSetCard/PersonalInfoSetCard'
import s from './PersonalInfoSet.scss'

class PersonalInfoSet extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="修改个人信息"
                    />
                    <PersonalInfoHeader
                        avatar={require("../../icons/avatar1.png")}
                        username="user1"
                    />
                    <PersonalInfoSetCard
                        nickName="cr"
                        name="陈睿"
                        gender="男"
                        mobile="12345678901"
                        email="543625@54.com"
                        birth="1996-01-01"
                        habit="爱好。。。"
                        good_at="哈哈哈"
                    />
                </div>

            </MuiThemeProvider>
        );
    }
}

export default PersonalInfoSet