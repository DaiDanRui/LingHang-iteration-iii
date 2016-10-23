/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

class DialogCard extends Component{
    constructor(props){
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

    render(){
        const actions = [
            <FlatButton
                label="发布"
                primary={true}
            />,
            <FlatButton
                label="取消"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <RaisedButton label="+" onTouchTap={this.handleOpen} primary={true}/>
                <Dialog
                    title="活动发布 :)"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{width: '400px', maxWidth: 'none'}}
                    bodyStyle={{textAlign: 'center'}}
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
            </div>
        );
    }
}

export default DialogCard;