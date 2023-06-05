<?php
/**
 * Class Read
 * Reads the data from the MySQL database.
 * @author [Satoshi Ishida]
 */
class Read {
    /**
     * @var
     */
    private $file = "/Users/satoshiishida/Sites/Recursive File Structure - PHP, JavaScript, SQL/data/data.csv";
    private $table = "files";

    /**
     * @param $userInput - the user's search term.
     * @return $line - the line/lines containing the search term (if any).
     */
    public function getData($userInput) {
        // For application.
        require_once ("../db/dbconfig.php");

        // For testing.
        // require ("db/dbconfig.php");

        try {
            $connect = new PDO($sql, $username, $password);
        }
        catch(PDOException $pe) {
            die("Connection to $dbname failed: " . $pe->getType());
        }

        $query1 = "
            SELECT * FROM `$this->table`;
        ";

        try {
            $retrieve1 = $connect->prepare($query1);
            $colCount = $retrieve1->columnCount();
            $retrieve1->execute();
            $colCount = $retrieve1->columnCount();
        }
        catch(Exception $e) {
            echo "Server currently unavailable.";
        }
        // Process the column count to be a string with commas in SQL format.
        $processedCols = "";
        for ($i = 1;$i <= $colCount - 1;$i++) { // minus 1 to ignore id column.
            if ($i < $colCount - 1) {
                $processedCols .= "col" . $i . ",";
            } else {
                $processedCols .= "col" . $i; // final column, no comma.  
            }
        }
        // Now we can query all existing columns.
        $query2 = "
            SELECT * FROM `$this->table`
            WHERE ? IN ($processedCols);
        ";
        $userInput = "\\" . $userInput; // add in the '\' for the user, for the directory search.
        $line = "";

        try {
            /**
             * Preparing SQL statements means the query can be used repeatedly without re-compiling
             * and stops SQL injection attacks.
             */
            $retrieve = $connect->prepare($query2);
            $retrieve->execute(array(
                $userInput
            ));
            while ($result = $retrieve->fetch(PDO::FETCH_ASSOC)) {
                foreach ($result as $key => $value) {
                    if ($value !== $result["id"]) {
                        $line .= $value; // make lines without row ids.
                        if ($key === "col" . $colCount - 1) { // -1 to ignore id column to get final column name.
                            $line .= "<br>"; // newline each directory from the farthest column.    
                        }
                    }
                }
            }
        }
        catch(Exception $e) {
            echo "Error please try again.";
        }

        $connect = null; // close the connection when not in use.
        return $line;
    }
}
?>