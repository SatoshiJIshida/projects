<?php
/**
 * Class Search
 * Gets data using Read().
 * @author [Satoshi Ishida]
 */
class Search {
    /**
     * @var
     */
    private $data = [];

    public function search() {
        if (isset($_POST["search"])) {
            $this->data["success"] = true;
            include_once ("read.php");
            $init = new Read();
            $extract = $init->getData($_POST["search"]);
            $this->data["result"] = $extract;
        }
        echo json_encode($this->data);
    }
}
$init = new Search();
$init->search();
?>