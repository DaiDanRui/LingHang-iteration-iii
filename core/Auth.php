<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/17
 * Time: 14:51
 */

namespace core;


class Auth
{


    public function login($data,$parameters)
    {

        if(isset($data[0]))
        {
            if(($data[0]['password']===$parameters['password']))
            {
                $_SESSION[CURRENT_LOGIN_VERIFIED] = true;
                $_SESSION[CURRENT_LOGIN_PHONE] = $data[0]['phone'];
                $_SESSION[CURRENT_LOGIN_NAME] = $data[0]['name'];
                $_SESSION[CURRENT_LOGIN_AVATAR] = $data[0]['avatar'];
                $_SESSION[CURRENT_LOGIN_ID] = $data[0]['id'];
                return true;
            }else
            {
                return 'password';
            }

        }else
        {
            return 'phone';
        }
    }
    public function currentUser()
    {
        return 1;
        return $_SESSION[CURRENT_LOGIN_ID];
    }
    public function currentUserPhone()
    {
        return '18795855867';
        return $_SESSION[CURRENT_LOGIN_PHONE];
    }

    public function logout()
    {
        if($_SESSION[CURRENT_LOGIN_VERIFIED])
        {
            $_SESSION[CURRENT_LOGIN_VERIFIED] = false;
            return ('success');
        }else
        {
            return ('fail');
        }
    }

    public function check()
    {
        return isset($_SESSION[CURRENT_LOGIN_VERIFIED])?$_SESSION[CURRENT_LOGIN_VERIFIED]:false;
    }

    public function access_limit()
    {
        if(!isset($_SESSION[ACCESS_COUNT]))
        {
            $_SESSION[ACCESS_COUNT]=1;
        }else
        {
            $_SESSION[ACCESS_COUNT] += 1;
            if($_SESSION[ACCESS_COUNT]>ACCESS_FREQUENCY_LIMIT)
            {
                $this->block();
            }
        }


        if(!isset($_SESSION[ACCESS_LAST_TIME]))
        {
            $_SESSION[ACCESS_LAST_TIME]=time();
        }else
        {
            if(time()-$_SESSION[ACCESS_LAST_TIME]<ACCESS_TIME_INTERVAL)
            {
                $this->block();
            }$_SESSION[ACCESS_LAST_TIME] = time();
        }

    }

    protected function block()
    {
        echo  json_encode(['result'=>'failed','message'=>'server is busy.']);
        exit(0);
    }
}