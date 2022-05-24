<?php 
    class Logger {

        private static $name = "log.txt";

        public static function Log($message){
            $myfile = fopen($name, "a") or die("Unable to open file!");
            $logMessage = Date("YYYY-mm-dd H:i:s") . ": " . $message . "\r\n";

            fwrite($myfile, $logMessage . "\r\n");
            fclose($myfile);
        }
    }

?>