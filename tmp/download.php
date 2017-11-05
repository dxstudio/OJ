<?php
$file_name=$_GET['filename'];
$file_filder="/T/tmp/";
$file_path = $_SERVER['DOCUMENT_ROOT'].$file_filder.$file_name;  

    $buffer = 102400; //一次返回102400个字节  
    if (!file_exists($file_path)) {  
        echo "<script type='text/javascript'> alert('对不起！该文件不存在或已被删除！'); location='index.html'</script>";  
  
        return;  
    }  
    $fp = fopen($file_path, "r");  
    $file_size = filesize($file_path);  
    $file_data = '';  
    while (!feof($fp)) {  
        $file_data .= fread($fp, $buffer);  
    }  
    fclose($fp);  
  
    //Begin writing headers  
    header("Pragma: public");  
    header("Expires: 0");  
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");  
    header("Cache-Control: public");  
    header("Content-Description: File Transfer");  
    header("Content-type:application/octet-stream;");  
    header("Accept-Ranges:bytes");  
    header("Accept-Length:{$file_size}");  
    header("Content-Disposition:attachment; filename={$file_name}");  
    header("Content-Transfer-Encoding: binary");  
    echo $file_data;  
?>