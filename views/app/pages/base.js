/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../components/Header/Header'
import LoginCard from '../components/LoginCard/LoginCard'
import GraphCard from '../components/GraphCard/GraphCard'
import RankCard from '../components/RankCard/RankCard'
import Sidebar from '../components/Sidebar/Sidebar'
import DialogCard from '../components/Dialog/Dialog'
import ListHead from '../components/ListHead/ListHead'
import ListDetail from '../components/ListDetail/ListDetail'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import SideHead from '../components/SideHead/SideHead'
import CircleCard from '../components/CircleCard/CircleCard'
import FriendCard from '../components/FriendCard/FriendCard'
import PersonalCard from '../components/PersonalCard/PersonalCard'

import './base.scss'

class Base extends Component {

    render(){
        return(
            <MuiThemeProvider>
                <div className="root">
                    <Header isLogin={true} />
                    <Header isLogin={false} />
                    <DialogCard />
                    <div className="flex">
                        <div className="flex-1">
                            <SideHead />
                            <Sidebar />
                        </div>
                        <div className="flex-3">
                            <ListHead />
                            <ListDetail />
                            <ItemDetail />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-1">

                        </div>
                        <div className="flex-1">
                            <CircleCard />
                        </div>
                        <div className="flex-1">
                            <FriendCard />
                        </div>
                    </div>
                    <div className="b-container">
                        <PersonalCard />
                        <LoginCard />
                        <GraphCard />
                        <RankCard />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Base