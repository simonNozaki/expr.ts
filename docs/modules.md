[expr.ts](README.md) / Exports

# expr.ts

## Table of contents

### Functions

- [If](modules.md#if)
- [doOnTry](modules.md#doontry)
- [recover](modules.md#recover)

## Functions

### If

▸ **If**<`T`\>(`condition`, `block`): `Evaluator`<`T`\>

`if` expression.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `block` | `BasicExpression`<`T`\> |

#### Returns

`Evaluator`<`T`\>

Wrapper for expression

#### Defined in

[if.ts:12](https://github.com/simonNozaki/expression.ts/blob/d3cd5c4/src/if.ts#L12)

___

### doOnTry

▸ **doOnTry**<`T`\>(`f`, ...`catches`): `T`

`try` expression. This function controls a try and handling exception.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | () => `T` | function to try to execute. |
| `...catches` | `ExpressionState`<`T`\>[] | `catch` expressions |

#### Returns

`T`

t

#### Defined in

[try.ts:16](https://github.com/simonNozaki/expression.ts/blob/d3cd5c4/src/try.ts#L16)

___

### recover

▸ **recover**<`T`, `E`\>(`e`, `f`): `ExpressionState`<`T`\>

`catch` expression. This function enclose target error type
and error handler.
`doOnTry` expression can handle some `recover` functions like
try-catch statement as we know, written below:
```
try {
  execute();
} catch (IllegalArgumentException iae) {
  handleIllegalArgumentException();
} catch (FileNotFoundException fnf) {
  handleFileNotFoundException();
} catch (Exception e) {
  handleException();
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `E` | Error type infomation to handle. |
| `f` | (`e`: `E`) => `T` | Consumer to be executed |

#### Returns

`ExpressionState`<`T`\>

Expression state of catch expression.

#### Defined in

[try.ts:50](https://github.com/simonNozaki/expression.ts/blob/d3cd5c4/src/try.ts#L50)
