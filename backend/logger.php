<?php 
    class Logger {

        public static function Log($message){
            $myfile = fopen("log.txt", "a") or die("Unable to open file!");
            $currentDate = new DateTime();
            $logMessage = $currentDate->format("Y-m-d H:i:s") . ": " . $message . "\r\n";

            fwrite($myfile, $logMessage);
            fclose($myfile);
        }
    }

?>