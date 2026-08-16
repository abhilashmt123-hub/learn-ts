In TS there are three types of enums: numeric enums, string enums, and heterogeneous enums.

1. **Numeric Enums**: These are the default type of enums in TypeScript. Each member of the enum is assigned a numeric value, starting from 0 by default, and incrementing by 1 for each subsequent member. You can also assign specific numeric values to members if desired.

   Example:
   ```typescript
   enum Direction {
       Up,    // 0
       Down,  // 1
       Left,  // 2
       Right  // 3
   }

   console.log(Direction.Up);    // Output: 0
   console.log(Direction.Down);  // Output: 1
   console.log(Direction.Left);  // Output: 2
   console.log(Direction.Right); // Output: 3
   ```

   in numberic enums, you can also assign specific values to the members:
   ```typescript
   enum Status {
       Active = 1,
       Inactive = 2,
       Pending = 3
   }

   console.log(Status.Active);   // Output: 1
   console.log(Status.Inactive); // Output: 2
   console.log(Status.Pending);  // Output: 3
   ```
   if the value is fetching from a method or a function, you can also assign the value to the enum member:
   ```typescript
   function getValue(): number {
       return 5;
   }

   enum CustomEnum {
       First = getValue(),
       Second,
       Third
   }

   console.log(CustomEnum.First);  // Output: 5
   console.log(CustomEnum.Second); // Output: 6
   console.log(CustomEnum.Third);  // Output: 7
   ```  

2. **String Enums**: In string enums, each member is assigned a string value. This can be useful when you want to have more descriptive values for your enum members.

   Example:
   ```typescript
   enum Direction {
       Up = "UP",
       Down = "DOWN",
       Left = "LEFT",
       Right = "RIGHT"
   }

   console.log(Direction.Up);    // Output: "UP"
   console.log(Direction.Down);  // Output: "DOWN"
   console.log(Direction.Left);  // Output: "LEFT"
   console.log(Direction.Right); // Output: "RIGHT"
   ```

3. **Heterogeneous Enums**: Heterogeneous enums are a mix of numeric and string values. While they can be used, it's generally recommended to stick to either numeric or string enums for consistency.

   Example:
   ```typescript
   enum MixedEnum {
       No = 0,
       Yes = "YES"
   }

   console.log(MixedEnum.No);  // Output: 0
   console.log(MixedEnum.Yes); // Output: "YES"
   ```

Enums in TypeScript provide a way to define a set of named constants, making your code more readable and maintainable. They can be used in various scenarios, such as representing states, options, or categories in your application.  
