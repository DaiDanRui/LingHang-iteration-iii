/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MarketPublicCard from '../../components/MarketPublicCard/MarketPublicCard'
import s from './MarketPublic.scss'

class MarketPublic extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MarketPublicCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MarketPublic