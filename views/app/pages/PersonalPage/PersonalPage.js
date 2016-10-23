/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import PersonalCard from '../../components/PersonalCard/PersonalCard'

import s from './PersonalPage.scss'

import {myTheme} from '../../config'

class PersonalPage extends Component {

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} />
                    <div className={s.container}>
                        <PersonalCard />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default PersonalPage