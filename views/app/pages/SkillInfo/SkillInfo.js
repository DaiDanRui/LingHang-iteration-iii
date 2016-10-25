/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import SkillInfoCard from '../../components/SkillInfoCard/SkillInfoCard'
import s from './SkillInfo.scss'

class SkillInfo extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <SkillInfoCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default SkillInfo