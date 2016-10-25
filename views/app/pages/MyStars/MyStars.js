/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MarketRewardCard from '../../components/MarketRewardCard/MarketRewardCard'
import MRChoiceBar from '../../components/MRChoiceBar/MRChoiceBar'

import s from './MyStars.scss'

class MyStars extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MarketRewardCard/>
                    <MRChoiceBar/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MyStars