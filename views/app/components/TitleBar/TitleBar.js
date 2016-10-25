/**
 * Created by chendanni on 16/10/25.
 */
import React, { Component, PropTypes } from 'react';
import ReturnIcon from 'material-ui/svg-icons/Hardware/keyboard-arrow-left'
import IconButton from 'material-ui/IconButton';
import s from './TitleBar.scss'

const iconStyle = {
    height:'40px',
    width:'40px'
};
const buttonStyle = {
    height:'40px',
    width:'40px',
    padding:'0'
};

class TitleBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let title = this.props.title;
        let linkto = this.props.href;
        return(
            <div className={s.title}>
                <IconButton
                    iconStyle={iconStyle}
                    style={buttonStyle}
                    href={linkto}>
                    <ReturnIcon color='#FFFFFF'/>
                </IconButton>

                <p>{title}</p>
            </div>
        );
    }
}

export default TitleBar;