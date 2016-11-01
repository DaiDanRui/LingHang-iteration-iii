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
        $user_id = $this->model->save($parameters,true);
        $this->show($user_id===false?false:true, $user_id);
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

        if($loginResult===true)
        {
            $this->show(true);
        }else
        {
            $this->show(false,$loginResult);
        }
    }

    public function postLogout()
    {
        $this->showResult( $this->auth->logout() );
    }

    public function change(Request $request)
    {
        $parameters = $request->validate(
            [
                'new'=>[],
                'old'=>[],
            ]
        );
        $data =$this->model->find('id',$this->auth->currentUser());
        $loginResult = null;
        if(!$data)
        {
            $loginResult = 'name';
        }else
        {
            if($parameters['old']=$data[0]['password'])
            {
                $update = $this->model->update_by_assoc(
                    ['password'=>$parameters['password']],
                    ['id'=>$this->auth->currentUser()]
                );
                $loginResult = $update?true:false;
            }
            else
            {
                $loginResult = 'old';
            }
        }
        if($loginResult===true)
        {
            $this->show(true);
        }else
        {
            $this->show(false,$loginResult);
        }
    }

}