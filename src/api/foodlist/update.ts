import { Foodlist, PlayState } from '../../common/hooks/stateHooks/types';
import { PUT } from '../common/request';

type updateFoodlistStatusParams = {
    userID: number;
    foodlistID: number;
    status: PlayState;
};

export async function updateFoodlistStatus(
    abortSignal: AbortSignal,
    { userID, foodlistID, status }: updateFoodlistStatusParams,
): Promise<Foodlist> {
    try {
        const url = `foodlist/${userID}/${foodlistID}/status`;
        const data = { status };
        const res = await PUT({ url, abortSignal, data });

        return res.data as unknown as Foodlist;
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}

type updateFoodlistIndexParams = {
    userID: number;
    foodlistID: number;
    index: number;
};

export async function updateFoodlistIndex(
    abortSignal: AbortSignal,
    { userID, foodlistID, index }: updateFoodlistIndexParams,
): Promise<Foodlist> {
    try {
        const url = `foodlist/${userID}/${foodlistID}/index`;
        const data = { index };
        const res = await PUT({ url, abortSignal, data });

        return res.data as unknown as Foodlist;
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}
