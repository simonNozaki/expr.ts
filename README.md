# Expressionify
A simple wrapping library that treats common `if`, `try-catch`, etc. statements as expressions.

# Mental model
It is preferable to be able to handle the result of a process immutably. With the recent increase in computing resources, many variables can be kept in memory, allowing programming with an emphasis on immutability.

In general, allowing mutable variables makes control of the process complicated and makes it extremely difficult to understand the state of the variables.

Kotlin, Scala, and other programming languages that allow functions to be treated as first-class objects allow ts to handle expressions provided in built-in or standard class libraries, making immutability easy to handle.

For reference, Kotlin can handle try-catch and if as expressions as follows.
```kotlin
val a: Int? = try { input.toInt() } catch (e: NumberFormatException) { null }
```

Reference: https://kotlinlang.org/docs/exceptions.html#try-is-an-expression

# Usage
At this time, this package provide only 2 functions: try-catch and if-else.

## try-catch
### Basic usage
```typescript
const r: string = attempt(() => (new ErrorService().execute()),
        recover(Error, (e: Error) => ('DEFAULT')))
```

### Multiple catching
If `executeUri()` throws `URIError`, evaluate and return `'URI Error'`.

```typescript
const s: string = attempt(() => (new ErrorService().executeUri()),
        recover(URIError, (e: URIError) => ('URI Error')),
        recover(Error, (e: Error) => ('DEFAULT')));

console.log(s); // => 'URI Error'
```

### Finally clause
`lastly` processes a function that do some recovery "fianally".

```typescript
const s: string = attempt(() => (new ErrorService().execute()),
        recover(Error, (e: Error) => {
          return 'ERROR';
        }),
        lastly(() => {
          console.log('Attempted');
        }));

console.log(s); // => 'ERROR'
```

## if-else
if-else expression have to be finalized with `else` function. This triggers an evaluation of input conditions.

### Basic usage
```typescript
const r = If(base.length > 30, () => 'over 30')
        .else(() => 'under 30')
```

### elseIf
if-else can insert `elseIf` function intermediately.

```typescript
const result = new StatusFindService().execute();
const res = If(result === '0', () => ({message: 'success'}))
    .elseIf(result === '5', () => ({message: 'not found'}))
    .else(() => ({message: 'failure'}));
console.log(res); // => ({message: 'not found'});
```
