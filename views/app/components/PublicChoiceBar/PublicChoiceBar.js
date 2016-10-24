/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/Content/add';
import { Router, Route, Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SwipeableViews from 'react-swipeable-views';
import s from './PublicChoiceBar.scss';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
const style = {
    marginRight: 20,
};

class PublicChoiceBar extends Component{

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
                    <Tab label="市场" value="market" >
                        <div>
                            <p>
                                market
                            </p>
                        </div>
                    </Tab>
                    <Tab icon={<FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>}>

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

export default PublicChoiceBar;
// export default withStyles(Navigation,s);