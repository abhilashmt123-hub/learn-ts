/*In TS tuples are a special type of array that allows you to define a fixed number of elements with specific types. They are useful when you want to group related values together, but each value may have a different type.
Its of fixed length and the types of its elements are known at compile time. Tuples can be defined using the following syntax:
```typescript
let tuple: [string, number] = ["Hello", 42];
```
In this example, `tuple` is defined as a tuple with two elements: the first element is of type `string`, and the second element is of type `number`. You can access the elements of a tuple using their index, just like an array:
```typescript
console.log(tuple[0]); // Output: "Hello"
console.log(tuple[1]); // Output: 42
```
length and order of elements in a tuple is fixed, and you cannot add or remove elements from it. However, you can update the values of the existing elements:
```typescript
tuple[0] = "World"; // This is allowed, updating the first element
tuple[1] = 100; // This is allowed, updating the second element
console.log(tuple); // Output: ["World", 100]
```
at the time of declaration, you can also use optional elements in a tuple by using the `?` operator. For example:
```typescript
let optionalTuple: [string, number?] = ["Hello"];
console.log(optionalTuple); // Output: ["Hello"]
optionalTuple[1] = 42; // This is allowed, adding the second element
console.log(optionalTuple); // Output: ["Hello", 42]
```
during initialization, you can also use rest elements in a tuple by using the `...` operator. For example:
```typescript
let restTuple: [string, ...number[]] = ["Hello", 1, 2, 3];
console.log(restTuple); // Output: ["Hello", 1, 2, 3]
restTuple.push(4); // This is allowed, adding another number to the tuple
console.log(restTuple); // Output: ["Hello", 1, 2, 3, 4]
```

tuple arrays can also be used as function parameters and return types. For example:
```typescript
function processTuple(tuple: [string, number]): string {
    return `The string is: ${tuple[0]} and the number is: ${tuple[1]}`;
}

const result = processTuple(["Hello", 42]);
console.log(result); // Output: "The string is: Hello and the number is: 42"
function createTuple(): [string, number] {
    return ["World", 100];
}

const newTuple = createTuple();
console.log(newTuple); // Output: ["World", 100]
```
*/