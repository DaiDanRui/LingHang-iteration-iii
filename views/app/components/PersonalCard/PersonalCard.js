/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'

import s from './PersonalCard.scss'

class PersonalCard extends Component{
    render(){
        const badgeInside={
            width: '45px',
            height: '45px',
            fontSize: '20px'
        };
        let defaultDate = new Date();
        return (
            <div className={s.backImg}>
                <Paper className={s.container}>
                    <div className={s.wrapper}>
                        <Badge
                            className={s.badge}
                            badgeStyle={badgeInside}
                            badgeContent={4}
                            primary={true}
                        >
                            <Avatar size={120} src={require('../../assets/7.jpg')} />
                        </Badge>
                        <div className={s.name}>
                            <TextField
                                hintText="username"
                                inputStyle={{textAlign:'center'}}
                                defaultValue="Raychen"
                                fullWidth={true}
                            />
                        </div>
                        <div className={s.list}>
                            <div className={s.listItem}>
                                <p className={s.itemLeft}>
                                    email:
                                </p>
                                <TextField
                                    hintText="email"
                                    className={s.itemRight}
                                    defaultValue="1395314348@qq.com"
                                    fullWidth={true}
                                />
                            </div>
                            <div className={s.listItem}>
                                <p className={s.itemLeft}>
                                    phone:
                                </p>
                                <TextField
                                    hintText="phone"
                                    className={s.itemRight}
                                    defaultValue="13989728911"
                                    fullWidth={true}
                                />
                            </div>
                            <div className={s.listItem}>
                                <p className={s.itemLeft}>
                                    birth:
                                </p>
                                <DatePicker
                                    hintText="date"
                                    className={s.itemRight}
                                    defaultDate={defaultDate}
                                    fullWidth={true}
                                />
                            </div>
                        </div>
                        <FlatButton className={s.btn} label="save" secondary={true} />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default PersonalCard;