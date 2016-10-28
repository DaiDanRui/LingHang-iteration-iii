<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:54
 */

namespace web\model;


use core\Model;

class EvaluationModel extends Model
{
    protected function getInfo($where = '')
    {
        $sql = 'SELECT users.avatar,users.phone,users.name,evaluations.*'
            .'FROM users,evaluations '
            .$where;
        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }

    public function getEvaluation($evaluator_id)
    {
        $where = " WHERE users.id=$evaluator_id AND users.id=evaluations.evaluator_id ";
        return $this->getInfo($where);
    }

    public function getEvaluated($evaluated_id)
    {
        $where = " WHERE users.id=$evaluated_id AND users.id=evaluations.evaluated_id ";
        return $this->getInfo($where);
    }

}