/**
 * Created by chendanni on 16/10/25.
 */
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import s from './MyAccountCard.scss'

class MyAccountCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let type = this.props.type;
        let title = this.props.title;
        let from = this.props.from;
        let price = this.props.price;

        let typeName = '';
        let inout = '';
        if (type == 0){
            typeName = '接单';
            inout = '收入';
        }
        else{
            typeName = '悬赏';
            inout = '支出';
        }

        return(
            <div>
                <Paper>
                    <p>2016-01-01</p>
                    <p>{typeName}: {title}</p>
                    <div className={s.footer}>
                        <p>from {from}</p>
                        <p>{inout}: ${price}</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default MyAccountCard;