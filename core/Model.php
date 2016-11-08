<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 14:55
 */

namespace core;

use \PDO;

class Model
{

    /**
     * @var \ArrayAccess
     */
    protected $model_to_view;

    public function getModelToView()
    {
        return $this->model_to_view;
    }
    public function setModelToView($mapper)
    {
        return $this->model_to_view = $mapper;
    }

    /**
     * @var PDO
     */
    protected static $pdo = null;

    protected static function connect(){
        if(self::$pdo){
            return;
        }
        try {
            $config = require 'config/database.php';
            $config_server = $config['SEVER'];
            $config_database = $config['DATABASE'];
            $config_username = $config['USERNAME'];
            $config_password = $config['PASSWORD'];
            $dsn = "mysql:host=$config_server;dbname=$config_database";
            self::$pdo = new PDO($dsn, $config_username, $config_password,
                [
                    PDO::ATTR_PERSISTENT => true,
                    PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8',
                ]
            );
            self::$pdo ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);//设置以异常的形式报错
            self::$pdo ->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE , PDO::FETCH_ASSOC );//设置fetch时返回数据形式为数组
            self::$pdo ->query("set character set 'utf8'");
            self::$pdo ->query("SET NAMES utf8");
        }
        catch(\Exception $e)
        {
            exit($e->getMessage());
        }
    }

    public static function getPDO(){
        self::connect();
        return self::$pdo;
    }

    public static function delete(){
        self::$pdo = null;
    }



    protected $table ;
    protected function getTableName(){
        return $this->table?:strtolower(substr(__CLASS__ ,0,-5));
    }


    public function save($values, $add_date=false, $table=null)
    {
        if($add_date)
        {
            $time = getCurrentDateTime();
            $values['created_at'] = $time;
            $values['updated_at'] = $time;
        }
        $table = $table?:$this->getTableName();
        $fields = join(',',array_keys($values));
        $values = join("','",array_values($values));

        $sql = "INSERT INTO $table ( $fields ) VALUES ( '$values' )";

        $pdo = Model::getPDO();
        $pdo->exec($sql);
        return $pdo->lastInsertId();
    }

    public function save_multiple($keys,$values, $table=null, $add_date=false)
    {
        $table = $table?:$this->getTableName();
        if($add_date)
        {
            $keys[] = 'created_at';
            $keys[] = 'updated_at';
            $date = getCurrentDateTime();
        }
        $fields = join(',',$keys);

        $values_string = [];
        foreach ($values as $value)
        {
            if($add_date)
            {
                $value[] = $date;
                $value[] = $date;
            }
            $values_string[] = join("','", $value);
        }
        $values_string = join("' ),( '",$values_string);

        $sql = "INSERT INTO $table ( $fields ) VALUES ( '$values_string' )";

        $pdo = Model::getPDO();
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->execute(call_user_func_array('array_merge',$values));
        return $pdo->lastInsertId();
    }


    public function find_by_assoc($array,$table=null)
    {
        $field = join(' =? AND ', array_keys($array));
        $table = $table?:$this->getTableName();
        $sql = "SELECT * FROM $table WHERE $field  =? ";
        $pdoStatement = Model::getPDO()->prepare($sql);
        $pdoStatement->execute(array_values($array));
        return $pdoStatement->fetchAll();
    }

    public function update_by_assoc($array,$where,$table=null, $update_time=false)
    {
        return $this->update(
            array_keys($array),array_values($array), $where, $table, $update_time);
    }

    public function update(
        $fields, $values, $where, $table=null, $update_time=false)
    {
        if($update_time)
        {
            $date = getCurrentDateTime();
            $fields[] = 'updated_at';
            $values[] = $date;
        }
        $field = join(' =? ,', $fields);
        $table = $table?:$this->getTableName();

        $where_field = join(' =? AND', array_keys($where));
        $where_values = array_values($where);
        $sql = "UPDATE  $table SET $field =? WHERE $where_field =?";
        $pdoStatement = Model::getPDO()->prepare($sql);
        $pdoStatement->execute(array_merge($values,$where_values));
        return $pdoStatement->fetchAll();
    }

    public function remove_by_assoc($array,$table=null)
    {
        $field = join(' =? AND ', array_keys($array));
        $table = $table?:$this->getTableName();
        $sql = "DELETE FROM  $table WHERE $field  =? ";
        $pdoStatement = Model::getPDO()->prepare($sql);
        return $pdoStatement->execute(array_values($array));

    }



    public function count_row($field, $value, $table)
    {
        $table = $table?:$this->getTableName();
        $sql = "SELECT COUNT(*) FROM $table WHERE $field=? LIMIT 1";
        $pdoStatement = Model::getPDO()->prepare($sql);
        $pdoStatement->execute([$value]);
        return current(current($pdoStatement->fetchAll()));
    }

    public function exist($field, $value, $table=null)
    {
        $table = $table?:$this->getTableName();
        $sql = "SELECT COUNT(*) FROM $table WHERE $field=? LIMIT 1";
        $pdoStatement = Model::getPDO()->prepare($sql);
        $pdoStatement->execute([$value]);
        return current(current($pdoStatement->fetchAll()));
    }

    public function find($field, $value, $table=null)
    {
        $table = $table?:$this->getTableName();
        $sql = "SELECT * FROM $table WHERE $field='$value' LIMIT 1";
        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }


    public function commoditiesInfo($where,$order=' ',$start=0,$count=PAGE_SIZE)
    {
        $sql = "SELECT commodities.*,users.name,users.phone,users.avatar,"
            ."group_concat(pictures.pic_path) as pic_paths FROM commodities,users,pictures"
            ." WHERE  commodities.id=pictures.id AND commodities.publisher_id=users.id ";

        $sql .= $where;
        $sql .= " GROUP BY commodities.id ";
        $sql .= $order;

        $sql .= " LIMIT $start,$count";
        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }

    public function transactionInfo($where,$order=' ',$start=0,$count=PAGE_SIZE)
    {
        $sql = "SELECT commodities.*,users.name,users.phone,users.avatar,transactions.*,"
            ." group_concat(pictures.pic_path) as pic_paths FROM commodities,users,pictures,transactions"
            ." WHERE  commodities.id=pictures.id AND transactions.commodity_id=commodities.id"
            ." AND commodities.publisher_id=users.id ";

        $sql .= $where;
        $sql .= " GROUP BY commodities.id ";
        $sql .= $order;

        $sql .= " LIMIT $start,$count";

        $queryResult = Model::getPDO()->query($sql);
        return $queryResult->fetchAll();
    }

}