<?php
/**
 * Created by PhpStorm.
 * the unique entrance of php project.
 * User: darxan
 * Date: 2016/9/24
 * Time: 11:32
 */
header('Access-Control-Allow-Origin:*');
session_start();
mb_internal_encoding('utf-8');
// 应用目录为当前目录
define('APP_PATH', __DIR__.'/');
require_once 'core/autoload.php';
require_once 'core/function.php';
require_once 'core/constant.php';


\core\App::run();