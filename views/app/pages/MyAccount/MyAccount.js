/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyAccountHeader from '../../components/MyAccountHeader/MyAccountHeader'
import MyAccountCard from '../../components/MyAccountCard/MyAccountCard'
import s from './MyAccount.scss'

class MyAccount extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MyAccountHeader
                        username="user1"
                    />
                    <MyAccountCard
                        type="0"
                        title="帮忙除草"
                        from="user1"
                        price="70"
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MyAccount