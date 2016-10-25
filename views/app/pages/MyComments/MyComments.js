/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from '../../../../node_modules/material-ui/styles/MuiThemeProvider'

import CommentChoiceBar from '../../components/CommentChoiceBar/CommentChoiceBar'
import CommentCard from '../../components/CommentCard/CommentCard'
import s from './MyComments.scss'

class MyComments extends Component{

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <CommentCard/>
                    <CommentChoiceBar/>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default MyComments