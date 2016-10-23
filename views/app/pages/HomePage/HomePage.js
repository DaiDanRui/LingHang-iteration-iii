/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import RankCard from '../../components/RankCard/RankCard'
import GraphCard from '../../components/GraphCard/GraphCard'

import s from './HomePage.scss'
import {myTheme} from '../../config'

class HomePage extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false}/>
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <GraphCard />
                        </div>
                        <div className={s.right}>
                            <RankCard />
                            <RankCard />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;