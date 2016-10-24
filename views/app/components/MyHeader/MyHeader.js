/**
 * Created by user on 16/10/24.
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import Avatar from 'material-ui/Avatar';
import s from './MyHeader.scss'



class Header extends Component{


    render(){
        return(
            <div className={s.header}>
                <div className={s.avatar}>
                    <Avatar
                        size={80}
                        src={require("../../icons/avatar1.png")}/>
                    <p>详情 >></p>
                </div>
            </div>
        );
    }

}

export default Header