/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyAcceptCard from '../../components/MyAcceptedCard/MyAcceptedCard'
import MRChoiceBar from '../../components/MRChoiceBar/MRChoiceBar'
import s from './MyAccept.scss'

class MyAccept extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MyAcceptCard/>
                    <MRChoiceBar/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyAccept