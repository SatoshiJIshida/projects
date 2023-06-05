/**
 * Validation for the 'validate' button.
 * @author [Satoshi Ishida]
 */
class Validation {
    /**
     * Function to define variables and init functions with parameters for validation.
     */
    validation() {
        const name = document.forms["form"]["username"].value;
        const name2 = document.forms["form2"]["username2"].value;
        const namePattern = /^[A-Za-z_ ]+$/;

        const email = document.forms["form"]["email"].value;
        const email2 = document.forms["form2"]["email2"].value;
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        const phone = document.forms["form"]["phone"].value;
        const phone2 = document.forms["form2"]["phone2"].value;
        const phonePattern = /^[\d]+$/;
        
        this.validateName(name, namePattern);
        this.validateName2(name2, namePattern);
        this.validateEmail(email, emailPattern);
        this.validateEmail2(email2, emailPattern);
        this.validatePhone(phone, phonePattern);
        this.validatePhone2(phone2, phonePattern);
    }

    /**
     * Validate Name.
     * @param {string} name - username
     * @param {Object} namePattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validateName(name, namePattern) {
        if (name.length > 0 && !name.match(namePattern)) {
            document.getElementById("nameError").innerHTML = "Invalid user name (only characters allowed)";
            return false;
        } else {
            document.getElementById("nameError").innerHTML = "";
            return true;
        }
    }

    /**
     * Validate Name2 for 2nd form.
     * @param {string} name2 - username
     * @param {Object} namePattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validateName2(name2, namePattern) {
        if (name2.length > 0 && !name2.match(namePattern)) {
            document.getElementById("nameError2").innerHTML = "Invalid user name (only characters allowed)";
            return false;
        } else {
            document.getElementById("nameError2").innerHTML = "";
            return true;
        }
    }
    
    /**
     * Validate Email.
     * @param {string} email - email address
     * @param {Object} emailPattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validateEmail(email, emailPattern) {
        if (email.length > 0 && !email.match(emailPattern)) {
            document.getElementById("emailError").innerHTML = "Invalid email address";
            return false;
        } else {
            document.getElementById("emailError").innerHTML = "";
            return true;
        }
    }

    /**
     * Validate Email2 for 2nd form.
     * @param {string} email2 - email address
     * @param {Object} emailPattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validateEmail2(email2, emailPattern) {
        if (email2.length > 0 && !email2.match(emailPattern)) {
            document.getElementById("emailError2").innerHTML = "Invalid email address";
            return false;
        } else {
            document.getElementById("emailError2").innerHTML = "";
            return true;
        }
    }

    /**
     * Validate Phone Number.
     * @param {string} phone - phone number
     * @param {Object} phonePattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validatePhone(phone, phonePattern) {
        if (phone.length > 0 && !phone.match(phonePattern)) {
            document.getElementById("phoneError").innerHTML = "Invalid phone number (only digits allowed)";
            return false;
        } else {
            document.getElementById("phoneError").innerHTML = "";
            return true;
        }
    }

    /**
     * Validate Phone Number2 for 2nd form.
     * @param {string} phone2 - phone number
     * @param {Object} phonePattern - pattern matching
     * @returns {boolean} true if successful, false if unsuccessful
     */
    validatePhone2(phone2, phonePattern) {
        if (phone2.length > 0 && !phone2.match(phonePattern)) {
            document.getElementById("phoneError2").innerHTML = "Invalid phone number (only digits allowed)";
            return false;
        } else {
            document.getElementById("phoneError2").innerHTML = "";
            return true;
        }
    }
}