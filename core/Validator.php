<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/29
 * Time: 16:36
 */

namespace core;


class Validator
{
    protected $failed = [];
    protected $success = [];

    protected $model_to_view;

    /**
     * @var Model
     */
    protected $model ;
    public function __construct(Model $model)
    {
        $this->model = $model;
        $this->model_to_view = $model->getModelToView();
    }

    /**
     * @param Request $data
     * @param $rules
     * @return bool return true if $this->failed empty
     */
    public function validate(Request $data, $rules){

        foreach ($rules as $key=>$rule){
            $view_key = isset($this->model_to_view[$key])?$this->model_to_view[$key]:$key;
            $value = $data->offsetGet($view_key);
            $result = $this->validateValue($rule,$value);
            if($result===false){
                $this->failed[] = $key;
            }else{
                $this->success[$key] = $result;
            }
        }
        return !$this->failed;
    }


    public function getSuccessValues(){
        return $this->success;
    }


    public function getFailedKeys(){
        return $this->failed;
    }

    /**
     * @param $rule
     * @param $value $value is according value in request.
     * @return bool if success return value or else return false
     */
    protected function validateValue($rule, $value){
        $result = $value;
        foreach ($rule as $rule_item){
            $rule_exploded = explode(':',$rule_item,2);
            $method = $rule_exploded[0];
            if(isset($rule_exploded[1])){
                $result =  $this->$method($value,$rule_exploded[1]);
            }else{
                $result = $this->$method($value);
            }
            if($result===false){
                break;
            }
        }

        //if not found value and has set default_value ,return default value
        if($result===false)
        {
            $end_rule = end($rule);
            $rule_exploded = explode(':',$end_rule,2);
            if($rule_exploded[0]=='default_value' &&isset($rule_exploded[1]))
            {
                return $rule_exploded[1];
            }

        }
        return $result;
    }

    /**
     * @param $value
     * @param $parameter
     * @return mixed if not found return false | or else return the value
     */
    protected function enum($value, $parameter){
        $parameters = explode('|',$parameter);
        return array_search($value, $parameters)===false?false:$value;
    }


    protected function integer($value){
        return filter_var($value, FILTER_VALIDATE_INT);
    }

    protected function not_null($value){
        return $value===null?false:$value;
    }

    protected function default_value($value,$parameter){
        return $value?:$parameter;
    }
    protected function set_value($value,$parameter){
        return $parameter;
    }

    protected function longest($value,$parameter){

    }
    protected function shortest($value,$parameter){

    }

    protected function no_exist($value,$parameter)
    {
        $parameters = explode('|',$parameter);
        $parameters[] = null;
        if($this->model->count_row($parameters[0], $value, $parameters[1])==0)
        {
            return $value;
        }
        return false;
    }

    protected function unique($value,$parameter){
        $parameters = explode('|',$parameter);
        $parameters[] = null;
        if($this->model->count_row($parameters[0], $value, $parameters[1])==1)
        {
            return $value;
        }
        return false;
    }

    protected function exist($value,$parameter){
        $parameters = explode('|',$parameter);
        $parameters[] = null;
        if($this->model->count_row($parameters[0], $value, $parameters[1]))
        {
            return $value;
        }
        return false;
    }

    protected function session($value, $parameter)
    {
        $parameters = explode('|',$parameter);
        if($parameters[0]==='=')
        {
            return $value==$parameters[1]?$value:false;
        }elseif ($parameters[0]==='==')
        {
            return $value===$parameters[1]?$value:false;
        }elseif ($parameters[0]==='>')
        {
            return $value>$parameters[1]?$value:false;
        }elseif ($parameters[0]==='<')
        {
            return $value<$parameters[1]?$value:false;
        }
    }
}