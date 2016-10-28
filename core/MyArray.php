<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 16:29
 */

namespace core;


class MyArray implements \ArrayAccess
{
    /**
     * 定义一个数组用于保存数据
     *
     * @access protected
     * @var array
     */
    protected $data = [];

    /**
     * 以对象方式访问数组中的数据
     *
     * @access public
     * @param string 数组元素键名
     * @return mixed
     */
    public function __get($key) {
        return $this->data[$key];
    }

    /**
     * 以对象方式添加一个数组元素
     *
     * @access public
     * @param string 数组元素键名
     * @param mixed  数组元素值
     * @return mixed
     */
    public function __set($key,$value) {
        $this->data[$key] = $value;
    }

    /**
     * 以对象方式判断数组元素是否设置
     *
     * @access public
     * @param 数组元素键名
     * @return boolean
     */
    public function __isset($key) {
        return isset($this->data[$key]);
    }

    /**
     * 以对象方式删除一个数组元素
     *
     * @access public
     * @param 数组元素键名
     */
    public function __unset($key) {
        unset($this->data[$key]);
    }


    /**
     * @param $ary
     */
    public function merge($ary){
        if(!$ary){
            return;
        }if(!$this->data){
            $this->data = $ary;
        }else{
            $this->data = array_merge($this->data,$ary);
        }
    }

    /**
     * 以数组方式向data数组添加一个元素
     *
     * @access public
     * @abstracting ArrayAccess
     * @param mixed $offset
     * @param mixed $value
     */
    public function offsetSet($offset,$value) {
        if (is_null($offset)) {
            $this->data[] = $value;
        } else {
            $this->data[$offset] = $value;
        }
    }



    /**
     * 以数组方式获取data数组指定位置元素
     *
     * @access public
     * @abstracting ArrayAccess
     * @param mixed $offset
     * @return mixed|null
     */
    public function offsetGet($offset) {
        return $this->offsetExists($offset) ? $this->data[$offset] : null;
    }

    /**
     * 以数组方式判断偏移位置元素是否设置
     *
     * @access public
     * @abstracting ArrayAccess
     * @param mixed $offset
     * @return bool
     */
    public function offsetExists($offset) {
        return isset($this->data[$offset]);
    }

    /**
     * 以数组方式删除data数组指定位置元素
     *
     * @access public
     * @abstracting ArrayAccess
     * @param mixed $offset
     */
    public function offsetUnset($offset)
    {
        if ($this->offsetExists($offset)) {
            unset($this->data[$offset]);
        }
    }
}