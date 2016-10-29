<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 9:45
 */

namespace web\controller;


use core\Controller;
use core\Request;


class UserController extends Controller
{




    public function getRegister()
    {
        $this->header(REGISTER_PAGE);
    }

    public function postRegister(Request $request)
    {

        $parameters = $request->validate([
            'name'=>['no_exist:name'],
            'password'=>[],
            'phone'=>['no_exist:phone'],
            'avatar'=>['set_value:'.DEFAULT_AVATAR],
//            'confirm_code'=>['session:=|confirm_code'],
        ]);
        $this->showResult( $this->model->save($parameters,true)===false? 'fail':'success');
    }

    public function sendConfirmCode(Request $request)
    {
        $parameters = $request->validate([
            'name'=>['unique:name'],
            'password'=>[],
            'phone'=>['unique:phone'],
        ]);
        if($parameters)
        {
            $this->showResult('fail');
        }else
        {
            $this->showResult('success');
        }
    }

    public function confirmCode(Request $request)
    {
        $parameters = $request->validate([
            'confirm_code'=>['session:=|confirm_code'],
        ]);
        if($parameters)
        {
            $this->showResult('fail');
        }else
        {
            $this->showResult('success');
        }
    }

    public function getLogin()
    {
        $this->header(LOGIN_PAGE);
    }

    public function postLogin(Request $request)
    {
        $parameters = $request->validate(
            [
                'name'=>[],
                'password'=>[]
            ]
        );
        $data =$this->model->find('name',$parameters['name']);
        $loginResult = $this->auth->login($data,$parameters);
        $this->show([
            'result'=>$loginResult===true?'success':'fail',
            'field'=>$loginResult,
        ]);
    }

    public function postLogout()
    {
        $this->showResult( $this->auth->logout() );
    }

}