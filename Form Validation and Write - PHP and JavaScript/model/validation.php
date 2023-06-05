<?php
/**
 * Class Validation
 * Validates user input and calls save().
 * @author [Satoshi Ishida]
 */
class Validation {
    private $errors = [];
    private $data = [];
    const NAME_PATTERN = "/^[a-z\s]+$/i";
    const PHONE_PATTERN = "/^[0-9]+$/";

    function validateName() {
        if (!empty($_POST["username"]) && !preg_match(self::NAME_PATTERN, $_POST["username"])) {
            $this->errors["username"] = "Invalid user name (only characters allowed)";
        }
    }

    function validateEmail() {
        if (!empty($_POST["email"]) && !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            $this->errors["email"] = "Invalid email address";
        }
    }

    function validatePhone() {
        if (!empty($_POST["phone"]) && !preg_match(self::PHONE_PATTERN, $_POST["phone"])) {
            $this->errors["phone"] = "Invalid phone number (only digits allowed)";
        }
    }

    function validateData() {
        if (!empty($this->errors)) {
            $this->data["success"] = false;
            $this->data["errors"] = $this->errors;
        } else {
            $this->data["success"] = true;
            $this->data["message"] = "Success!";
            
            include_once("save.php");
            $initSave = new Save();
            $initSave->save();
        }
        echo json_encode($this->data);
    }
}
$init = new Validation();
$init->validateName();
$init->validateEmail();
$init->validatePhone();
$init->validateData();
?>