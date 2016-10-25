/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/Content/add';
import { Router, Route, Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SwipeableViews from 'react-swipeable-views';
import s from './MRChoiceBar.scss';

const style = {
    marginRight: 20,
};

class MRChoiceBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 'market',
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
                    <Tab label="技能" value="market" >
                        <div>
                            <p>
                                market
                            </p>
                        </div>
                    </Tab>
                    <Tab label="悬赏" value="review">
                        <div>
                            <p>
                                reward
                            </p>
                        </div>
                    </Tab>
                </Tabs>

            </div>

        );
    }
}

export default MRChoiceBar;
// export default withStyles(Navigation,s);