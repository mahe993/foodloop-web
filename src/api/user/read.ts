import { User } from '../../common/hooks/stateHooks/types';
import { GET } from '../common/request';

type getUserParams = {
    userID: number;
};

export async function getUser(abortSignal: AbortSignal, { userID }: getUserParams): Promise<User> {
    try {
        const url = `user/${userID}`;
        const res = await GET({ url, abortSignal });
        return res.data as unknown as User;
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}
