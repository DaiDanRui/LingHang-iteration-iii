/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyPublicCard from '../../components/MyPublicCard/MyPublicCard'
import MRChoiceBar from '../../components/MRChoiceBar/MRChoiceBar'
import s from './MyPublic.scss'

class MyPublic extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <MyPublicCard/>
                    <MRChoiceBar/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyPublic