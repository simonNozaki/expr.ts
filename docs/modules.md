[expression.ts](README.md) / Exports

# expression.ts

## Table of contents

### Functions

- [Catch](modules.md#catch)
- [If](modules.md#if)
- [Try](modules.md#try)

## Functions

### Catch

▸ **Catch**<`T`\>(`e`, `f`): `ExpressionState`<`T`\>

`catch` expression. This function enclose target error type
and error handler.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `ErrorConstructor` | Error type infomation to handle. |
| `f` | (`e?`: `Error`) => `T` | Consumer to be executed |

#### Returns

`ExpressionState`<`T`\>

Expression state of catch expression.

#### Defined in

[try.ts:37](https://github.com/simonNozaki/expression.ts/blob/e2e8c99/src/try.ts#L37)

___

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

[if.ts:12](https://github.com/simonNozaki/expression.ts/blob/e2e8c99/src/if.ts#L12)

___

### Try

▸ **Try**<`T`\>(`f`, ...`catches`): `T`

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

[try.ts:16](https://github.com/simonNozaki/expression.ts/blob/e2e8c99/src/try.ts#L16)
