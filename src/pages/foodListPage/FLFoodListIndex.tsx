import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLAlbumCover from '../../components/card/FLAlbumCover';
import FLBox from '../../components/box/FLBox';
import { Foodlist } from '../../common/hooks/stateHooks/types';
import useGetAllPlaylists from '../../common/hooks/stateHooks/useGetAllPlaylists';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import { useUserContext } from '../../contexts/UserContext';
import { useEffect } from 'react';

export default function FLFoodListIndex(): JSX.Element {
    const user = useUserContext();
    const { playlists, isLoading, refresh } = useGetAllPlaylists({ userID: user?.id });

    useEffect(() => {
        refresh();
    }, []);

    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                flex: 1,
                width: '100%',
                marginBlockEnd: 'auto',
                paddingBlockStart: '20svh',
            }}
        >
            <FLDataTray
                sx={{
                    color: 'white',
                }}
                title="Your Foodlists"
            >
                <FLBox
                    sx={{
                        width: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        gap: '4%',
                        flexWrap: 'wrap',
                    }}
                >
                    {isLoading ? (
                        <FLPauPauLoader sx={{ height: '60svh' }} />
                    ) : (
                        Boolean(playlists.length) &&
                        playlists.map((playlist: Foodlist) => (
                            <FLAlbumCover
                                key={playlist.id}
                                id={playlist.id}
                                title={playlist.title}
                                description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                imgURL={playlist.imgURL}
                            />
                        ))
                    )}
                </FLBox>
            </FLDataTray>
        </FLBox>
    );
}
