declare type BasicExpression<T> = () => T;
export declare const If: <T>(condition: boolean, block: BasicExpression<T>) => Evaluator<T>;
declare class Evaluator<T> {
    private condition;
    private block;
    constructor(condition: boolean, block: BasicExpression<T>);
    else(alternative: BasicExpression<T>): T;
    private evaluate;
}
export {};
