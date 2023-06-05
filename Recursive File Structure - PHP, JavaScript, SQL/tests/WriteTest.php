<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require 'vendor/autoload.php';

/**
 * 100% pass.
 */
final class WriteTest extends TestCase
{   
    /**
     * Write connects to the database, makes columns for data in the database,
     * then the data is written into the columns in the database.
     * 
     * We test that the write was successful or unsuccessful.
     */
    public function testCanBeCreatedFromWriteData(): void
    {
        $flag = true;
        $this->assertEquals(
            true,
            (new Write)->writeData($flag) // writeData() must be temporarily made public for the test.
        );

        $this->assertTrue((new Write)->writeData($flag));
    }

    public function testCannotBeCreatedFromWriteData(): void
    {
        $flag = false;
        $this->assertEquals(
            false,
            (new Write)->writeData($flag)
        );
    }
}