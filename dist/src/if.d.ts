declare type BasicExpression<T> = () => T;
export declare const If: <T>(condition: boolean, block: BasicExpression<T>) => Evaluator<T>;
declare class Evaluator<T> {
    constructor(condition: boolean, block: BasicExpression<T>);
    private readonly condtionFunctions;
    elseIf(condition: boolean, block: BasicExpression<T>): Evaluator<T>;
    else(alternative: BasicExpression<T>): T;
}
export {};
