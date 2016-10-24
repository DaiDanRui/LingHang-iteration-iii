/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import Navigation from '../../components/Navigation/Navigation'
import PublicChoiceBar from '../../components/PublicChoiceBar/PublicChoiceBar'
import MarketCard from '../../components/Market&RewardCard/Market&RewardCard'
import FilterBar from '../../components/FilterBar/FilterBar'

import s from './Market.scss'

class Login extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Navigation/>
                    <FilterBar/>
                    <MarketCard/>
                    <PublicChoiceBar/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login