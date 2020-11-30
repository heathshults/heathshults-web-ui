<?php
  if (!empty($_POST)) {
    $logDate = date("DATE_W3C");
    $log = $logDate.' '.$_POST;
    $logFile = file_put_contents('/logs/log.txt', $log.PHP_EOL , FILE_APPEND | LOCK_EX);
    if ($logFile) {
      echo "success";
    } else
    {
      echo "fail";
    }
  } else // $_POST is empty.
{
    echo "Can't log without something to log dude!";
}
?>
