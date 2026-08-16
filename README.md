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

## Variables (detailed)

TypeScript uses the same runtime variable kinds as JavaScript: `var`, `let`, and `const`. Understanding their differences is essential for writing predictable, interview-ready code.

- `var`:
  - Function-scoped (or global if declared outside a function).
  - Allows re-declaration in the same scope.
  - Hoisted to the top of its function scope: declarations are moved, initializations are not.
  - Common pitfalls: accidental global leaks, surprising values due to hoisting.

- `let`:
  - Block-scoped (scoped to `{ ... }`).
  - Can be updated but not re-declared in the same block.
  - Has a Temporal Dead Zone (TDZ): referencing before initialization throws a runtime ReferenceError.

- `const`:
  - Block-scoped and must be initialized at declaration.
  - Cannot be reassigned; however, objects and arrays are mutable (their internal properties can change).

Best practices:

- Prefer `const` by default and switch to `let` when reassignment is needed.
- Avoid `var` in modern code unless you specifically need function-scoped behavior.

Hoisting and TDZ example:

```typescript
function hoistExample() {
  console.log(aVar); // undefined (declaration hoisted)
  // console.log(aLet); // ReferenceError due to TDZ

  var aVar = 1;
  let aLet = 2;
}
```

Re-declaration and block scope:

```typescript
var x = 1;
function f() {
  var x = 2; // different variable
}

{
  let y = 1;
  // let y = 2; // error: cannot redeclare in same block
}
```

`const` and mutation:

```typescript
const p = { x: 1 };
p.x = 2; // allowed
// p = { x: 3 } // error: reassignment not allowed
```

Interview tips:

- Explain TDZ and why `let`/`const` are safer.
- Use `const` for values that shouldn't be reassigned and immutability where possible.
- Mention memory/reference semantics when mutating objects vs reassigning.


---

## Data Types (comprehensive)

TypeScript's type system sits on top of JavaScript runtime values and provides static guarantees. Below are the commonly asked concepts in interviews.

Primitive types
- `number`: all numeric values (integers and floats). Also `NaN`, `Infinity` are `number`.
- `bigint`: arbitrary precision integers (suffix `n`, e.g., `123n`).
- `string`: text, template literals with backticks.
- `boolean`: `true` or `false`.
- `symbol`: unique identifiers (usually used as object keys).
- `null` and `undefined`: represent absence; depending on `--strictNullChecks`, they may be assignable to other types.

TypeScript specific primitives
- `any`: disables type checking for a value.
- `unknown`: safer alternative to `any`; you must narrow it before use.
- `void`: used for functions that don't return a value.
- `never`: indicates unreachable code (function that always throws or loops forever).

Structural types and object shapes
- `type` aliases and `interface` let you define object shapes.
- Interfaces are open/extendable; types are more flexible (unions, mapped types).

Type composition
- Union types: `A | B` — value may be A or B.
- Intersection types: `A & B` — value must satisfy both A and B.
- Literal types: exact values like `'up' | 'down'`.

Type inference and compatibility
- TypeScript infers types where possible; explicit annotations are needed for public APIs.
- Structural typing: compatibility based on members (duck typing), not nominal.

Type narrowing & guards
- Use `typeof`, `instanceof`, user-defined type guards, discriminated unions to narrow types.

Examples and patterns

```typescript
// primitives
let n: number = 42;
let big: bigint = 9007199254740991n;
let s: string = `hello ${n}`;

// any vs unknown
let a: any = 1;
a = 'x'; // no errors

let u: unknown = 1;
if (typeof u === 'number') {
  const doubled = u * 2; // narrowed to number
}

// type alias and interface
type Point = { x: number; y: number };
interface Person { name: string; age: number }

// union
type ID = string | number;
function printId(id: ID) {
  if (typeof id === 'string') console.log(id.toUpperCase());
  else console.log(id);
}

// never
function throwErr(msg: string): never {
  throw new Error(msg);
}
```

Interview tips:

- Explain strict mode flags like `--strict` and `--strictNullChecks`.
- Show how to narrow `unknown` safely and why `any` is dangerous.
- Mention structural typing and give a short example of compatibility (extra properties allowed when checking by shape).


---

## Arrays (interview-ready)

Array definitions and syntax

- `T[]` — shorthand, e.g. `number[]`.
- `Array<T>` — generic form, e.g. `Array<number>`.
- Mixed arrays: `(A | B)[]` when elements can be different types.

Readonly and immutability

