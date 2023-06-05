/**
 * Controller for taking input from view.php,
 * Enabling communication between JavaScript Frontend and PHP Backend logic.
 * @author [Satoshi Ishida]
 */
class Controller {
  /**
   * Validate and save input.
   */
  handleSave() {
    $(document).ready(function () {
      $("#formid").submit(function (event) {
        const formData = {
          username: $("#username").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
        };

        $.ajax({
          type: "POST",
          url: "model/validation.php",
          data: formData,
          dataType: "json",
          encode: true,
        })
          .done(function (data) {
            if (!data.success) {
              if (data.errors.username) {
                document.getElementById("nameError").innerHTML =
                  data.errors.username;
              } else {
                document.getElementById("nameError").innerHTML = "";
              }

              if (data.errors.email) {
                document.getElementById("emailError").innerHTML =
                  data.errors.email;
              } else {
                document.getElementById("emailError").innerHTML = "";
              }

              if (data.errors.phone) {
                document.getElementById("phoneError").innerHTML =
                  data.errors.phone;
              } else {
                document.getElementById("phoneError").innerHTML = "";
              }
            } else if (data.success) {
              document.getElementById("nameError").innerHTML = "";
              document.getElementById("emailError").innerHTML = "";
              document.getElementById("phoneError").innerHTML = "";
            }
          })
          .fail(function () {
            alert("Sorry. Server unavailable.");
          });
        event.preventDefault();
      });
    });
  }

  /**
   * Delete input if it exists in the text file.
   */
  handleDel() {
    $(document).ready(function () {
      $("#formid2").submit(function (event) {
        const formData = {
          username: $("#username2").val(),
          email: $("#email2").val(),
          phone: $("#phone2").val(),
        };

        $.ajax({
          type: "POST",
          url: "model/delete.php",
          data: formData,
          dataType: "json",
          encode: true,
        })
          .done(function () {
          })
          .fail(function () {
            console.log("No more entries found."); // this shows on delete because the entries were removed and no more are found.
            document.getElementById("formid2").reset();
          });
        event.preventDefault();
      });
    });
  }
}