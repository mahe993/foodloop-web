import { useEffect, useState } from 'react';
import { whiteList } from '../../../constants';
import { Foodlist } from './types';
import { newAbortSignal, waitTime } from '../../utils/utils';
import useCallActions from './useCallActions';
import { getAllFoodlist } from '../../../api/foodlist/read';

type useGetAllPlaylistsProps = {
    userID: number;
};

type useGetAllPlaylists = {
    playlists: Foodlist[];
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetAllPlaylists({ userID }: useGetAllPlaylistsProps): useGetAllPlaylists {
    const [playlists, setPlaylists] = useState<Foodlist[]>([]);
    const { loading, setLoading, refreshFn } = useCallActions();

    const getAllPlaylists = async (id: number): Promise<void> => {
        try {
            setLoading(true);
            let data: Foodlist[] = [];
            if (whiteList.has(id)) {
                // data = MOCK_FOODLISTS;
                await waitTime(3); // fake load time
            } else {
                // fetch data from server
                data = await getAllFoodlist(newAbortSignal(), { userID: `${id}` });
            }
            setPlaylists(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading && Boolean(userID)) {
            getAllPlaylists(userID);
        }
    }, [loading, userID]);

    return {
        playlists: playlists,
        isLoading: loading,
        refresh: refreshFn,
    };
}
