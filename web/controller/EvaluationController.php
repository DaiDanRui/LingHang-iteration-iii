<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 9:44
 */

namespace web\controller;


use core\Controller;
use core\Request;
use web\model\EvaluationModel;

class EvaluationController extends Controller
{


    public function postEvaluation(Request $request)
    {
        $parameters = $request->validate([
            'evaluation'=>[],
            'evaluator_id'=>[],
            'evaluated_id'=>[],
            'transaction_id'=>[],
            'created_at'=>[],
            'updated_at'=>[],
            'score1'=>[],
            'score2'=>[],
            'score3'=>[],
        ]);
        $this->model->save($parameters);
    }

    public function getEvaluation()
    {
        $this->model->getEvaluation($this->auth->currentUser());
    }

    public function getEvaluated()
    {
        $this->model->getEvaluated($this->auth->currentUser());
    }
}