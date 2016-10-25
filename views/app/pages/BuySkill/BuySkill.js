/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'
import BuyCard from '../../components/BuyCard/BuyCard'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import s from './BuySkill.scss'

class BuySkill extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <BuyCard/>
                    <div>
                        <Divider/>
                        <p>总金额</p>
                        <Divider/>
                        <p>价格</p>
                        <Divider/>
                        <p>联系方式</p>
                        <Divider/>
                    </div>
                    <RaisedButton label="确认" primary={true} fullWidth={true} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default BuySkill