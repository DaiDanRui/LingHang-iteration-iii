<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 11:22
 */

namespace core;


class Request extends MyArray
{
    protected $model;

    public function __construct($parameters, $model)
    {
        $this->data = array_merge($parameters?:[],$_POST);
        $this->model = $model;
    }

    /**
     * @var Validator
     */
    protected $validator = null;

    protected function addSlashes()
    {
        foreach ($this->data as $key=>$value)
        {
            $this->data[$key] = addslashes($value);
        }
    }

    /**
     * @param $rules
     * @return array
     * @throws \Exception
     */
    public function validate($rules)
    {

        if(!$this->validator){
            $this->validator = new Validator($this->model);
        }
        if($this->validator->validate($this,$rules)){
            return $this->validator->getSuccessValues();
        }else{
            throw new \Exception();
        }
    }

}