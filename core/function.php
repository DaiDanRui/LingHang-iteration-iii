<?php
/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/9/24
 * Time: 14:54
 */


/**
 * 浏览器友好的变量输出
 * @param mixed $var 变量
 * @param boolean $echo 是否输出 默认为True 如果为false 则返回输出字符串
 * @param string $label 标签 默认为空
 * @param boolean $strict 是否严谨 默认为true
 * @return void|string
 */
function dump($var, $echo=true, $label=null, $strict=true) {
    $label = ($label === null) ? '' : rtrim($label) . ' ';
    if (!$strict) {
        if (ini_get('html_errors')) {
            $output = print_r($var, true);
            $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
        } else {
            $output = $label . print_r($var, true);
        }
    } else {
        ob_start();
        var_dump($var);
        $output = ob_get_clean();
        if (!extension_loaded('xdebug')) {
            $output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
            $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
        }
    }
    if ($echo) {
        echo($output);
        return null;
    }else
        return $output;
}

function startsWith($haystack, $needle){
    if(substr($haystack,0,1) == $needle)
        return true;
    else
        return false;
}

function endsWith($haystack, $needle){
    if(substr($haystack,-1) == $needle)
        return true;
    else
        return false;
}

function getCurrentDateTime(){
    return date("Y-m-d H:i:s", time());
}

function convertType($type)
{
    switch ($type)
    {
        case 'skill':
            return 0;
        case 'reward':
            return 1;
    }
    return -1;
}

function convertCommoditiesForHtml($urlKey,&$tableRows,
                                   $beforeTimeKey='publish-time',$after_time='deadline'
){

    foreach ($tableRows as &$row){
        $url = &$row[$urlKey];
        $url = explode(',',$url);
        $time = $row['created_at'];
        $row[$beforeTimeKey] = getBeforeTime($time);
        $time = $row['deleted_date'];
        $row[$after_time] = getAfterTime($time);
    }
}
/**
 * @param $date string 'Y-m-d H:i:s'
 * @return int 多少天前
 */
function getBeforeTime($date){
    $now_time = time();
    $time=strtotime($date);
    return (int)( ($now_time-$time) /3600/24);
}
/**
 * @param $date string 'Y-m-d H:i:s'
 * @return int 多少天后
 */
function getAfterTime($date){
    $now_time = time();
    $time=strtotime($date);
    return (int)( ($now_time-$time) /3600/24);
}
