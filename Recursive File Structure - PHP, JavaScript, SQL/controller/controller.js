/**
 * Controller for taking input from view.php,
 * Enabling communication between JavaScript Frontend and PHP Backend logic.
 * @author [Satoshi Ishida]
 */
class Controller {
  /**
   * Handle Search for user input.
   */
  handleSearch() {
    $(document).ready(function () {
      $("#formid").submit(function (event) {
        const formData = {
          search: $("#search").val(),
        };

        $.ajax({
          type: "POST",
          url: "model/search.php",
          data: formData,
          dataType: "json",
          encode: true,
        })
          .done(function (data) {
            if (data.success) {
              document.getElementById("searchResult").innerHTML = data.result;
            }
          })
          .fail(function () {
            alert("Sorry. Server unavailable.");
          });
        event.preventDefault();
      });
    });
  }
}