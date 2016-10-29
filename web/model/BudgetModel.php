<?php

/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:52
 */

namespace web\model;

use core\Model;

class BudgetModel  extends Model
{

    protected $table = 'budgets';

    public function getIncomeBudget($user)
    {
        $where = " WHERE users.id=budgets.payer_id AND budgets.receiver_id='$user'";
        return $this->getBudget($where);
    }

    public function getOutcomeBudget($user)
    {
        $where = " WHERE budgets.payer_id='$user' AND users.id=budgets.receiver_id";
        return $this->getBudget($where);
    }

    protected function getBudget($where)
    {
        $sql = 'SELECT users.name,users.phone,users.id,users.avatar,users.income,users.outcome,budgets* FROM users,budgets'
            .$where;
        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }
}