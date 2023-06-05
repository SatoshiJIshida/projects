<?php
include_once ("model/write.php");
$init = new Write();
$init->connect();
/**
 * Class View
 * UI and scripts for the view.
 * @author [Satoshi Ishida]
 */
class View {
    function view() { ?>
        <div id="container">
            <div id="topBar"><h3 class="title">File System</h3></div>
            <div class = "innerContainer">
                <form method="POST" id="formid">
                    <div class="search">
                        <label for="input">Enter search term:</label>
                        <input type="text" id="search" name="search" autocomplete="off"></input>
                        <button>Search</button>
                    </div>
                    <div class="outputContainer">
                        <p class="output" id="searchResult"></p>
                    </div>
                </form>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="text/javascript" src="controller/controller.js"></script>
        <script>
            const initController = new Controller();
            initController.handleSearch();
        </script>
        <?php
    }
}
?>