<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 9:45
 */

namespace web\controller;


use core\Controller;
use core\Request;
use web\logic\Sender;
use web\model\CommodityModel;

class TransactionController extends Controller
{


    public function postTransaction(Request $request)
    {
        $parameters = $request->validate(
            [
                'commodity_id'=>['exist:id|commodities'],
                'trader_id'=>['set_value:'.$this->auth->currentUser()],
                'pay_id'=>['set_value:'.uniqid()],
                'state'=>['set_value:'.TRANSACTION_STARTED],
                'created_at'=>['set_value:'.getCurrentDateTime()],
                'updated_at'=>['set_value:'.getCurrentDateTime()]
            ]
        );
        $result = $this->model->save($parameters);
        if(!$result)
        {
            dump($parameters);
        }else
        {
            $commodity_model = new CommodityModel();
            $commodity = $commodity_model->find_by_id($parameters['id']);
            $sender = new Sender();
            $result = $sender->send($commodity['phone'],$commodity['title'],$commodity['name'],$this->auth->currentUserPhone());
            dump($result);
        }

    }

    public function refuseTransaction(Request $request)
    {
        $parameters = $request->validate(
            [
                'transaction_id'=>['exist:id|commodities'],
                'trader_id'=>['set_value:'.$this->auth->currentUser()],
            ]
        );
        $exist = $this->model->find_by_assoc($parameters);
        if($exist)
        {
            $this->model->update(['state'],[TRANSACTION_CONFIRM], $parameters);
        }else
        {
            dump($exist);
        }
    }

    public function confirmTransaction(Request $request)
    {
        $parameters = $request->validate(
            [
                'transaction_id'=>['exist:id|commodities'],
                'trader_id'=>['set_value:'.$this->auth->currentUser()],
            ]
        );
        $exist = $this->model->find_by_assoc($parameters);
        if($exist)
        {
            $this->model->update(['state'],[TRANSACTION_REFUSED], $parameters);
        }else
        {
            dump($exist);
        }
    }

    public function getPersonalConfirmed(Request $request)
    {
        $parameters = $request->validate([
            'type'=>['enum:reward|skill|all'],
            'publisher_id'=>['set_value:'.$this->auth->currentUser()]
        ]);

        $commodity = $this->model->getPersonalConfirmed($parameters['type'],$parameters['publisher_id']);
        if($commodity) {
            convertCommoditiesForHtml($commodity);
            $this->show(true,
                [
                    'commodity'=>$commodity[0],
                ]
            );
        }else
        {
            $this->show(false,null);
        }
    }

    public function getPersonalAccepted(Request $request)
    {
        $parameters = $request->validate([
            'type'=>['enum:reward|skill|all'],
            'trader_id'=>['set_value:'.$this->auth->currentUser()]
        ]);

        $commodity = $this->model->getPersonalAccepted($parameters['type'],$parameters['trader_id']);
        if($commodity) {
            convertCommoditiesForHtml($commodity);
            $this->show(true,
                [
                    'commodity'=>$commodity[0],
                ]
            );
        }else
        {
            $this->show(false,null);
        }
    }
}