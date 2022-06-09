/**
 * Expression closure definition.
 */
type ExpressionState<T> = {
  e: Error,
  f: (e: Error) => T
}


/**
 * `try` expression. This function controls a try and handling exception.
 * @param {()} f function to try to execute.
 * @param {...ExpressionState<T>[]} catches `catch` expressions
 * @return {T} t
 */
export const doOnTry = <T>(f: () => T, ...catches: ExpressionState<T>[]): T => {
  try {
    return f();
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }

    return catches
        .find((c) => c.e.name === e.name)
        .f(e);
  }
};

/**
 * `catch` expression. This function enclose target error type
 * and error handler.
 * `doOnTry` expression can handle some `recover` functions like
 * try-catch statement as we know, written below:
 * ```
 * try {
 *   execute();
 * } catch (IllegalArgumentException iae) {
 *   handleIllegalArgumentException();
 * } catch (FileNotFoundException fnf) {
 *   handleFileNotFoundException();
 * } catch (Exception e) {
 *   handleException();
 * }
 * ```
 * @param {Error} e Error type infomation to handle.
 * @param {()} f Consumer to be executed
 * @return {T} Expression state of catch expression.
 */
export const recover = <T, E extends Error>(
  e: E, f: (e: E) => T,
)
: ExpressionState<T> => {
  return {
    e: e,
    f: f,
  };
};