- `readonly T[]` or `ReadonlyArray<T>` prevents mutating methods and is useful when exposing arrays from APIs.

Array-like and iterables

- `ArrayLike<T>` describes objects with a numeric `length` and numeric indices (e.g. `arguments`).
- `Iterable<T>` supports `for...of` and spreading.

Mutating vs non-mutating methods

- Mutating: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.
- Non-mutating: `map`, `filter`, `slice`, `concat`, `reduce`.

Common functional methods and patterns

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n); // [1,4,9,16,25]
const evens = numbers.filter(n => n % 2 === 0); // [2,4]
const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 15
```

Destructuring & spread

```typescript
const [first, ...rest] = [1, 2, 3];
const copy = [...rest, 4];
```

Readonly example

```typescript
const nums: readonly number[] = [1, 2, 3];
// nums.push(4); // error: push does not exist on readonly array
```

Type narrowing with arrays

When filtering heterogeneous arrays, use type predicates to narrow element types for the compiler:

```typescript
type MaybeNumber = string | number;
const mixed: MaybeNumber[] = [1, 'a', 2];
function isNumber(x: MaybeNumber): x is number { return typeof x === 'number'; }
const onlyNumbers = mixed.filter(isNumber); // typed as number[]
```

Variance and safety

- Arrays are effectively covariant in TypeScript which can be unsound with mutation; prefer `readonly` in APIs to avoid surprises.

Interview tips

- Discuss immutability and why `readonly` matters.
- Show examples of narrowing and explain when to use `Array<T>` vs `readonly T[]`.


---

## Tuples (detailed)

Tuples are fixed-length arrays with element-level types. They shine when you need a compact, ordered grouping of heterogenous values (e.g., `[value, error]`).

Key features

- Fixed length and types for specified positions (e.g., `[string, number]`).
- Optional elements: `?` for trailing positions.
- Variadic/rest tuples: `...T[]` inside a tuple for variable tail lengths.
- Labeled tuples (TypeScript 4.0+) add names to positions: `[name: string, age: number]`.
- `readonly` tuples prevent mutation.

Examples

```typescript
type NameAge = [name: string, age: number];
const p: NameAge = ['Alice', 30];

let t: [string, number] = ['Hello', 42];
t[1] = 100;

let optional: [string, number?] = ['Hi'];
optional[1] = 5;

let rest: [string, ...number[]] = ['start', 1, 2, 3];
rest.push(4);

function getPair(): [value: number, err?: string] {
  return [42];
}
```

Interop and pitfalls

- Assigning a plain `Array<T>` to a tuple type may require assertions because arrays can be longer/shorter than the tuple.
- Mutating tuple contents (via `push`) can violate the intended fixed-length semantics — prefer `readonly` tuples for safety.

Interview tips

- Explain when to prefer a tuple vs an object (tuples for concise positional data; objects for named properties and readability).
- Show labeled tuples and destructuring examples.


---

## Enums (complete)

Enums provide named constants but come with runtime footprint and semantics to understand.

Numeric enums

- Default numbering starts at 0 and auto-increments.
- Reverse mapping: numeric enums create a two-way mapping at runtime.

```typescript
enum Direction { Up, Down, Left, Right }
console.log(Direction.Up); // 0
console.log(Direction[0]); // 'Up' (reverse mapping)
```

String enums

- Members must be initialized with strings; no reverse mapping.

```typescript
enum StringDir { Up = 'UP', Down = 'DOWN' }
console.log(StringDir.Up);
```

Const enums and `as const`

- `const enum` is erased/inlined at compile time; improves performance but removes runtime object.
- `as const` creates literal readonly types for arrays/objects.

Computed and heterogeneous values

- Enum members can use computed values; subsequent uninitialized numeric members continue incrementing from the last numeric value.
- Heterogeneous enums (mix of strings and numbers) are allowed but often confusing.

Alternatives

- Use union literal types (e.g., `type Dir = 'UP' | 'DOWN'`) when you only need type-level checking without a runtime object.

Examples

```typescript
enum Status { Active = 1, Inactive, Pending }
console.log(Status.Active); // 1

function compute(): number { return 10 }
enum E { A = compute(), B, C }
console.log(E.A, E.B, E.C);

const enum Fast { A, B, C }
// Fast.A is inlined as 0 in compiled code
```

Interview tips

- Explain runtime cost: enums emit JS objects (except `const enum`).
- Prefer union literal types where no runtime mapping is needed.


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
