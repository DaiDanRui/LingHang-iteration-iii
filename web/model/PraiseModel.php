<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:55
 */

namespace web\model;


use core\Model;

class PraiseModel extends Model
{

    protected $table = 'praises';



    public function getPraised($type,$eulogist,$start=0,$count=PAGE_SIZE)
    {


        $sql = "SELECT commodities.*,users.name,users.phone,users.avatar,praises.created_at as praise_date,"
            ." group_concat(pictures.pic_path) as pic_paths FROM commodities,users,pictures,praises"
            ." WHERE praises.eulogist_id=$eulogist AND praises.commodity_id=commodities.id AND "
            ."praises.commodity_id=pictures.id AND commodities.publisher_id=users.id ";


        $type = convertType($type);
        if($type && $type!= -1 )
        {
            $sql.= " AND com$this->modities.type='$type' ";
        }
        $sql .= "GROUP BY commodities.id LIMIT $start,$count";


        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }
}