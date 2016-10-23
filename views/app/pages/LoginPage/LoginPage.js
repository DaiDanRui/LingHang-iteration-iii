/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import LoginCard from '../../components/LoginCard/LoginCard'

import s from './LoginPage.scss'

import {myTheme} from '../../config'

class LoginPage extends Component {

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={true} />
                    <div className={s.container}>
                        <LoginCard />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage