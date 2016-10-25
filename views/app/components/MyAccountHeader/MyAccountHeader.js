/**
 * Created by user on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import Avatar from 'material-ui/Avatar';
import s from './MyAccountHeader.scss'

class MyAccountHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let name = this.props.username;
        return(
            <div className={s.header}>
                <div className={s.avatar}>
                    <Avatar
                        size={60}
                        src={require('../../icons/avatar1.png')}/>
                    <p>{name}</p>
                </div>

                <div className={s.detail}>
                    <p>总收入: $70</p>
                    <p>总支出: $0</p>
                </div>
            </div>
        );
    }

}

export default MyAccountHeader