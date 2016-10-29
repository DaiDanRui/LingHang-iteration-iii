<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:55
 */

namespace web\model;


use core\Model;

class UserModel extends Model
{

    protected $table = 'users';

    protected $model_to_view = [
//        'name'=>'username',
    ];
}