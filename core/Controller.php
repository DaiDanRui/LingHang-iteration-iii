<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 14:55
 */

namespace core;


class Controller
{

    /**
     * @var Model
     */
    protected $model ;
    /**
     * @var Auth
     */
    protected $auth ;

    /**
     * @param $auth
     */
    public function setAuth($auth)
    {
        $this->auth = $auth;
    }
    /**
     * @param $model Model
     */
    public function setModel($model)
    {
        $this->model = $model;
    }

    protected function show($content){
        echo json_encode($content);
        Model::delete();
        exit(0);
    }
    protected function showResult($result){
        echo json_encode(['result'=>$result]);
        Model::delete();
        exit(0);
    }

    protected function header($url)
    {
        header('Location: '.$url);
        exit(0);
    }

    /**
     * if without login, print message and exit;
     */
    protected function checkLogin()
    {
        if(!$this->auth->check())
        {
            $this->showResult('login first');
            exit(0);
        }
    }


}