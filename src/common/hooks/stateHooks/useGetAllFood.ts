import { useEffect, useState } from 'react';
import { MOCK_FOOD, MOCK_FOODLISTFOODS, whiteList } from '../../../constants';
import { FoodResp } from './types';
import { waitTime } from '../../utils/utils';
import useCallActions from './useCallActions';

type useGetAllFoodProps = {
    foodlistID: number;
    userID: number;
};

type useGetAllFood = {
    foods: FoodResp[];
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetAllFood({ foodlistID, userID }: useGetAllFoodProps): useGetAllFood {
    const [foods, setFoods] = useState<FoodResp[]>([]);
    const { loading, setLoading, refreshFn } = useCallActions();

    const getAllFood = async (usrId: number, flID: number): Promise<void> => {
        try {
            setLoading(true);
            const data: FoodResp[] = [];
            if (whiteList.has(usrId)) {
                MOCK_FOODLISTFOODS.forEach(item => {
                    if (item.foodlistID === flID) {
                        const food = MOCK_FOOD.find(food => food.id === item.foodID);
                        if (food) {
                            const foodResp: FoodResp = {
                                index: item.index,
                                quantity: item.quantity,
                                name: food.name,
                                description: food.description,
                                vendorID: food.vendorID,
                            };
                            data.push(foodResp);
                        }
                    }
                });
            }

            data.sort((a, b) => a.index - b.index);

            await waitTime(2); // fake load time
            setFoods(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading && Boolean(userID) && Boolean(foodlistID)) {
            getAllFood(userID, foodlistID);
        }
    }, [loading, userID, foodlistID]);

    return {
        foods: foods,
        isLoading: loading,
        refresh: refreshFn,
    };
}
