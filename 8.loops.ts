// In TypeScript, loops are used to repeatedly execute a block of code. There are several types of loops available, including `for`, `while`, and `do...while` loops.
// For example, a `for` loop is commonly used when the number of iterations is known beforehand. Here's a basic example of a `for` loop in TypeScript:
```typescript
for (let i: number = 0; i < 5; i++) {
    console.log(`Iteration ${i
}`);
}
```
// for in loop is used to iterate over the properties of an object. Here's an example:
```typescript
const person = { name: "John", age: 30, city: "New York" };

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
```
for of loop is used to iterate over the values of an iterable object, such as an array. Here's an example:
```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}
```

// A `while` loop is used when the number of iterations is not known in advance and depends on a condition. Here's an example of a `while` loop:   
```typescript
let count: number = 0;
while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}
```
// In this example, the loop will continue to execute as long as the condition `count < 5` is true. The value of `count` is incremented in each iteration.

// A `do...while` loop is similar to a `while` loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. Here's an example of a `do...while` loop:    
```typescript
let num: number = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 5);
 ```
// In this example, the loop will execute at least once, and then continue to execute as long as the condition `num < 5` is true.

// In summary, loops in TypeScript provide a way to execute code repeatedly based on certain conditions, allowing for efficient handling of repetitive tasks.
