import { CONTRIBUTORS } from '../../constants';
import type { Contributor } from './types';

export function defaultAction(logMsg: string): VoidFunction {
    return (): void => {
        console.log(logMsg);
    };
}

export function getContributors(): Contributor[] {
    return CONTRIBUTORS.sort(() => Math.random() - 0.5);
}
