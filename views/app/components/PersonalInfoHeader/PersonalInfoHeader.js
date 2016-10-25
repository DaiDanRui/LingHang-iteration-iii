/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import Avatar from 'material-ui/Avatar';
import s from './PersonalInfoHeader.scss'



class PersonalInfoHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let avatarSrc = this.props.avatar;
        let name = this.props.username;

        console.log(avatarSrc);

        return(
            <div className={s.header}>
                <div className={s.avatar}>
                    <Avatar
                        size={80}
                        src={avatarSrc}/>
                    <p>{name}</p>
                </div>
            </div>
        );
    }

}

export default PersonalInfoHeader