<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:30
 */

namespace web\controller;


use core\Controller;
use core\Request;
use web\model\PraiseModel;

class PraiseController extends Controller
{

    public function getPraised(Request $request)
    {
        $parameters = $request->validate([
            'type'=>['enum:reward|skill|all'],
            'eulogist_id'=>['set_value:'.$this->auth->currentUser()],
            'page'=>['integer','default_value:1']
        ]);
        $page = $parameters['page'];
        $commodities = $this->model->getPraised(
            $parameters['type'],$parameters['eulogist_id'],$page>0?($page-1)*PAGE_SIZE:0,PAGE_SIZE
        );
        convertCommoditiesForHtml($commodities);

        if($commodities)
        {
            $this->show(
                true,
                $commodities
            );
        }else
        {
            $this->show(false);
        }
    }




    public function postPraise(Request $request)
    {
        $parameters = $request->validate(
            [
                'commodity_id'=>['integer'],
                'eulogist_id'=>['set_value:'.$this->auth->currentUser()],
            ]
        );
        $result = $this->model->save($parameters,true);
        $this->showResult($result?true:false);
    }





    public function isPraised(Request $request)
    {
        $parameters = $request->validate(
            [
                'id'=>['integer'],
                'commodity_id'=>['integer'],
                'eulogist_id'=>['set_value:'.$this->auth->currentUser()],
            ]
        );
        $this->model->exist(array_keys($parameters),array_values($parameters));
    }


}