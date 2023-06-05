const success = {};
let errors = {};

const nameRegex = /^[A-Za-z_ ]+$/, // letters, _, space.
  emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * InputValidation -> Input validation logic.
 * @author [Satoshi Ishida]
 */
export class InputValidation {
  /**
   * validation -> for full credential validation on signup.
   * @returns {boolean} true - if true.
   * @returns {boolean} false - if false.
   */
  validation() {
    const nameSet = document.getElementById("name").value,
      emailSet = document.getElementById("email").value,
      passwordSet = document.getElementById("password").value;

    this.nameValidation(nameSet, nameRegex);
    this.emailValidation(emailSet, emailRegex);
    this.passwordValidation(passwordSet);

    if (Object.keys(errors).length === 0) {
      success["success"] = true;
      console.log(success);
      return true;
    } else {
      console.log(errors);
      errors = {}; // clear errors for next try.
      return false;
    }
  }

  /**
   * onlyValidateEmail -> only validate email address.
   * @returns {boolean} true - if true.
   * @returns {boolean} false - if false.
   */
  onlyValidateEmail() {
    const emailSet = document.getElementById("email").value;

    this.emailValidation(emailSet, emailRegex);

    if (Object.keys(errors).length === 0) {
      success["success"] = true;
      console.log(success);
      return true;
    } else {
      errors = {};
      return false;
    }
  }

  /**
   * onlyValidatePassword -> only validate password.
   * @returns {boolean} true - if true.
   * @returns {boolean} false - if false.
   */
  onlyValidatePassword() {
    const passwordSet = document.getElementById("password").value;

    this.passwordValidation(passwordSet);

    if (Object.keys(errors).length === 0) {
      success["success"] = true;
      console.log(success);
      return true;
    } else {
      errors = {};
      return false;
    }
  }

  /**
   * nameValidation -> validate name.
   * @param {string} nameSet - name.
   * @param {string} nameRegex - name regular expression.
   * @returns {boolean} false - if false.
   * @returns {boolean} true - if true.
   */
  nameValidation(nameSet, nameRegex) {
    if (nameRegex.test(nameSet) === false || nameSet === "") {
      document.getElementById("nameError").innerHTML =
        "Only letters, space and underscore allowed.";
      errors[nameSet] = false;
      return false;
    } else {
      document.getElementById("nameError").innerHTML = "";
      return true;
    }
  }

  /**
   * emailValidation -> validate email.
   * @param {string} emailSet - email.
   * @param {string} emailRegex - email regular expression.
   * @returns {boolean} false - if false.
   * @returns {boolean} true - if true.
   */
  emailValidation(emailSet, emailRegex) {
    if (emailRegex.test(emailSet) === false || emailSet === "") {
      document.getElementById("emailError").innerHTML =
        "Only valid email address allowed.";
      errors[emailSet] = false;
      return false;
    } else {
      document.getElementById("emailError").innerHTML = "";
      return true;
    }
  }

  /**
   * passwordValidation -> validate password.
   * @param {string} passwordSet - password.
   * @returns {boolean} false - if false.
   * @returns {boolean} true - if true.
   */
  passwordValidation(passwordSet) {
    const digitsRegex = /\d/g, // digits.
      lowerCaseRegex = /[a-z]/g, // lower-case letters.
      upperCaseRegex = /[A-Z]/g, // upper-case letters.
      specialCharsRegex = /\W|_/g; // any char that is not alphanumeric.

    if (passwordSet.length >= 8 && passwordSet.length <= 50) {
      if (
        digitsRegex.test(passwordSet) &&
        lowerCaseRegex.test(passwordSet) &&
        upperCaseRegex.test(passwordSet) &&
        specialCharsRegex.test(passwordSet)
      ) {
        document.getElementById("passwordError").innerHTML = "";
        return true;
      } else {
        document.getElementById("passwordError").innerHTML =
          "Password must be between 8-50 characters.<br>Containing upper and lower case letters,<br>numbers and a symbol.";
        errors[passwordSet] = false;
        return false;
      }
    } else {
      document.getElementById("passwordError").innerHTML =
        "Password must be between 8-50 characters.<br>Containing upper and lower case letters,<br>numbers and a symbol.";
      errors[passwordSet] = false;
      return false;
    }
  }
}
