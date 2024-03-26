import { POST } from '../common/request';

export async function createFoodlist(
    userID: string,
    abortSignal: AbortSignal,
    { query, recurringDay, recurringTime }: createFoodlistParams,
): Promise<unknown> {
    try {
        const url = `foodlist/${userID}`;
        const postData: createFoodlistParams = {
            query: query,
            recurringDay: recurringDay,
            recurringTime: recurringTime,
        };

        const res = await POST({ url, abortSignal, data: postData });
        return res.data;
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}

type createFoodlistParams = {
    query: string;
    recurringDay: string;
    recurringTime: string;
};
