export function defaultAction(logMsg: string): VoidFunction {
    return (): void => {
        console.log(logMsg);
    };
}
