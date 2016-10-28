<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 15:31
 */

namespace web\controller;


use core\Controller;

class HomeController extends Controller
{
    public function index(){
        $this->header(HOME_PAGE);
    }
}