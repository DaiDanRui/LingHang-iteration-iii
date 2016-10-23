/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'

import s from './CircleCard.scss'

class CircleCard extends Component{
    render(){
        const badgeInside={
            width: "30px",
            height: "30px"
        };

        return (
            <div className={s.backImg}>
                <Card className={s.container}>
                    <CardHeader
                        className={s.head}
                        title="Cross"
                        subtitle="创建人:raychen"
                        avatar={<Badge
                            badgeStyle={badgeInside}
                            className={s.badge}
                            badgeContent={4}
                            primary={true}
                        >
                            <Avatar size={60} src={require('../../assets/7.jpg')} />
                        </Badge>
                    }
                    />
                    <CardText className={s.content}>
                        &nbsp;&nbsp;&nbsp;&nbsp;这是一段介绍的文字，我们是一个和谐的团队，我们有一个厉害的队长,天天带大家运动。
                    </CardText>
                    <CardActions className={s.footer}>
                        <div className={s.left}>
                            <div className={s.member} >成员 </div>
                            <div className={s.avatars}>
                                <Avatar className={s.avatar} src={require('../../assets/9.jpg')}/>
                                <Avatar className={s.avatar} src={require('../../assets/8.jpg')}/>
                                <Avatar className={s.avatar} src={require('../../assets/5.jpg')}/>
                            </div>
                        </div>
                        <FlatButton className={s.btn} label="加入" primary={true} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CircleCard;