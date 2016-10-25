/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MyAcceptCard from '../../components/MyAcceptedSkillCard/MyAcceptedSkillCard'
import MRChoiceBar from '../../components/MRChoiceBar/MRChoiceBar'
import s from './MyAccepted.scss'

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