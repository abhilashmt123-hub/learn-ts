/*In TS there are three main types of variables: `var`, `let`, and `const`.

1. **var**: 
   - `var` is function-scoped, meaning it is accessible within the function it is declared in, or globally if declared outside of a function.
   - Variables declared with `var` can be re-declared and updated.
   - It is hoisted to the top of its scope, which can lead to unexpected behavior.
   example:
   ```typescript
   function exampleVar() {
       if(true) {
           var x = 10;
           var x = 20; // This is allowed, x is re-declared
           x = 30; // This is also allowed, x is updated
           var y;
       }
       console.log(x); // This will log 30, because x is function-scoped
       console.log(y); // This will log undefined, because y is hoisted but not initialized, but it wont throw compiler error because of hoisting   
   }
   exampleVar();
   ```

2. **let**: 
   - `let` is block-scoped, meaning it is only accessible within the block (e.g., inside a loop or an if statement) it is declared in.
   - Variables declared with `let` can be updated but cannot be re-declared in the same scope.
   - It is not hoisted in the same way as `var`, which helps prevent some common bugs.
    example:
    ```typescript
    function exampleLet() {
        if(true) {
            let x = 10;
            // let x = 20; // This would throw an error, x cannot be re-declared in the same block
            x = 30; // This is allowed, x is updated
        }
        // console.log(x); // This would throw an error, x is not accessible outside the block
    }
    exampleLet();
    ``` 

3. **const**: 
   - `const` is also block-scoped like `let`.
   - Variables declared with `const` cannot be updated or re-declared; they are read-only after their initial assignment.
   - However, if the variable is an object or an array, the contents of the object or array can still be modified.
   example:
   ```typescript
   function exampleConst() {
       const x = 10;
       // x = 20; // This would throw an error, x cannot be updated
       
       const obj = { a: 1 };
       obj.a = 2; // This is allowed, the contents of the object can be modified
       
       const arr = [1, 2, 3];
       arr.push(4); // This is allowed, the contents of the array can be modified
   }
   exampleConst();
   ```

In summary:
- Use `var` for function-scoped variables (though it's generally discouraged in modern TypeScript).
- Use `let` for block-scoped variables that may need to be updated.
- Use `const` for block-scoped variables that should not be reassigned.
*/