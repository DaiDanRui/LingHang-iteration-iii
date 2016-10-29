<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/13
 * Time: 10:54
 */

namespace web\model;


use core\Model;

class CommodityModel extends Model
{

    protected $table = 'commodities';

    public function search($type, $page,$original_page, $category, $keyword, $order, $desc, $bound, $count)
    {

        $start = 0;
        $where = '';
        $type = convertType($type);
        if($bound>=0)
        {
            if($page<$original_page)
            {
                $where .= " AND commodities.$order<'$bound' ";
                $start = ($original_page-$page-1)*$count;
            }else
            {
                $where .= " AND commodities.$order>'$bound' ";
                $start = ($page-$original_page)*$count;
            }
        }
        if($type && $type!=-1)
        {
            $where .= " AND commodities.type='$type' ";
        }
        if($category && $category!='all')
        {
            $where .= " AND commodities.category='$category' ";
        }
        if($keyword && $keyword!='null')
        {
            $where .= " AND commodities.title LIKE '%$keyword%' ";
        }


        if($order || $order!='id')
        {
            $order = " ORDER BY commodities.$order $desc ";
        }else
        {
            $order = ' ';
        }


        return $this->commoditiesInfo($where, $order,$start,$count);
    }

    public function find_by_id($id)
    {
        $where =  " AND commodities.id='$id' ";
        return $this->commoditiesInfo($where,' ',0,1 );
    }

    public function find_by_publisher($publisher, $type, $start=0, $count=PAGE_SIZE)
    {

        $where = " AND commodities.publisher_id='$publisher' " ;
        $type = convertType($type);
        if($type && $type!= -1 )
        {
            $where.= " AND commodities.type='$type' ";
        }
        return $this->commoditiesInfo($where,$where,$start,$count);
    }

    public function insert_picture($commodity_id,$paths,$date)
    {
        $fields = ['id','pic_path','created_at','updated_at'];
        $pictures = [];
        foreach ($paths as $path)
        {
            $pictures[] = [$commodity_id,$path,$date,$date];
        }
        return $this->save_multiple($fields,$pictures);
    }
}