import { Foodlist, FoodlistInfo } from '../../common/hooks/stateHooks/types';
import { GET } from '../common/request';

type getFoodlistParams = {
    userID: number;
    foodlistID: number;
};

export async function getFoodlistInformation(
    abortSignal: AbortSignal,
    { userID, foodlistID }: getFoodlistParams,
): Promise<FoodlistInfo> {
    try {
        const url = `foodlist/${userID}/${foodlistID}`;
        const res = await GET({ url, abortSignal });

        return res.data as unknown as FoodlistInfo;
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}

type getAllFoodlistParams = {
    userID: string;
};

export async function getAllFoodlist(abortSignal: AbortSignal, { userID }: getAllFoodlistParams): Promise<Foodlist[]> {
    try {
        const url = `foodlist/${userID}`;
        const res = await GET({ url, abortSignal });

        return res.data as unknown as Foodlist[];
    } catch (e) {
        console.log(e);
        return new Promise((_, reject) => reject(e));
    }
}
