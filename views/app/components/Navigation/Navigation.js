/**
 * Created by chendanni on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Router, Route, Link } from 'react-router';
import s from './Navigation.scss';

class Navigation extends Component{

    render(){
        return(
            <Toolbar className={s.nav}>
                <ToolbarGroup firstChild = {true}>
                    <IconButton>
                        <ActionHome />
                    </IconButton>
                    <TextField
                        hintText="find something you like..."
                    />
                    <IconButton>
                        <ActionSearch />
                    </IconButton>

                </ToolbarGroup>
            </Toolbar>

        );
    }
}

export default Navigation;
// export default withStyles(Navigation,s);