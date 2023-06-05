<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require 'vendor/autoload.php';

/**
 * 100% pass.
 */
final class ReadTest extends TestCase
{   
    /**
     * If there is a Search term, then it calls Read.
     * Test that a user input returns the correct result.
     * Must be based on what is in the csv file.
     */
    public function testCanBeCreatedFromGetData(): void
    {
        $this->assertEquals(
            'C:\Documents\Word\Work\Current\1\2\3<br>',
            (new Read)->getData('current')
        );
        $this->assertIsString((new Read)->getData('current'));

        $this->assertEquals(
            'C:\Documents\Software Engineer\Projects\AnnualReport.xls<br>',
            (new Read)->getData('software engineer')
        );
        $this->assertIsString((new Read)->getData('software engineer'));

        $this->assertEquals(
            'C:\Documents\Salary\Accounting\Accounting.xls<br>',
            (new Read)->getData('accounting')
        );
        $this->assertIsString((new Read)->getData('accounting'));
    }

    public function testFilePath(): void
    {
        $this->assertIsReadable('/Users/satoshiishida/Sites/Recursive File Structure - PHP, JavaScript, SQL/data/data.csv');
    }

    /**
     * Do not need to test for error because the user can type anything as input.
     */
}