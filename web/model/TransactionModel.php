<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:55
 */

namespace web\model;


use core\Model;

class TransactionModel extends Model
{
    protected $table = 'transactions';

    public function getPersonalConfirmed($type, $publisher)
    {
        $where = " AND commodities.publisher_id='$publisher' " ;
        $type = convertType($type);
        if($type && $type!= -1 )
        {
            $where.= " AND commodities.type='$type' ";
        }
        return $this->transactionInfo($where,' ');
    }

    public function getPersonalAccepted($type, $trader)
    {
        $where = " AND transactions.trader_id='$trader' " ;
        $type = convertType($type);
        if($type && $type!= -1 )
        {
            $where.= " AND commodities.type='$type' ";
        }
        return $this->transactionInfo($where,' ');
    }
}