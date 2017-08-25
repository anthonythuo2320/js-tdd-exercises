/**
 * Even a simple function like addNumber could have bugs
 * Add tests to prove that our adder works
 *         add(1, 2)  // --> 3
 *         add(2, 1, 3)  // --> 6
 * Consider Edge Cases:
 *      - What if we pass only one number? no numbers?
 *      - How can we trust the input of the function??
 *          - Add a Test passing a string instead of a number i.e. add('1', 2) - what happens? Is that what you expect
 *          - Improve the function to handle this case
 *      - Any more Edge cases?
 *      - Check JEST documentation and use methods other than toBe()
 * 
 */

function add() {
    // this line converts whatever is passed to the function into an array
    // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments);
    var result = 0;
    for(var i = 0; i< args.length; i++){
        result += args[i];
    }
    return result;
}

/*
This is a sample test - remove it and write AT LEAST two more tests to prove the function works as expected */ 
test('add should add two numbers', function(){
    var result = add(1, 2);
    expect(result).toEqual(3);
});
test('add should add two numbers', function(){
    var result = add(1, 2, 5, 4);
    expect(result).toEqual(12);
});
