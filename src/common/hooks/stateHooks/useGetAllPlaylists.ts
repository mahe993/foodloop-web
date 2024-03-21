import { useEffect, useState } from 'react';
import { MOCK_FOODLISTS, whiteList } from '../../../constants';
import { Foodlist } from './types';
import { waitTime } from '../../utils/utils';
import useCallActions from './useCallActions';

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
                data = MOCK_FOODLISTS;
            }
            await waitTime(2); // fake load time
            setPlaylists(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) {
            getAllPlaylists(userID);
        }
    }, [loading, userID]);

    return {
        playlists: playlists,
        isLoading: loading,
        refresh: refreshFn,
    };
}
