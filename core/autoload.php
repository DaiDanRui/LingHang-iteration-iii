<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 11:56
 */

/**
 * @param $class
 */
function __autoload($class) {
    include_once( APP_PATH.str_replace("\\","/", $class).".php");
}