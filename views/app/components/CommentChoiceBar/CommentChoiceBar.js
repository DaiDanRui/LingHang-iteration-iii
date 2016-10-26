/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CommentCard from '../../components/CommentCard/CommentCard'
import { Router, Route, Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import s from './CommentChoiceBar.scss';

const style = {
    marginRight: 20,
};

class CommentChoiceBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 'teacher',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.setState({
            value: value,
        });
    };

    render(){
        return(
            <div>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="我是老师" value="teacher" />

                    <Tab label="我是学生" value="student" />
                </Tabs>

            </div>

        );
    }
}

export default CommentChoiceBar;
// export default withStyles(Navigation,s);