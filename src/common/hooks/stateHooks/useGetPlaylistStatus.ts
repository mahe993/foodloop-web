import { useEffect, useState } from 'react';
import { MOCK_FOODLISTS } from '../../../constants';
import useCallActions from './useCallActions';
import { Foodlist, PlayState } from './types';

type useGetPlaylistStatusProps = {
    id: number;
};

type useGetPlaylistStatus = {
    foodlist: Foodlist;
    setListStatus: (t: PlayState) => void;
    setCurrIdx: (t: number) => void;
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetPlaylistStatus({ id }: useGetPlaylistStatusProps): useGetPlaylistStatus {
    const [foodlist, setFoodlist] = useState<Foodlist>(MOCK_FOODLISTS[0]);
    const { loading, setLoading, refreshFn } = useCallActions();

    const getFoodlist = (flID: number): Foodlist => {
        try {
            if (!MOCK_FOODLISTS.find(fl => fl.id === flID)) {
                throw new Error('Foodlist not found');
            }
            return MOCK_FOODLISTS.find(fl => fl.id === flID)!;
        } catch (e) {
            console.log(e);
            return MOCK_FOODLISTS[0]; // template
        } finally {
            setLoading(false);
        }
    };

    const setCurrIdx = (idx: number): void => {
        setFoodlist(prev => ({ ...prev, currentFoodIdx: idx }));
    };

    const setListStatus = (status: PlayState): void => {
        setFoodlist(prev => ({ ...prev, status: status }));
    };

    useEffect(() => {
        if (loading) {
            const foodlist = getFoodlist(id);
            setFoodlist(foodlist);
        }
    }, [loading, id]);

    return {
        foodlist,
        setCurrIdx,
        setListStatus,
        isLoading: loading,
        refresh: refreshFn,
    };
}
