import { useEffect, useState } from 'react';
import { MOCK_PLAYLISTS } from '../../../constants';
import { FoodPlaylist } from '../../../pages/foodListPage/types';
import { waitTime } from '../../utils/utils';
import useCallActions from './useCallActions';

type useGetAllPlaylists = {
    playlists: FoodPlaylist[];
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetAllPlaylists(): useGetAllPlaylists {
    const [playlists, setPlaylists] = useState<FoodPlaylist[]>([]);
    const { loading, setLoading, refreshFn } = useCallActions();

    const getAllPlaylists = async (): Promise<void> => {
        try {
            setLoading(true);
            const data = await MOCK_PLAYLISTS;
            await waitTime(3000); // fake load time
            setPlaylists(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) {
            getAllPlaylists();
        }
    }, [loading]);

    return {
        playlists: playlists,
        isLoading: loading,
        refresh: refreshFn,
    };
}
