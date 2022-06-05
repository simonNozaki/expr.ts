/**
 * Expression closure definition.
 */
type ExpressionState<T> = {
  e: typeof Error,
  f: (e?: Error) => T
}


/**
 * `try` expression. This function controls a try and handling exception.
 * @param {()} f function to try to execute.
 * @param {...ExpressionState<T>[]} catches `catch` expressions
 * @return {T} t
 */
export const Try = <T>(f: () => T, ...catches: ExpressionState<T>[]): T => {
  try {
    return f();
  } catch (e) {
    for (let i = 0; i < catches.length; i++) {
      const expr = catches[i];
      if (e instanceof expr.e) {
        return expr.f(e);
      }
    }
    throw e;
  }
};

/**
 * `catch` expression. This function enclose target error type
 * and error handler.
 * @param {Error} e Error type infomation to handle.
 * @param {()} f Consumer to be executed
 * @return {T} Expression state of catch expression.
 */
export const Catch = <T>(e: typeof Error, f: (e?: Error) => T)
: ExpressionState<T> => ({
    e: e,
    f: f,
  });
