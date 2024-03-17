import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLAlbumCover from '../../components/card/FLAlbumCover';
import FLBox from '../../components/box/FLBox';
import { FoodPlaylist } from './types';
import useGetAllPlaylists from '../../common/hooks/stateHooks/useGetAllPlaylists';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';

export default function FLFoodListIndex(): JSX.Element {
    const { playlists, isLoading } = useGetAllPlaylists();

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
                title="Food Playlist"
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
                        <>
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: FoodPlaylist) => (
                                    <FLAlbumCover
                                        key={playlist.id}
                                        id={playlist.id}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: FoodPlaylist) => (
                                    <FLAlbumCover
                                        key={playlist.id}
                                        id={playlist.id}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: FoodPlaylist) => (
                                    <FLAlbumCover
                                        key={playlist.id}
                                        id={playlist.id}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                            <FLAlbumCover id={99} />
                        </>
                    )}
                </FLBox>
            </FLDataTray>
        </FLBox>
    );
}
