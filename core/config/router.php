<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 20:04
 */

return [


    /* http://127.0.0.1/search/all/1/null/id/asc/-1/0/sports */
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

    '/post'=>[
        ['POST'],['commodity','post'],['check','access_limit']
    ]

];