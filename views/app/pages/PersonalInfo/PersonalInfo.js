/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import PersonalInfoHeader from '../../components/PersonalInfoHeader/PersonalInfoHeader'
import TitleBar from '../../components/TitleBar/TitleBar'
import PersonalInfoCard from '../../components/PersonalInfoCard/PersonalInfoCard'
import s from './PersonalInfo.scss'

class PersonalInfo extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="个人信息"
                        href="/my_accepted"
                    />
                    <div className={s.content}>
                        <PersonalInfoHeader
                            avatar={require("../../icons/avatar1.png")}
                            username="user1"
                        />
                        <PersonalInfoCard
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
                </div>

            </MuiThemeProvider>
        );
    }
}

export default PersonalInfo