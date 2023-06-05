<?php
/**
 * Class Delete
 * Deletes input from the text file.
 * @author [Satoshi Ishida]
 */
class Delete {
    private $directory = "../data/data.txt";
    // for testing.
    // private $directory = "/Users/satoshiishida/Sites/Form Validation and Write - PHP and JavaScript/data/data.txt";

    function delete() {
        try {
            $delete = "Name: " . $_POST["username"] . " , Email: " . $_POST["email"] . " , Phone: " . $_POST["phone"];
            $data = file($this->directory);
            $out = array();
    
            foreach ($data as $line) {
                if (trim($line) != $delete) {
                    $out[] = $line;
                }
            }

            $file = fopen($this->directory, "w+");
            flock($file, LOCK_EX);
            foreach ($out as $line) {
                fwrite($file, $line);
            }
            flock($file, LOCK_UN);
            fclose($file);
            return true;
        }
        catch(Exception $e) {
            echo "Delete not successful: " . $e;
            return false;
        }
    }
}
$init = new Delete();
$init->delete();
?>