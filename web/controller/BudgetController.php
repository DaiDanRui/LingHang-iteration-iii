<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:39
 */

namespace web\controller;


use core\Controller;
use core\Request;
use web\model\BudgetModel;

class BudgetController extends Controller
{

    public function postBudget(Request $request)
    {
        $parameter = $request->validate([
            'transaction_id'=>['exist'],
            'payer_id'=>[],
            'receiver_id'=>[],
            'created_at'=>['set_value:'.getCurrentDateTime()],
            'updated_at'=>['set_value:'.getCurrentDateTime()],
        ]);
        $this->model->save($parameter);
    }



    public function getIncome()
    {
        $result = $this->model->getIncomeBudget($this->auth->currentUser());
        dump($result);
    }



    public function getOutcome()
    {
        $result = $this->model->getOutcomeBudget($this->auth->currentUser());
        dump($result);
    }
}