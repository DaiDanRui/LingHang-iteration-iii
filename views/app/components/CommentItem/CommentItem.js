/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component, PropTypes} from 'react';
import StarIcon from 'material-ui/svg-icons/Toggle/star'
import s from './CommentItem.scss'

const iconStyle = {
    height: '18px',
    width: '18px'
};

class CommentItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let title = this.props.title;
        let stars = 0;
        let arrs = [];
        stars = this.props.stars;
        for (let i = 0;i < stars;i ++){
            arrs.push(<StarIcon style={iconStyle} />);
        }

        return(
            <div className={s.item}>
                <p>{title}</p>
                {arrs}
            </div>
        );
    }
}
export default CommentItem;