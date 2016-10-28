<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 15:01
 */

namespace core;


class App
{
    protected static $controller = 'Home';//控制器名
    protected static $method = 'index';//方法名
    protected static $parameters = [];//其他参数
    
    protected static $request_url = null;
    protected static $request_method = null;
    protected static $url_array = null;


    
    protected static $url_key = null;
    protected static $url_value = null;

    protected static $router = null;

    protected static $auth;

   

    /**
     * 项目的入口方法
     * @throws Exception
     */
    public static function run(){


        self::init();
        self::$url_key = self::findMatchUrl();
        self::$url_value = self::$router[self::$url_key];
        self::requestMethod();
        self::checkAuth();
        self::matchedFunction();
        self::call();

    }

    protected function checkAuth()
    {
        self::$auth = new Auth();
        foreach (self::$url_value[KEY_AUTH] as $method)
        {
            self::$auth->$method();
        }
    }

    protected static function call(){
        $controllerClass = "\\web\\controller\\".self::$controller."Controller";
        $modelClass = "\\web\\model\\".self::$controller."Model";


        $controller = new $controllerClass();
        $model = class_exists($modelClass)?new $modelClass():new Model();



        $controller->setModel($model);
        $controller->setAuth(self::$auth);
        $request = new Request(self::$parameters, $model);
        call_user_func_array([$controller, self::$method],[$request]);
    }


    protected static function init(){
        self::$router = require 'config/router.php';
        self::$router['/'] = [ ['GET','POST'],[self::$controller,self::$method] ];
        self::$request_url = $_SERVER['REQUEST_URI'];//start with '/'
        self::$url_array = explode('/',self::$request_url);// the first element must be ""(empty)
        self::$request_method = $_SERVER['REQUEST_METHOD'];
    }



    
    protected static function findMatchUrl(){
        if(self::$request_url=='/'){
            return '/';
        }
        $url_key_set = array_keys(self::$router);
        foreach ($url_key_set as $url_key){
            if(self::isMatched($url_key)===true){
                return $url_key;
            }
        }
        throw new \Exception('no matched url');
    }


    protected static function isMatched($url_key){

        foreach (explode('/', $url_key) as $index=>$url_key_item){
            if(startsWith($url_key_item,':')){
                self::$parameters[substr($url_key_item,1)] = isset(self::$url_array[$index])?self::$url_array[$index]:null;
            }else{
                if(self::$url_array[$index]!==$url_key_item){
                    return false;
                }
            }
        }
        return true;
    }


    protected static function requestMethod(){
        if(!in_array(self::$request_method, self::$url_value[KEY_REQUEST_METHOD])){
            throw new \Exception('request method refused');
        }
    }


    protected static function matchedFunction(){
        list(self::$controller, self::$method) = self::$url_value[KEY_ROUTER];
    }

}