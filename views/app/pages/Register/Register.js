/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import RegisterCard from '../../components/RegisterCard/RegisterCard'


import s from './Register.scss'

class Register extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <div className={s.container}>
                        <RegisterCard/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Register