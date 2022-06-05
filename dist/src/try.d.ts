declare type ExpressionState<T> = {
    e: typeof Error;
    f: (e?: Error) => T;
};
export declare const Try: <T>(f: () => T, ...catches: ExpressionState<T>[]) => T;
export declare const Catch: <T>(e: typeof Error, f: (e?: Error) => T) => ExpressionState<T>;
export {};
