/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component, PropTypes} from 'react';
import StarIcon from 'material-ui/svg-icons/Toggle/star'
import StarHalfIcon from 'material-ui/svg-icons/Toggle/star-half'
import s from './CommentItem.scss'

class CommentItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let title = this.props.title;
        let stars = this.props.stars;
        let half_star = this.props.half_star;
        let arrs = [];
        for (let i = 0;i < stars;i ++){
            arrs.push(<StarIcon />);
        }
        if (half_star == 1)
            arrs.push(<StarHalfIcon />);

        return(
            <div className={s.item}>
                <p>{title}</p>
                {arrs}
            </div>
        );
    }
}
export default CommentItem;