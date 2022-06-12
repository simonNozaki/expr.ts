/**
 * Basic definition for expressions
 */
type BasicExpression<T> = () => T;

type ConditionFunctionPair<T> = [boolean, BasicExpression<T>];

/**
 * `if` expression.
 * @param {boolean} condition
 * @param {BasicExpression<T>} block
 * @return {Evaluator<T>} Wrapper for expression
 */
export const If = <T>(condition: boolean, block: BasicExpression<T>)
: Evaluator<T> => {
  return new Evaluator<T>(condition, block);
};

/**
 * Conditional Expression Evaluator
 */
class Evaluator<T> {
  /**
   * Constructor
   * @param {boolean} condition parameter to select function to be executed
   * @param {BasicExpression<T>} block function to be executed
   * if condition is true.
   */
  constructor(
      condition: boolean,
      block: BasicExpression<T>,
  ) {
    this.condtionFunctions.push([condition, block]);
  }

  private readonly condtionFunctions: ConditionFunctionPair<T>[] = [];

  /**
   * `else if` statement.
   * @param {boolean} condition
   * @param {Functions} block
   * @return {Evaluator<T>}
   */
  elseIf(condition: boolean, block: BasicExpression<T>): Evaluator<T> {
    this.condtionFunctions.push([condition, block]);
    return this;
  }

  /**
   * `else` expression. Original expression and alternative is evaluated here.
   * @param {BasicExpression<T>} alternative another expression
   * if `if` expression is false.
   * @return {T} value that is evaluated
   */
  else(alternative: BasicExpression<T>): T {
    // last element should be evaluated as true.
    this.condtionFunctions.push([true, alternative]);
    for (const pair of this.condtionFunctions) {
      if (pair[0]) {
        return pair[1]();
      }
    }
    throw new Error('All conditions was not matched');
  }
}
