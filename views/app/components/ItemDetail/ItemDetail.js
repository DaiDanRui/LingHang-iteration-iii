/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

import s from './ItemDetail.scss'

class ItemDetail extends Component{
    render(){
        return (
            <div className={s.backImg}>
                <Paper className={s.container}>
                    <div className={s.description}>
                        <p>
                            简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍
                        </p>
                    </div>
                    <div className={s.list}>
                        <div className={s.names}>
                            <FlatButton className={s.rank} label="1" />
                            <div className={s.avatar}>
                                <Avatar size={30} src={require('../../assets/1.jpg')}/>
                            </div>
                            <div className={s.name}> raychen </div>
                        </div>
                        <div className={s.steps}>
                            <p>步数: &nbsp;12983</p>
                        </div>
                        <div className={s.energy}>
                            <p>能量: &nbsp;1238k</p>
                        </div>
                        <div className={s.expr}>
                            <p>Exp +100</p>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div className={s.names}>
                            <FlatButton className={s.rank} label="1" />
                            <div className={s.avatar}>
                                <Avatar size={30} src={require('../../assets/1.jpg')}/>
                            </div>
                            <div className={s.name}> raychen </div>
                        </div>
                        <div className={s.steps}>
                            <p>步数: &nbsp;12983</p>
                        </div>
                        <div className={s.energy}>
                            <p>能量: &nbsp;1238k</p>
                        </div>
                        <div className={s.expr}>
                            <p>Exp +100</p>
                        </div>
                    </div>
                    <div className={s.list}>
                        <div className={s.names}>
                            <FlatButton className={s.rank} label="1" />
                            <div className={s.avatar}>
                                <Avatar size={30} src={require('../../assets/1.jpg')}/>
                            </div>
                            <div className={s.name}> raychen </div>
                        </div>
                        <div className={s.steps}>
                            <p>步数: &nbsp;12983</p>
                        </div>
                        <div className={s.energy}>
                            <p>能量: &nbsp;1238k</p>
                        </div>
                        <div className={s.expr}>
                            <p>Exp +100</p>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ItemDetail