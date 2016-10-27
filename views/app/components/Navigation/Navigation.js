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
import FilterBar from '../../components/FilterBar/FilterBar'
import s from './Navigation.scss';

const iconStyle = {
    height:'36px',
    width:'36px',
};
const buttonStyle = {
    height:'36px',
    width:'36px',
    margin: 'auto 8px',
    padding:'0'
};

class Navigation extends Component{

    render(){
        return(
            <div>
                <Toolbar className={s.nav}>
                    <IconButton
                        iconStyle={iconStyle}
                        style={buttonStyle}
                        href="/my">
                        <ActionHome color='#FFFFFF'/>
                    </IconButton>
                    <TextField
                        fullWidth={true}
                        hintText="find something you like..."
                    />
                    <IconButton
                        iconStyle={iconStyle}
                        style={buttonStyle}
                    >
                        <ActionSearch color='#FFFFFF'/>
                    </IconButton>
                </Toolbar>
                <FilterBar/>
            </div>

        );
    }
}

export default Navigation;
// export default withStyles(Navigation,s);