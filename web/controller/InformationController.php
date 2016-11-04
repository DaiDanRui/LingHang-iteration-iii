<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:36
 */

namespace web\controller;


use core\Controller;
use core\Request;
use web\model\InformationModel;

class InformationController extends Controller
{



    public function getInformation()
    {
        $this->model->find('id',$this->auth->currentUser());
    }

    public function postInformation(Request $request)
    {
        $information = $request->validate([
            'school'=>[],
            'school_id'=>[],
            'birth'=>[],
            'gender'=>[],
            'forte'=>[],
            'hobby'=>[],
            'introduction'=>[],
            'updated_at'=>['set_value:'.getCurrentDateTime()],
        ]);
        $user = $request->validate(
            [
                'avatar'=>[],
                'name'=>[],
                'nickname'=>[],
            ]
        );
        array_filter($information);
        array_filter($user);
        $where = ['id'=>$this->auth->currentUser()];
        $this->model->update_by_assoc($information, $where, null, true);
        $this->model->update_by_assoc($user, $where, 'users',true);
    }
}