In TS we can use conditional statements to control the flow of our program based on certain conditions. The most common conditional statement is the `if...else` statement, which allows us to execute different blocks of code based on whether a condition is true or false.

Here's a basic example of an `if...else` statement in TypeScript:
```typescript
let age: number = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```
In addition to the `if...else` statement, TypeScript also supports the ternary operator, which is a shorthand way of writing conditional statements. The ternary operator takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
Here's an example of using the ternary operator in TypeScript:
```typescript
let age: number = 18;
let message: string = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message);
```
