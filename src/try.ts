/**
 * Expression closure definition.
 */
type ExpressionState<T, E extends Error> = {
  e: new (message?: string) => E,
  f: (e: Error) => T
}

/**
 * Finally Clause state definition.
 */
type LastlyState = {
  e: never,
  f: () => void
}

/**
 * Union type that is recover or lastly.
 */
type IntermediateState<T, E extends Error> = ExpressionState<T, E> |
LastlyState

/**
 * Type definition guard for `lastly`
 * @param {any} arg
 * @return {boolean}
 */
const isLastly = (arg?: any): arg is LastlyState => {
  return arg && arg.f !== undefined;
};

/**
 * Type definition guard for `recover`
 * @param {any} arg
 * @return {boolean}
 */
const isRecover = <T, E extends Error>(arg?: unknown)
: arg is ExpressionState<T, E> => {
  if (!arg) {
    return false;
  }
  const d = arg as ExpressionState<T, E>;

  return typeof d.e === 'function' && typeof d.f === 'function';
};

/**
 * `try` expression. This function controls a try and handling exception.
 * @param {()} f function to try to execute.
 * @param {...ExpressionState<T>[]} catches `catch` expressions
 * @return {T} t
 */
export const attempt = <T, E extends Error>(
  f: () => T, ...catches: IntermediateState<T, E>[]
): T => {
  try {
    return f();
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }

    const last = catches.filter((c) => isLastly(c));
    const catcher = catches
        .filter((c) => isRecover(c))
        .find((c) => c.e.name === e.name);
    // finally
    if (last.length > 0) {
      const lastly = last[0] as LastlyState;
      lastly.f();
    }

    return (catcher as ExpressionState<T, E>).f(e);
  }
};

/**
 * `catch` expression. This function enclose target error type
 * and error handler.
 * `attempt` expression can handle some `recover` functions like
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
  e: new (message?: string) => E, f: (e: E) => T,
)
: ExpressionState<T, E> => {
  return {
    e: e,
    f: f,
  };
};

/**
 * Equivalent to `finally` clause. This can be executed
 * only once on a `attempt`.
 * @param {Function} f
 * @return {LastlyState}
 */
export const lastly = (f: () => void): LastlyState => {
  return {
    e: 0 as never,
    f: f,
  };
};
