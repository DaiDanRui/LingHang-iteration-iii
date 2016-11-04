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