<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 20:04
 */

return [



    //http://127.0.0.1/login/user1/root
    //{"result":"success","field":true}
    '/login/:name/:password'=>[
        ['GET'], ['user','postLogin'],['access_limit']
    ],
    '/login'=>[
        ['POST'], ['user','postLogin'],['access_limit']
    ],


    //http://127.0.0.1/register/usertest2/18795855869/root
    //{"result":"success","field":true}
    '/register/:name/:phone/:password'=>[
        ['GET'], ['user','postRegister'],['access_limit']
    ],
    '/register'=>[
        ['POST'], ['user','postRegister'],['access_limit']
    ],


    //http://127.0.0.1/praise/1
    //{"result":true}
    '/praise/:commodity_id'=>[
        ['GET'],['praise','postPraise'],['check','access_limit']
    ],
    '/praise'=>[
        ['POST'],['praise','postPraise'],['check','access_limit']
    ],

    /* http://127.0.0.1/search/all/1/null/id/asc/-1/0/sports */
    /**
     *
     * array(4) {
        ["id"] => string(1) "1"
        ["type"] => string(1) "0"
        ["price"] => string(5) "50.00"
        ["publisher_id"] => string(1) "1"
        ["deleted_date"] => string(19) "2016-08-29 09:32:42"
        ["title"] => string(15) "climb mountains"
        ["description"] => string(24) "all I need is a partner."
        ["state"] => string(1) "0"
        ["praise_number"] => string(1) "0"
        ["message_number"] => string(1) "0"
        ["created_at"] => string(19) "2016-07-29 09:35:12"
        ["category"] => string(6) "sports"
        ["updated_at"] => string(19) "2016-07-29 09:35:14"
        ["name"] => string(5) "user1"
        ["phone"] => string(11) "18795855867"
        ["avatar"] => string(11) "/avatar.jpg"
        ["pic_paths"] => array(1) {
        [0] => string(12) "/default.jpg"
    }
    }
    [1] => array(17) {
    }
    [2] => array(17) {
    }
    [3] => array(17) {
    }
     *
     */
    '/search/:type/:page/:keyword/:order/:desc/:bound/:original_page/:category'=>[
        ['GET'],  ['commodity','search'],['access_limit']
    ],
    '/search'=>[
        ['POST'],  ['commodity','search'],['access_limit']
    ],

    '/detail/:id'=>[
        ['GET','POST'], ['commodity','getCommodity'],['access_limit']
    ],

    '/personal/commodity/:type'=>[
        ['GET','POST'], ['commodity','getPersonal'],['access_limit']
    ],


    '/post/:title/:description/:deadline/:price/:type/:contact/:is-market'=>[
        ['GET'],['commodity','post'],['check','access_limit']
    ],
    '/post'=>[
        ['POST'],['commodity','post'],['check','access_limit']
    ]



];