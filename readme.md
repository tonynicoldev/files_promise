# Various promise examples
These demos show how callbacks lock you into writing all code associated with any callback data within the callback. But promises are not a silver bullet and although more readable you still end up in a similar position of all code associated with async data being locked into the .then() or async/await try block.

An approach to make the code look a bit more like traditional sequential code is proposed by emulating a main program like in C

The demos use asynchronous file read as the example. Although the Node fs library now supports promises, it is instructional to create your own to better understand them in a realistic setting

## traditional_fail
This demonstrates the original approach to reading a file asynchronously. It uses fs.readFile using a callback.  This is fine but you eed to write all code dependant on the file data, in the callback. If you call other functions in that code which also use callbacks, the code can get complex quite quickly descending into callback hell. Promises have been introduced to avoid this.

## promise1_fail
This function uses async/await when reading a file using a manually created promise wrapped around the fs.readFile callback-based approach

The context of the fail is that some students will think that the asynchronously retrieved data will be available in the main thread - i.e. in the console.log as shown. However, the console.log has already been executed before the data becomes available.  Some may even create a file scope variable to try to make it available and run into timing issues.

The example works fie as long as you provide all the code relying on file data, inside the getLog function which makes the code structure clunky

## promise_fail2
This is the same functionality as promise_fail1, but demonstrates using .then()

This approach works perfectly well as long as you put all code dependent on the file data, in the .then() callback

## promise_main
This code wraps the whole program in an async function so asynchronous data based on promises used within it is available for the whole program. Using async/await also enables the code to be written in a more sequential manner

This demo reads two files to demonstrate the sequential construct.

Note, the outer console.log, i.e., code outside main() will be executed out of sequence if you choose to put some there.

## Summary
You can use any of these approaches effectively, it's up to you and the problem you are trying to solve. Having so many options available add more  programming tools to your toolbox to be used when appropriate
