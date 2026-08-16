# TypeScript Learning Series

This repository contains short TypeScript examples and notes to help you revise core language features in order.

## Setup

Recommended: install Node.js via `nvm` (keeps versions manageable):

```bash
# install nvm (if you don't have it)
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# then reload your shell and install Node LTS
nvm install --lts
npm install -g typescript tsx
```

Alternative (use `npm`/system package manager):

```bash
# compile with TypeScript compiler
tsc 1.variables.ts
# then run the output JavaScript
node 1.variables.js

# or run TypeScript files directly using tsx (recommended for small experiments)
npx tsx 1.variables.ts
```

## Files (in order)

The files in this project are numbered to indicate the learning order:

- `1.variables.ts` — variables (`var`, `let`, `const`)
- `2.datatypes.ts` — TypeScript data types, special types, unions, interfaces
- `3.arrays.ts` — arrays, common methods, iteration
- `4.tuples.ts` — tuples, fixed-length arrays and patterns
- `5.enums.ts` — numeric, string, and heterogeneous enums

Below are concise notes and examples you can use to revise each topic.

---

## Variables

TypeScript supports `var`, `let`, and `const`.

- `var` is function-scoped and hoisted; it may be re-declared in the same scope.
- `let` is block-scoped; it can be updated but not re-declared in the same block.
- `const` is block-scoped and cannot be reassigned; objects/arrays declared with `const` can still have their contents mutated.

Examples:

```typescript
function exampleVar() {
  if (true) {
    var x = 10;
    var x = 20; // re-declare allowed
    x = 30; // update allowed
    var y;
  }
  console.log(x); // 30
  console.log(y); // undefined (hoisted)
}

function exampleLet() {
  if (true) {
    let x = 10;
    // let x = 20; // error: cannot re-declare in same block
    x = 30; // update allowed
  }
  // console.log(x); // error: x not accessible here
}

function exampleConst() {
  const x = 10;
  // x = 20; // error: reassignment

  const obj = { a: 1 };
  obj.a = 2; // allowed: mutating contents

  const arr = [1, 2, 3];
  arr.push(4); // allowed
}
```

---

## Data Types

Core primitive types: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`.

Object types: `object`, arrays (`T[]` or `Array<T>`), tuples, enums.

Special and structural types:

- `any` — opt out of checking
- `unknown` — safer alternative to `any` (requires type checks)
- `void` — absence of a return value
- `never` — indicates unreachable code (throws or infinite loop)
- type aliases and `interface` for shapes
- union (`A | B`) and intersection (`A & B`) types

Examples:

```typescript
let num: number = 42;
let str: string = "Hello, TypeScript!";
let isTrue: boolean = true;

type Point = { x: number; y: number };
interface Person { name: string; age: number }

function add1(a, b) {
  return a + b; // no static checking
}

function add2(a: number, b: number): number {
  return a + b; // types enforced
}

console.log(add1(5, 10)); // allowed
console.log(add1('a', 'b')); // allowed (runtime concatenation)
console.log(add2(5, 10)); // allowed
// console.log(add2('a', 'b')); // compile error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

## Arrays

Array syntax options:

- `Array<T>` (generic)
- `T[]` (shorthand)
- union elements: `(string | number)[]`

Common methods: `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, `forEach`.

Examples:

```typescript
let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let mixed: (string | number)[] = ['Hello', 42];

arr.push(4);
arr.pop();
arr.shift();
arr.unshift(0);

const numbers: number[] = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n); // [1,4,9,16,25]
const evens = numbers.filter(n => n % 2 === 0); // [2,4]
const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 15

for (const v of ['apple', 'banana']) console.log(v);
```

---

## Tuples

Tuples are fixed-length arrays with known element types:

```typescript
let tuple: [string, number] = ["Hello", 42];
console.log(tuple[0]); // "Hello"
console.log(tuple[1]); // 42

tuple[0] = "World"; // allowed
tuple[1] = 100; // allowed

// Optional elements
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple[1] = 42; // allowed

// Rest elements
let restTuple: [string, ...number[]] = ["Hello", 1, 2, 3];
restTuple.push(4); // allowed

function processTuple(t: [string, number]): string {
  return `The string is: ${t[0]} and the number is: ${t[1]}`;
}
```

---

## Enums

Three common enum patterns:

1. Numeric enums (default): auto-incremented numeric values.
2. String enums: explicit string values.
3. Heterogeneous enums: mix of numbers and strings (use sparingly).

Examples:

```typescript
enum Direction { Up, Down, Left, Right }
console.log(Direction.Up); // 0

enum Status { Active = 1, Inactive = 2, Pending = 3 }
console.log(Status.Active); // 1

function getValue(): number { return 5; }
enum CustomEnum { First = getValue(), Second, Third }
console.log(CustomEnum.First); // 5

enum StringDir { Up = "UP", Down = "DOWN" }
console.log(StringDir.Up); // "UP"

enum Mixed { No = 0, Yes = "YES" }
console.log(Mixed.No, Mixed.Yes);
```

---

## How to use these files

- Run a single file with `npx tsx <file.ts>` (no compile step required).
- Compile with `tsc <file.ts>` to produce `<file>.js` and run with `node`.
- Use the numbered order to follow the learning progression.

---

If you'd like, I can:

- Commit this `README.md` to a new branch for you, or
- Add links to each file inside this README (direct line anchors).

Happy learning — ping me if you want this expanded into a printable guide.
