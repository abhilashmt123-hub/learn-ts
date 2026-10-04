1. Named functions
This is the function declaration syntax in TypeScript. Named functions are defined using the `function` keyword followed by a name, a list of parameters, and a return type. Here's an example of a named function that takes two numbers as parameters and returns their sum:
```typescript
function add(a: number, b: number): number {
    return a + b;
}
// In this example, the function `add` takes two parameters `a` and `b`, both of type `number`, and returns their sum, which is also of type `number`. The return type is explicitly specified after the parameter list using a colon followed by the type.
// Named functions can be called by their name, and they can be used before they are defined in the code due to function hoisting. Here's how you can call the `add` function:
let result: number = add(5, 10);
console.log(result); // Output: 15  
```

2. Anonymous functions
Anonymous functions, also known as function expressions, are functions that do not have a name. They are often used as arguments to other functions or assigned to variables. Here's an example of an anonymous function that takes two numbers as parameters and returns their sum:
```typescript
const add = function(a: number, b: number): number {
    return a + b;
};
// In this example, the anonymous function is assigned to the variable `add`. The function takes two parameters `a` and `b`, both of type `number`, and returns their sum, which is also of type `number`. The return type is explicitly specified after the parameter list using a colon followed by the type.
// Anonymous functions can be called using the variable they are assigned to. Here's how you can call the anonymous function:
let result: number = add(5, 10);
console.log(result); // Output: 15
```

3. Arrow functions
Arrow functions, also known as lambda functions, provide a more concise syntax for writing functions in TypeScript. They are defined using the `=>` syntax and can have implicit return values. Here's an example of an arrow function that takes two numbers as parameters and returns their sum:
```typescript
const add = (a: number, b: number): number => {
    return a + b;
};
// In this example, the arrow function is assigned to the variable `add`. The function takes two parameters `a` and `b`, both of type `number`, and returns their sum, which is also of type `number`. The return type is explicitly specified after the parameter list using a colon followed by the type.
// Arrow functions can be called using the variable they are assigned to. Here's how you can call the arrow function:
let result: number = add(5, 10);
console.log(result); // Output: 15
// Arrow functions also support implicit return values, which means that if the function body consists of a single expression, you can omit the curly braces and the `return` keyword. Here's an example:
const add = (a: number, b: number): number => a + b;
// In this example, the arrow function takes two parameters `a` and `b`, both of type `number`, and returns their sum. The return type is explicitly specified after the parameter list using a colon followed by the type. The function body consists of a single expression, so the curly braces and `return` keyword are omitted.    

When creating the arrow function inside a class, we can use the `this` keyword to refer to the instance of the class. Here's an example:
```typescript
class Calculator {
    private factor: number;

    constructor(factor: number) {
        this.factor = factor;
    }

    multiply = (a: number): number => {
        return a * this.factor;
    };
}

const calculator = new Calculator(2);
let result: number = calculator.multiply(5);
console.log(result); // Output: 10
// No need to provide let or const before the multiply method since it is already defined as a class property.
// In this example, the `multiply` method is defined as an arrow function inside the `Calculator` class. The `this` keyword refers to the instance of the class, allowing us to access the `factor` property. When we create an instance of the `Calculator` class with a factor of 2 and call the `multiply` method with an argument of 5, it returns 10 (5 * 2).


4. Optional parameters
In TypeScript, you can define optional parameters in functions by using a question mark (`?`) after the parameter name. Optional parameters allow you to call a function without providing a value for that parameter. Here's an example of a function with an optional parameter:
```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}
// In this example, the `greet` function takes two parameters: `name` of type `string` and an optional parameter `greeting` of type `string`. If the `greeting` parameter is provided, it will be used in the returned message; otherwise, a default greeting will be used.
// Here's how you can call the `greet` function with and without the optional parameter:
let message1: string = greet("Alice", "Good morning");
console.log(message1); // Output: "Good morning, Alice!"

let message2: string = greet("Bob");
console.log(message2); // Output: "Hello, Bob!"
```
5. Default parameters
In TypeScript, you can define default parameters in functions by assigning a default value to the parameter in the function signature. Default parameters allow you to call a function without providing a value for that parameter, and the default value will be used instead. Here's an example of a function with a default parameter:
```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
// In this example, the `greet` function takes two parameters: `name` of type `string` and a parameter `greeting` of type `string` with a default value of "Hello". If the `greeting` parameter is not provided when calling the function, the default value will be used.
// Here's how you can call the `greet` function with and without the default parameter:
let message1: string = greet("Alice", "Good morning");
console.log(message1); // Output: "Good morning, Alice!"

let message2: string = greet("Bob");
console.log(message2); // Output: "Hello, Bob!" 
```

6. Rest parameters
In TypeScript, you can define rest parameters in functions by using the `...` syntax before the parameter name. Rest parameters allow you to pass an arbitrary number of arguments to a function, which will be collected into an array. Here's an example of a function with rest parameters:
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
// In this example, the `sum` function takes a rest parameter `numbers`, which is an array of type `number`. The function uses the `reduce` method to calculate the sum of all the numbers in the array and returns the total.
// Here's how you can call the `sum` function with different numbers of arguments:
let total1: number = sum(1, 2, 3);
console.log(total1); // Output: 6

let total2: number = sum(4, 5, 6, 7);
console.log(total2); // Output: 22

let total3: number = sum();
console.log(total3); // Output: 0
```

7. Function Overloading
In TypeScript, function overloading allows you to define multiple function signatures for a single function implementation. This enables you to create functions that can accept different types or numbers of parameters. Here's an example of function overloading:
```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}
// In this example, the `add` function has two overloads: one that takes two numbers and returns a number, and another that takes two strings and returns a string. The implementation of the function uses the `any` type to handle both cases.
// Here's how you can call the overloaded `add` function:
let result1: number = add(5, 10);
console.log(result1); // Output: 15

let result2: string = add("Hello, ", "World!");
console.log(result2); // Output: "Hello, World!"
// Function overloading allows you to provide different behaviors for the same function name based on the types of the arguments passed to it. This can make your code more flexible and easier to read.
```

8. Higher-order functions
Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are a powerful feature of TypeScript and JavaScript, allowing for more abstract and reusable code. Here's an example of a higher-order function that takes a function as an argument:
```typescript
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
// In this example, the `applyOperation` function takes three parameters: two numbers `a` and `b`, and a function `operation` that takes two numbers and returns a number. The `applyOperation` function calls the `operation` function with the provided numbers and returns the result.
// Here's how you can call the `applyOperation` function with different operations:
let sumResult: number = applyOperation(5, 10, (x, y) => x + y);
console.log(sumResult); // Output: 15

let productResult: number = applyOperation(5, 10, (x, y) => x * y);
console.log(productResult); // Output: 50
// Higher-order functions allow you to create more abstract and reusable code by passing functions as arguments or returning functions as results. This can lead to more modular and maintainable code, as you can separate the logic of different operations into their own functions and pass them around as needed.
```

