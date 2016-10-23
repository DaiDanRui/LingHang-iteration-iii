/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

import ReactEcharts from 'echarts-for-react'

import s from './GraphCard.scss'

const opt = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['cr','cdn','muen','canhai','zai']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'cr',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'cdn',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'muen',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'canhai',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'zai',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};


class GraphCard extends Component{
    render(){
        return (
            <Paper className={s.container}>
                <Card className={s.card}>
                    <CardMedia className={s.cardPic}>
                        <div>
                            <ReactEcharts
                                option={opt}
                                style={{height: '350px', width: '100%'}}
                                 />
                        </div>
                    </CardMedia>
                    <CardText className={s.table}>
                        <Table>
                            <TableBody
                                className={s.body}
                                displayRowCheckbox={false}
                            >
                                <TableRow key={1}>
                                    <TableRowColumn>{"今日步数"}</TableRowColumn>
                                    <TableRowColumn>{"1000"}</TableRowColumn>
                                    <TableRowColumn>{"统计"}</TableRowColumn>
                                    <TableRowColumn>{"10000"}</TableRowColumn>
                                </TableRow>
                                <TableRow key={2}>
                                    <TableRowColumn>{"今日步数"}</TableRowColumn>
                                    <TableRowColumn>{"1000"}</TableRowColumn>
                                    <TableRowColumn>{"统计"}</TableRowColumn>
                                    <TableRowColumn>{"10000"}</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </Paper>
        );
    }
}

export default GraphCard;