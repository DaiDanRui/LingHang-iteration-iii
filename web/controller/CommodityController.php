<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 9:44
 */

namespace web\controller;


use core\Controller;
use core\lib\FileLoader;
use core\Request;

class CommodityController extends Controller
{


    public function search(Request $request)
    {
        // /markets/{type}/{page}
        $parameters = $request->validate(
            [
                'type'=>['enum:skill|reward|all'],
                'page'=>['integer:>|0','default_value:1'],
                'keyword'=>['default_value:'],
                'order'=>['enum:id|created_at|update_at'],
                'desc'=>['enum:desc|asc','default_value:asc'],
                'category'=>['default_value:all'],
            ]
        );
        list($type,$page,$keyword,$order, $desc,$category)=array_values($parameters);
        $count = PAGE_SIZE;
        $commodities = $this->model->search($type,$page, 0,$category, $keyword,$order, $desc,-1,$count);
        convertCommoditiesForHtml($commodities);
        if($commodities)
        {
            $this->show(
                true,
                [
                    'commodities'=>($commodities),
                    'bound'=>end($commodities)['id'],
                    'parameters'=>$parameters,
                ]
            );
        }else
        {
            $this->show(false);
        }
    }

    public function getCommodity(Request $request)
    {
        $parameters = $request->validate(['id'=>['integer']]);
        $commodity = $this->model->find_by_id(current($parameters));
        $messages = $this->model->find_by_assoc($parameters, 'messages');

//        $praised = $this->model->find_by_assoc($parameters, 'praises');
        if($commodity) {
            convertCommoditiesForHtml($commodity);
            $this->show(true,
                [
                    'commodity'=>$commodity[0],
                    'messages'=>$messages,
                ]
            );
        }else
        {
            $this->show(false,null);
        }
    }


    public function postCommodity(Request $request)
    {
        $parameters = $request->validate(
            [
                'type'=>['enum:skill|reward', 'default_value:skill'],
                'price'=>['double'],
                'publisher_id'=>['set_value:'.$this->auth->currentUser()],
                'deleted_date'=>[],
                'title'=>[],
                'description'=>[],
                'category'=>[],
            ]
        );
        $commodity_id = $this->model->save($parameters,true);
        $file = new FileLoader();

        $paths = $file->loader('upload','picture');
        $this->model->insert_picture($commodity_id,$paths);
        dump($commodity_id);
    }

    public function getPersonal(Request $request)
    {
        $parameter = $request->validate(
            [
                'publisher_id'=>['set_value:'.$this->auth->currentUser()],
                'type'=>['enum:skill|reward|all'],
            ]
        );
        $result = $this->model->find_by_publisher($parameter['publisher_id'],$parameter['type']);
        dump($result);
    }
}