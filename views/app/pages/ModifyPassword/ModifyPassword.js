/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import ModifyPasswordCard from '../../components/ModifyPasswordCard/ModifyPasswordCard'
import TitleBar from '../../components/TitleBar/TitleBar'
import s from './ModifyPassword.scss'

class ModifyPassword extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TitleBar
                        title="修改密码"
                        href="/account_setting"
                    />
                    <ModifyPasswordCard/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default ModifyPassword