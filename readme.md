## The identical comparison will compare type and value.

$a = '42';
$b = 42;

if ($a !== $b) {
    // The expression is verified
}

================================================
## Function arguments (2 or fewer ideally)

class MenuConfig
{
    public $title;
    public $body;
    public $buttonText;
    public $cancellable = false;
}

$config = new MenuConfig();
$config->title = 'Foo';
$config->body = 'Bar';
$config->buttonText = 'Baz';
$config->cancellable = true;

function createMenu(MenuConfig $config): void
{
    // ...
}
-------------------------------------
## Functions should do one thing
This is by far the most important rule in software engineering. When functions do more than one thing, they are harder to compose, test, and reason about. When you can isolate a function to just one action, they can be refactored easily and your code will read much cleaner. If you take nothing else away from this guide other than this, you'll be ahead of many developers.

example for single purpose function 

function emailClients(array $clients): void
{
    $activeClients = activeClients($clients);
    array_walk($activeClients, 'email');
}

function activeClients(array $clients): array
{
    return array_filter($clients, 'isClientActive');
}

function isClientActive(int $client): bool
{
    $clientRecord = $db->find($client);

    return $clientRecord->isActive();
}

-----------------

Example #1 array_walk() example

<?php
$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");

function test_alter(&$item1, $key, $prefix)
{
    $item1 = "$prefix: $item1";
}

function test_print($item2, $key)
{
    echo "$key. $item2<br />\n";
}

echo "Before ...:\n";
array_walk($fruits, 'test_print');

array_walk($fruits, 'test_alter', 'fruit');
echo "... and after:\n";

array_walk($fruits, 'test_print');
?>

## Function names should say what they do

The best solution is move out the dependencies of parseBetterJSAlternative() function.

------------------------------------------------------------

## Don't use flags as function parameters

touch — Sets access and modification time of file
touch ( string $filename [, int $time = time() [, int $atime ]] ) : bool

Attempts to set the access and modification times of the file named in the filename parameter to the value given in time. Note that the access time is always modified, regardless of the number of parameters.

If the file does not exist, it will be created.

## Avoid Side Effects

## Encapsulate conditionals

Good:

if ($article->isPublished()) {
    // ...
}

## Avoid negative conditionals

## Avoid conditionals

This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything without an if statement?" The answer is that you can use polymorphism to achieve the same task in many cases. The second question is usually, "well that's great but why would I want to do that?" The answer is a previous clean code concept we learned: a function should only do one thing. When you have classes and functions that have if statements, you are telling your user that your function does more than one thing. Remember, just do one thing.

## Avoid type-checking (part 1)

function travelToTexas(Traveler $vehicle): void
{
    $vehicle->travelTo(new Location('texas'));
}

## Avoid type-checking (part 2)
function combine(int $val1, int $val2): int
{
    return $val1 + $val2;
}

## Remove dead code
## Make Objects have private/protected members

Good:

class Employee
{
    private $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$employee = new Employee('John Doe');
echo 'Employee name: '.$employee->getName(); // Employee name: John Doe

## Prefer composition over inheritance

You might be wondering then, "when should I use inheritance?" It depends on your problem at hand, but this is a decent list of when inheritance makes more sense than composition:

Your inheritance represents an "is-a" relationship and not a "has-a" relationship (Human->Animal vs. User->UserDetails).
You can reuse code from the base classes (Humans can move like all animals).
You want to make global changes to derived classes by changing a base class. (Change the caloric expenditure of all animals when they move).

## Avoid fluent interfaces

class Car
{
    private $make = 'Honda';
    private $model = 'Accord';
    private $color = 'white';

    public function setMake(string $make): void
    {
        $this->make = $make;
    }

    public function setModel(string $model): void
    {
        $this->model = $model;
    }

    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    public function dump(): void
    {
        var_dump($this->make, $this->model, $this->color);
    }
}

$car = new Car();
$car->setColor('pink');
$car->setMake('Ford');
$car->setModel('F-150');
$car->dump();

## Prefer final classes

interface Vehicle
{
    /**
     * @return string The color of the vehicle
     */
    public function getColor();
}

final class Car implements Vehicle
{
    private $color;
    
    public function __construct($color)
    {
        $this->color = $color;
    }
    
    /**
     * {@inheritdoc}
     */
    public function getColor() 
    {
        return $this->color;
    }
}

## SOLID

- Single Responsibility Principle
- Open/Closed Principle (OCP) :- This principle basically states that you should allow users to add new functionalities without changing existing code.
- Liskov Substitution Principle (LSP)

## Null Coalescing Operator

<?php
if(!isset($_GET['key'])) {
    $key = 'default-value';
} else {
    $key = $_GET['key'];
}

- instead of the above use below

<?php
$key = $_GET['key'] ?? 'default_value';



