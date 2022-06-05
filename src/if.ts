/**
 * Basic definition for expressions
 */
type BasicExpression<T> = () => T;

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
    private condition: boolean,
    private block: BasicExpression<T>,
  ) {}

  /**
   * `else` expression. Original expression and alternative is evaluated here.
   * @param {BasicExpression<T>} alternative another expression
   * if `if` expression is false.
   * @return {T} value that is evaluated
   */
  else(alternative: BasicExpression<T>): T {
    return this.evaluate(alternative);
  }

  /**
   * Evaluate
   * @param {BasicExpression<T>} alternative alternative to execute
   * @return {T} The result of function executed
   */
  private evaluate(alternative: BasicExpression<T>): T {
    if (this.condition) {
      return this.block();
    } else {
      return alternative();
    }
  }
}

