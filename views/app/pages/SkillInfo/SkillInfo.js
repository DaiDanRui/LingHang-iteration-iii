/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import SkillInfoCard from '../../components/SkillInfoCard/SkillInfoCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './SkillInfo.scss'

class SkillInfo extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="技能详情"
                        href="/market"
                    />
                    <SkillInfoCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default SkillInfo