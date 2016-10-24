/**
 * Created by user on 16/10/18.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

// import Navigation from '../Navigation/Navigation'
import LoginCard from '../../components/LoginCard/LoginCard'


import s from './Login.scss'

class Login extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <div className={s.container}>
                        <LoginCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Login