/*In TS there are different data types that can be used to define the type of a variable, function. The main data types in TypeScript are:
1. **Primitive Types**: These are the most basic data types in TypeScript, including:
   - `number`: Represents numeric values, both integers and floating-point numbers.
   - `string`: Represents textual data.
   - `boolean`: Represents true/false values.
   - `null`: Represents the intentional absence of any object value.
   - `undefined`: Represents a variable that has been declared but not assigned a value.
   - `symbol`: Represents a unique and immutable primitive value, often used as object property keys.
            example:
            ```typescript
            let num: number = 42;
            let str: string = "Hello, TypeScript!";
            let isTrue: boolean = true;
            let nothing: null = null;
            let notDefined: undefined = undefined;
            let uniqueSymbol: symbol = Symbol("unique");
            ```

2. **Object Types**: These include more complex data structures, such as:
   - `object`: Represents any non-primitive type, including arrays, functions, and objects.
   - `Array<T>`: Represents a collection of elements of type T.
   - `Tuple`: Represents an array with a fixed number of elements of specific types.
   - `Enum`: Represents a set of named constants.
            example:
            ```typescript
            let obj: object = { key: "value" };
            let arr: Array<number> = [1, 2, 3];
            let arr2: number[] = [4, 5, 6];
            let arr3: (string | number)[] = ["Hello", 42, "World"];
            let tuple: [string, number] = ["Hello", 42];
            enum Color { Red, Green, Blue }
            let c: Color = Color.Green;
            ``` 

3. **Special Types**: These include:
   - `any`: A type that can represent any value, effectively opting out of type checking.
   - `unknown`: A type-safe counterpart to `any`, requiring type assertions or checks before usage.
   - `void`: Represents the absence of a value, typically used as the return type for functions that do not return a value.
   - `never`: Represents values that never occur, often used for functions that throw exceptions or have infinite loops.
   example:
   ```typescript
   let anything: any = 42;
   anything = "Now I'm a string!";
    
    let unknownValue: unknown = 10;
    if (typeof unknownValue === "number") {
        let num: number = unknownValue; // Type assertion is required
    }
    
    function logMessage(): void {
        console.log("This function returns nothing.");
    }
    
    function throwError(): never {
        throw new Error("This function never returns.");
    }
   ```  

4. **Type Aliases and Interfaces**: These allow you to create custom types and define the shape of objects, providing more structure and clarity in your code.
    example:
    ```typescript
    type Point = {
        x: number;
        y: number;
    };
    
    interface Person {
        name: string;
        age: number;
    }
    
    const point: Point = { x: 10, y: 20 };
    const person: Person = { name: "Alice", age: 30 };
    ``` 

5. **Union and Intersection Types**: These allow you to combine multiple types into one, enabling more flexible type definitions.
    example:
    ```typescript
    type StringOrNumber = string | number; // Union type
    let value: StringOrNumber;
    value = "Hello"; // valid
    value = 42; // valid
    
    interface A {
        a: string;
    }
    
    interface B {
        b: number;
    }
    
    type AandB = A & B; // Intersection type
    const obj: AandB = { a: "Hello", b: 42 }; // valid
    ```

6. **Literal Types**: These allow you to specify exact values a variable can hold, providing more precise type checking.
    example:
    ```typescript
    type Direction = "up" | "down" | "left" | "right";
    let move: Direction;
    move = "up"; // valid
    move = "down"; // valid
    // move = "forward"; // error, not assignable to type 'Direction'
    ```

In summary, TypeScript provides a rich set of data types that help developers write safer and more maintainable code by enforcing type constraints and reducing runtime errors.
*/

function add1(a,b){
    return a+b;
}

function add2(a:number,b:number):number{
    return a+b;
}

console.log(add1(5,10));  -- allowed
console.log(add1('abc','abc')); -- allowed
console.log(add2(5,10)); -- allowed
console.log(add2('abc','abc')); -- error