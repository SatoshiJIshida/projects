<?php
/**
 * Class Save
 * Saves input to the text file.
 * @author [Satoshi Ishida]
 */
class Save {
    private $directory = "../data/data.txt";
    // for testing.
    // private $directory = "/Users/satoshiishida/Sites/Form Validation and Write - PHP and JavaScript/data/data.txt";

    function save() {
        $file = fopen($this->directory, "a");

        try {
            fwrite($file, 
                "Name: " . $_POST["username"] . " , Email: " . $_POST["email"] . " , Phone: " . $_POST["phone"] . "\n"
            );
            fclose($file);
            return true;
        }
        catch(Exception $e) {
            echo "Write not successful: " . $e;
            return false;
        }
    }
}
?>