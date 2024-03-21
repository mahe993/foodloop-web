import { useEffect, useState } from 'react';
import { MOCK_FOODLISTS } from '../../../constants';
import useCallActions from './useCallActions';

type useGetPlaylistStatusProps = {
    id: number;
};

type useGetPlaylistStatus = {
    currIdx: number;
    setCurrIdx: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
    refresh: VoidFunction;
};

export default function useGetPlaylistStatus({ id }: useGetPlaylistStatusProps): useGetPlaylistStatus {
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const { loading, setLoading, refreshFn } = useCallActions();

    const getCurrIdx = (flID: number): number => {
        try {
            return MOCK_FOODLISTS.find(fl => fl.id === flID)?.currentFoodIdx || 0;
        } catch (e) {
            console.log(e);
            return 0;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) {
            setCurrentIdx(getCurrIdx(id));
        }
    }, [loading]);

    return {
        currIdx: currentIdx,
        setCurrIdx: setCurrentIdx,
        isLoading: loading,
        refresh: refreshFn,
    };
}
