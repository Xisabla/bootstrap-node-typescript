/**
 * Sample typescript file
 *
 * Main entry point for the application
 */

//=============================================================================
// Classes
//=============================================================================

/**
 * Example of a class with a protected method
 */
class Foo {
    constructor() {
        this.sayHello();
    }

    /**
     * Say hello
     */
    protected sayHello(): void {
        console.log("Hello");
    }
}

/**
 * Example of a class that extends Foo and overrides the sayHello method
 */
class Bar extends Foo {
    protected override sayHello(): void {
        console.log("World");
    }
}

//=============================================================================
// Main
//=============================================================================

(() => {
    new Bar();

    // Keep the process running, allow testing dev mode
    while (true) {}
})();
