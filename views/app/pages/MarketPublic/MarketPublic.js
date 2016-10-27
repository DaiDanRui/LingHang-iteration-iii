/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MarketPublicCard from '../../components/MarketPublicCard/MarketPublicCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './MarketPublic.scss'

class MarketPublic extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="发布"
                        href="/market"
                    />
                    <MarketPublicCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MarketPublic