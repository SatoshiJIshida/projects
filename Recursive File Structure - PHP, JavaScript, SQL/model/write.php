<?php
/**
 * Class Write
 * Recursively creates MySQL table columns and fills them with directories from the data/data.csv
 * @author [Satoshi Ishida]
 */
class Write {
    /**
     * @var
     */
    private $file = "/Users/satoshiishida/Sites/Recursive File Structure - PHP, JavaScript, SQL/data/data.csv";
    private $table = "files";

    public function connect() {
        require_once ("db/dbconfig.php");

        try {
            $connect = new PDO($sql, $username, $password);
            $new = "
                DROP TABLE `$this->table`;
                CREATE TABLE `$this->table`(
                    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
                );
            ";
            $connect->query($new);
            $this->makeColumns($connect);
        }
        catch(PDOException $pe) {
            die("Connection to $dbname failed: " . $pe->getType());
        }
    }

    /**
     * @param $connect - connection to the database.
     */
    private function makeColumns($connect) {
        $lines = [];
        $open = fopen($this->file, "r");

        while (!feof($open)) {
            $line = fgetcsv($open);
            array_push($lines, $line);
        }

        fclose($open);
        $maxLine = max($lines);
        $findMax = count($maxLine);

        $nextColumn = "";
        $next = "col";
        $prevColumn = "id";
        $columnIncrease = 1;

        while ($findMax !== 1) { // to 1 because we ignore 'id' column.
            $nextColumn = $next . strval($columnIncrease);
            $update = "ALTER table $this->table
                ADD COLUMN $nextColumn varchar(255) AFTER $prevColumn;
            ";
            try {
                $connect->query($update);
                $prevColumn = $nextColumn;
                $columnIncrease += 1;
                $findMax -= 1;
                $flag = true;
            }
            catch(Exception $e) {
                $flag = false;
                break;
            }
        }

        $connect = null;

        if ($flag === true) {
            $this->writeData($flag);
        }
    }

    /**
     * @param $flag - flag is set to true when we want to write data to the newly made columns.
     */
    private function writeData($flag) {
        require ("db/dbconfig.php");

        $write = <<<eof
            LOAD DATA LOCAL
                INFILE '$this->file'
                INTO TABLE $this->table
                FIELDS TERMINATED BY ','
        eof;

        try {
            if ($flag === true) { // if flag is true because we made columns for the data to write into.
                system("mysql -u $username --password=$password -h $host --local_infile=1 -e \"$write\" $dbname");
                // echo "Write to database successful."."<br>";
                return true;
            }
        } catch(Exception $e) {
            echo "Write not successful: " . $e->getType();
            return false;
        }
    }
}
?>