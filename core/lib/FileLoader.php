<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/27
 * Time: 10:50
 */

namespace core\lib;

class FileLoader
{


    const error_upload_ok = 0;
    const error_oversize = 1;
    const error_format = 2;
    const error_upload_failed = 3;
    const max_size = 20000;
    const max_files = 3;

    protected $files;
    protected $sizes;
    protected $errors;
    protected $types;
    protected $count_files;
    protected $file_ok;
    protected $tmp_name;

    protected function _init($file_name)
    {
        $this->files = $_FILES[$file_name];
        $this->sizes = $this->files['size'];
        $this->errors = $this->files['error'];
        $this->types = $this->files['type'];
        $this->tmp_name = $this->files['tmp_name'];
        $this->count_files = is_array($this->sizes)?count($this->sizes):1;
        $this->file_ok = array_fill(0,$this->count_files,self::error_upload_ok);
        if($this->count_files>1)
        {
            foreach ($this->sizes as $index=>$size)
            {
                if($size>self::max_size)
                {
                    $this->file_ok[$index] = self::error_oversize;
                }

            }
            foreach ($this->errors as $index=>$error)
            {
                if($error>0)
                {
                    $this->file_ok[$index] = self::error_upload_failed;
                }
            }
            foreach ($this->types as $index=>$type)
            {
                if( ($type != "image/gif") && ($type != "image/jpeg") && ($type != "image/pjpeg"))
                {
                    $this->file_ok[$index] = self::error_format;
                }
            }
        }
        else
        {
            if($this->sizes>self::max_size)
            {
                $this->file_ok[0] = self::error_oversize;
            }
            if($this->errors>0)
            {
                $this->file_ok[0] = self::error_upload_failed;
            }
            if( ($this->types != "image/gif") && ($this->types != "image/jpeg") && ($this->types != "image/pjpeg"))
            {
                $this->file_ok[0] = self::error_format;
            }
        }

        return self::error_upload_ok;
    }




    protected function upload_pictures($upload_dir,$file_name){
        $this->_init($file_name);

        $names_array = [];
        foreach ( $this->file_ok['error'] as $key => $error) {
            if ( $error == self::error_upload_ok ) {
                $file_type=explode("/",$this->types[$key]);
                $file_name = uniqid().'.'.end($file_type);
                move_uploaded_file($this->tmp_name[$key], $upload_dir.$file_name);
                $names_array[] = $file_name;
            }
        }
        return $names_array;

    }



    public function loader($upload_dir,$file_name)
    {
        $names = $this->upload_pictures($upload_dir,$file_name);
        return $names?:false;
    }
}