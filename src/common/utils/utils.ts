import { CONTRIBUTORS } from '../../constants';
import { Contributer } from '../hooks/stateHooks/types';

export function defaultAction(logMsg: string): VoidFunction {
    return (): void => {
        console.log(logMsg);
    };
}

export function getContributors(): Contributer[] {
    return CONTRIBUTORS.sort(() => Math.random() - 0.5);
}

export async function waitTime(time: number): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Promise resolved'), time));
}
