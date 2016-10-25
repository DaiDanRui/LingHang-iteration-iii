/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import ReturnIcon from 'material-ui/svg-icons/Hardware/keyboard-arrow-left'
import s from './TitleBar.scss'

class TitleBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let title = this.props.title;
        return(
            <div className={s.title}>
                <ReturnIcon />
                <p>{title}</p>
            </div>
        );
    }
}

export default TitleBar;