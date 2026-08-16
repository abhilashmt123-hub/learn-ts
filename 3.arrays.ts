/*In TS arrays can be defined in several ways:
1. Using the Array<T> syntax:
   ```typescript
   let arr: Array<number> = [1, 2, 3];
   ```
2. Using the T[] syntax:
   ```typescript
   let arr: number[] = [4, 5, 6];
   ```
3. Using a union type for mixed arrays:
   ```typescript
   let arr: (string | number)[] = ["Hello", 42, "World"];
   ```

To update an array, you can use methods like `push`, `pop`, `shift`, `unshift`, and others. For example:
```typescript
let arr: number[] = [1, 2, 3];
arr.push(4); // Adds 4 to the end of the array
arr.pop(); // Removes the last element (4) from the array
arr.shift(); // Removes the first element (1) from the array
arr.unshift(0); // Adds 0 to the beginning of the array

for generic arrays, you can use the `Array<T>` syntax or the `T[]` syntax. For example:
```typescript
let genericArr: Array<string> = ["Hello", "World"];
let genericArr2: string[] = ["TypeScript", "is", "awesome"];
You can also use the `map`, `filter`, and `reduce` methods to manipulate arrays in a functional programming style. For example: 
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let squaredNumbers: number[] = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
let evenNumbers: number[] = numbers.filter(num => num % 2 === 0); // [2, 4]
let sum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
```
Iterating over arrays can be done using `for`, `for...of`, and `forEach` loops. For example:
```typescript

let fruits: string[] = ["apple", "banana", "cherry"];

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using a for...of loop
for (const fruit of fruits) {
    console.log(fruit);
}

// Using forEach method
fruits.forEach(fruit => console.log(fruit));
*/