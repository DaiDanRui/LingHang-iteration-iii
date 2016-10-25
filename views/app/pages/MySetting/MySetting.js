/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import MySettingCard from '../../components/MySettingCard/MySettingCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './MySetting.scss'

class MySetting extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="设置"
                    />
                    <MySettingCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MySetting