<?php

/**
 * Created by PhpStorm.
 * User: darxan
 * Date: 2016/10/26
 * Time: 19:15
 */
namespace web\logic;

class Sender
{
    /**
     * *
     * unify	尊敬的用户您好，您发布的技能/悬赏
     * {{title}}已被客户 {{username}}选中。请前
     * 往领行客户中心查看详情并与客户{{phone}}联系。
     * @param $target_phone string 通知对象
     * @param $title string   对应技能或悬赏名
     * @param $username string 请求人用户名
     * @param $phone string 联系电话
     * @return mixed|true on success or false on failure. However, if the CURLOPT_RETURNTRANSFER
     * option is set, it will return the result on success, false on failure.
     */
    public function send($target_phone, $title, $username, $phone)
    {
        $headers = array(
            'Content-Type: application/json',
            'X-LC-Id: yaY0plwRCXkC1fj95Wpb0qMr-gzGzoHsz',
            'X-LC-Key: hEWBidWo48673Jd9AKBGW3Vl',
        );
        $dataJson = json_encode(
            array(
                'title'=>$title,
                'mobilePhoneNumber'=>$target_phone,
                'phone'=>$phone,
                'username'=>$username,
                'template'=>'unify',
            )
        );
        $URL = 'https://api.leancloud.cn/1.1/requestSmsCode';

        return $this->_sendCURL($headers,$dataJson,$URL);
    }

    protected function _sendCURL($headers,$dataJson,$URL){
        $curlConn = curl_init();
        curl_setopt($curlConn, CURLOPT_TIMEOUT, 30);
        curl_setopt($curlConn, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curlConn, CURLOPT_USERAGENT, 'https://api.leancloud.cn/1.1/requestSmsCode');
        curl_setopt($curlConn, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curlConn, CURLINFO_HEADER_OUT, true);
        curl_setopt($curlConn, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curlConn, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curlConn, CURLOPT_POSTFIELDS, $dataJson);
        curl_setopt($curlConn, CURLOPT_URL, $URL);

        $response = curl_exec($curlConn);
        $responseCode = curl_getinfo($curlConn, CURLINFO_HTTP_CODE);
        curl_close($curlConn);

        return $responseCode;
    }
}