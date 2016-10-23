/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import Addbox from 'material-ui/svg-icons/content/add-box'
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker'

import s from './ListHead.scss'
import {blue, white1} from '../../config'
import {darkBlack} from 'material-ui/styles/colors'

class ListHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen () {
        this.setState({open: true});
    };

    handleClose () {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <RaisedButton
                label="发布"
                primary={true}
                className={s.btn}
            />,
            <RaisedButton
                label="取消"
                secondary={true}
                onTouchTap={this.handleClose}
                className={s.btn}
            />,
        ];
        let group1 =
            <ToolbarGroup>
                <ToolbarTitle className={s.title} text="Activities"/>
                <IconButton style={{alignSelf: 'center'}} onTouchTap={this.handleOpen}>
                    <Addbox />
                </IconButton>
                <Dialog
                    title="活动发布 :)"
                    titleStyle={{color: blue, backgroundColor: white1}}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width: '400px', maxWidth: 'none'}}
                    bodyStyle={{textAlign: 'center', backgroundColor: white1}}
                    actionsContainerStyle={{backgroundColor: white1, textAlign: 'center'}}
                >
                    <TextField
                        floatingLabelText="活动名称"
                        hintText="活动名称"
                    />
                    <TextField
                        floatingLabelText="赏金"
                        hintText="赏金"
                    />
                    <DatePicker
                        floatingLabelText="选择时间"
                        hintText="选择时间"
                    />
                    <TextField
                        hintText="简介"
                        floatingLabelText="简介"
                        style={{textAlign: 'left'}}
                        multiLine={true}
                        rows={3}
                        rowsMax={4}
                    />
                </Dialog>
            </ToolbarGroup>;
        if (this.props.type == "circle") {
            group1 =
                <ToolbarGroup>
                    <ToolbarTitle className={s.title} text="Circles"/>
                </ToolbarGroup>;
        }else if (this.props.type == "friends"){
            group1 =
                <ToolbarGroup>
                    <ToolbarTitle className={s.title} text="Friends"/>
                </ToolbarGroup>;
        }
        return (
            <Toolbar className={s.container}>
                {group1}
                <ToolbarGroup>
                    <TextField
                        hintText="search"
                        style={{width: '200px'}}
                    />
                    <IconButton style={{alignSelf: 'center'}}>
                        <Search />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default ListHead;