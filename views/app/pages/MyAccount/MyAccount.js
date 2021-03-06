/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyAccountHeader from '../../components/MyAccountHeader/MyAccountHeader'
import MyAccountCard from '../../components/MyAccountCard/MyAccountCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './MyAccount.scss'

class MyAccount extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="我的账户"
                        href="/my"
                    />
                    <MyAccountHeader
                        username="user1"
                        income="10"
                        outcome="0"
                    />
                    <div className={s.accounts}>
                        <MyAccountCard
                            type="0"
                            title="帮忙除草"
                            from="user1"
                            price="50"
                        />
                        <MyAccountCard
                            type="0"
                            title="帮忙除草"
                            from="user1"
                            price="50"
                        />
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default MyAccount