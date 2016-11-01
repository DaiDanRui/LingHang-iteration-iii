<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 20:04
 */

return [



    //http://127.0.0.1/login/user1/root
    //{"result":"success","auth":{"login":"true","phone":"18795855867","avatar":"\/avatar.jpg","id":"1","username":"user1"},"main":null}
    '/login/:username/:pwd'=>[
        ['GET'], ['user','postLogin'],['access_limit']
    ],
    '/login'=>[
        ['POST'], ['user','postLogin'],['access_limit']
    ],


    //http://127.0.0.1/register/usertest2/18795855869/root
    //{"result":"success","auth":{"login":"true","phone":"18795855867","avatar":"\/avatar.jpg","id":"1","username":"user1"},"main":"7"}
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

    '/search/:is-market/:page/:keyword/:order/:desc/:bound/:original_page/:type'=>[
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