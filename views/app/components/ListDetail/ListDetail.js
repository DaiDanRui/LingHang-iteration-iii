/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {yellow600} from 'material-ui/styles/colors'

import s from './ListDetail.scss'

class ListDetail extends Component {
    render() {
        return (
            <Link to="/activity-detail">
                <Paper className={s.container}>
                    <div className={s.avatar}>
                        <Avatar src={require('../../assets/1.jpg')}/>
                    </div>
                    <div className={s.title}>
                        <div className={s.single}>我要去运动</div>
                        <div className={s.single}>发布人:raychen</div>
                    </div>
                    <IconButton className={s.type}>
                        <EditorInsertChart />
                    </IconButton>
                    <div className={s.money}>
                        <div className={s.single}>参与人数</div>
                        <div className={s.single}>10</div>
                    </div>
                    <div className={s.time}>
                        <div className={s.single}>时间</div>
                        <div className={s.single}>2016-02-02 13:00</div>
                    </div>
                    <div className={s.people}>
                        <FlatButton label="$5" className={s.btn}/>
                    </div>
                    <div className={s.joinIn}>
                        <FlatButton label="参加" className={s.btn} primary={true}/>
                    </div>
                </Paper>
            </Link>
        );
    }
}

export default ListDetail;