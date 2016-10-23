/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import RegisterCard from '../../components/RegisterCard/RegisterCard'

import s from './RegisterPage.scss'

import {myTheme} from '../../config'

class LoginPage extends Component {

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={true} />
                    <div className={s.container}>
                        <RegisterCard />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage