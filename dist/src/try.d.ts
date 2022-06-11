declare type ExpressionState<T> = {
    e: Error;
    f: (e: Error) => T;
};
export declare const doOnTry: <T>(f: () => T, ...catches: ExpressionState<T>[]) => T;
export declare const recover: <T, E extends Error>(e: E, f: (e: E) => T) => ExpressionState<T>;
export {};
