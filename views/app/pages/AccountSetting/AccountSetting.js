/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import AccountSettingCard from '../../components/AccountSettingCard/AccountSettingCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './AccountSetting.scss'

class AccountSetting extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="账户设置"
                    />
                    <AccountSettingCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default AccountSetting