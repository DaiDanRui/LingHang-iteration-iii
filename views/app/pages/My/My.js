/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyHeader from '../../components/MyHeader/MyHeader'
import MyChoiceList from '../../components/MyChoiceList/MyChoiceList'
import s from './My.scss'

class MarketPublic extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MyHeader/>
                    <MyChoiceList/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MarketPublic