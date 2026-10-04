// In TS we have switch case statements that allow us to execute different blocks of code based on the value of a variable or expression. The switch statement evaluates an expression and matches its value against multiple case clauses. If a match is found, the corresponding block of code is executed.
// Here's a basic example of a switch case statement in TypeScript:

```typescript
let day: string = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
        default:
        console.log("It's another day.");
}
```
// In this example, the value of the variable `day` is compared against the case clauses. Since `day` is "Monday", the first case matches, and "Today is Monday." is printed to the console. The `break` statement is used to exit the switch statement after a match is found, preventing the execution of subsequent cases.

// If none of the case clauses match the value of the expression, the `default` case is executed, which serves as a fallback option. In this example, if `day` were any value other than "Monday", "Tuesday", or "Wednesday", the message "It's another day." would be printed.

// Switch case statements are particularly useful when you have multiple possible values for a variable and want to execute different code based on those values.  
