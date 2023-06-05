<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require 'vendor/autoload.php';

/**
 * 100% pass.
 */
final class WriteTest extends TestCase
{   
    /**
     * The form tests itself with error messages on user input using both validation files.
     * The user is forced to submit correct input.
     * 
     * We test that the data can be saved and deleted from the text file.
     * 
     * Tests for save and delete can only be carried out separately e.g.
     * If you run testCanBeCreatedFromSave() with POST data and test for testCannotBeCreatedFromSave()
     * then the test for failure wont work because we have POST data.
     */
    public function testCanBeCreatedFromFile(): void
    {
        $this->assertFileExists('/Users/satoshiishida/Sites/Form Validation and Write - PHP and JavaScript/data/data.txt');
        $this->assertFileIsWritable('/Users/satoshiishida/Sites/Form Validation and Write - PHP and JavaScript/data/data.txt');
    }

    public function testCanBeCreatedFromSave(): void
    {
        $_POST["username"] = 'one';
        $_POST["email"] = 'one@mail.com';
        $_POST["phone"] = '00000000000';

        $this->assertEquals(
            true,
            (new Save)->save()
        );

        $this->assertTrue((new Save)->save());
    }

    public function testCannotBeCreatedFromSave(): void
    {
        $this->assertEquals(
            false,
            (new Save)->save()
        );
    }

    public function testCanBeCreatedFromDelete(): void
    {
        $_POST["username"] = 'one';
        $_POST["email"] = 'one@mail.com';
        $_POST["phone"] = '00000000000';

        $this->assertEquals(
            true,
            (new Delete)->delete()
        );

        $this->assertTrue((new Delete)->delete());
    }

    public function testCannotBeCreatedFromDelete(): void
    {
        $this->assertEquals(
            false,
            (new Delete)->delete()
        );
    }
}