import { useEffect, useState } from 'react';
import useCallActions from './useCallActions';
import { Food, Foodlist, FoodlistInfo, PlayState } from './types';
import { getFoodlistInformation } from '../../../api/foodlist/read';
import { newAbortSignal } from '../../utils/utils';
import { updateFoodlistIndex, updateFoodlistStatus } from '../../../api/foodlist/update';

type useGetPlaylistStatusProps = {
    userID: number;
    foodlistID: number;
};

type useGetPlaylistStatus = {
    foodlist: Foodlist;
    foods: Food[];
    setListStatus: (t: PlayState) => void;
    setCurrIdx: (t: number) => void;
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetPlaylistStatus({ userID, foodlistID }: useGetPlaylistStatusProps): useGetPlaylistStatus {
    const [flInfo, setFoodlistInfo] = useState<FoodlistInfo>();
    const { loading, setLoading, refreshFn } = useCallActions();

    // const getFoodlist = (flID: number): Foodlist => {
    //     try {
    //         if (!MOCK_FOODLISTS.find(fl => fl.id === flID)) {
    //             throw new Error('Foodlist not found');
    //         }
    //         return MOCK_FOODLISTS.find(fl => fl.id === flID)!;
    //     } catch (e) {
    //         console.log(e);
    //         return MOCK_FOODLISTS[0]; // template
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const getFoodlistInfo = async (flID: number, usrID: number): Promise<FoodlistInfo> => {
        try {
            const foodlistInfo = await getFoodlistInformation(newAbortSignal(), { userID: usrID, foodlistID: flID });
            return foodlistInfo;
        } catch (e) {
            console.log(e);
            return new Promise((_, reject) => reject(e));
        } finally {
            setLoading(false);
        }
    };

    const setCurrIdx = async (idx: number): Promise<void> => {
        const fl = await updateFoodlistIndex(newAbortSignal(), { userID, foodlistID, index: idx });

        setFoodlistInfo(prev => ({
            ...prev,
            foodlist: {
                ...fl,
            },
            foods: prev?.foods || [],
        }));
    };

    const setListStatus = async (status: PlayState): Promise<void> => {
        const fl = await updateFoodlistStatus(newAbortSignal(), { userID, foodlistID, status });

        setFoodlistInfo(prev => ({
            ...prev,
            foodlist: {
                ...fl,
            },
            foods: prev?.foods || [],
        }));
    };

    useEffect(() => {
        if (loading) {
            try {
                (async (): Promise<void> => {
                    const fInfo = await getFoodlistInfo(foodlistID, userID);
                    setFoodlistInfo(fInfo);
                })();
            } catch (e) {
                console.log(e);
            }
        }
    }, [loading, foodlistID, userID]);

    return {
        foodlist: flInfo?.foodlist || ({} as Foodlist),
        foods: (flInfo?.foods as unknown as Food[]) || ([] as unknown as Food[]),
        setCurrIdx,
        setListStatus,
        isLoading: loading,
        refresh: refreshFn,
    };
}
