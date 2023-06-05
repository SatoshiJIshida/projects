<?php
/**
 * Class View
 * UI and scripts for the view.
 * @author [Satoshi Ishida]
 */
class View {
    function view() { ?>
            <div id ="container">
                <div id="topBar">
                    <h3>Multi Contact Form</h3>
                    <button onclick="initValidation.validation()">Validate</button>
                    <button onclick="document.getElementById('formid').reset(); document.getElementById('formid2').reset()" value="Reset form">Clear</button>
                </div>
                <form id="formid" method="POST" name="form" autocomplete="off" enctype="multipart/form-data">
                    <div class="form">
                        <label>Name:</label>
                        <input type="text" id="username" name="username"></input>
                        <p id="nameError"></p>
                        <label>Email:</label>
                        <input type="text" id="email" name="email"></input>
                        <p id="emailError"></p>
                        <label>Phone:</label>
                        <input type="text" id="phone" name="phone"></input>
                        <p id="phoneError"></p>
                        <button>Save</button>
                    </div>
                </form>
                <div class="line"></div>
                <form id="formid2" method="POST" name="form2" autocomplete="off" enctype="multipart/form-data">
                    <div class="form">
                        <label>Name:</label>
                        <input type="text" id="username2" name="username2"></input>
                        <p id="nameError2"></p>
                        <label>Email:</label>
                        <input type="text" id="email2" name="email2"></input>
                        <p id="emailError2"></p>
                        <label>Phone:</label>
                        <input type="text" id="phone2" name="phone2"></input>
                        <p id="phoneError2"></p>
                        <button>Delete</button>
                    </div>
                </form>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script type="text/javascript" src="controller/controller.js"></script>
            <script type="text/javascript" src="model/validation.js"></script>
            <script>
                const initController = new Controller();
                initController.handleSave();
                initController.handleDel();
                const initValidation = new Validation();
            </script>
        <?php
    }
}
?>