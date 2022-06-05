# Expression.ts
A simple wrapping library that treats common `if`, `try-catch`, etc. statements as expressions.

# mental model
It is preferable to be able to handle the result of a process immutably. With the recent increase in computing resources, many variables can be kept in memory, allowing programming with an emphasis on immutability.

In general, allowing mutable variables makes control of the process complicated and makes it extremely difficult to understand the state of the variables.

Kotlin, Scala, and other programming languages that allow functions to be treated as first-class objects allow ts to handle expressions provided in built-in or standard class libraries, making immutability easy to handle.

For reference, Kotlin can handle try-catch and if as expressions as follows.
```kotlin
val a: Int? = try { input.toInt() } catch (e: NumberFormatException) { null }
```

Quote: https://kotlinlang.org/docs/exceptions.html#try-is-an-expression

# Usage

