import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLAlbumCover from '../../components/card/FLAlbumCover';
import FLBox from '../../components/box/FLBox';
import { Foodlist } from '../../common/hooks/stateHooks/types';
import useGetAllPlaylists from '../../common/hooks/stateHooks/useGetAllPlaylists';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import { useUserContext } from '../../contexts/UserContext';

export default function FLFoodListIndex(): JSX.Element {
    const user = useUserContext();
    const { playlists, isLoading } = useGetAllPlaylists({ userID: user?.id });

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
                        <>
                            <FLAlbumCover
                                key={999}
                                id={999}
                                userID={999}
                                title="Title"
                                description="Every <day>, at <time>"
                            />
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: Foodlist) => (
                                    <FLAlbumCover
                                        key={playlist.id}
                                        id={playlist.id}
                                        userID={playlist.userID}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: Foodlist) => (
                                    <FLAlbumCover
                                        key={playlist.id + 10}
                                        id={playlist.id}
                                        userID={playlist.userID}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                            {Boolean(playlists.length) &&
                                playlists.map((playlist: Foodlist) => (
                                    <FLAlbumCover
                                        key={playlist.id + 20}
                                        id={playlist.id}
                                        userID={playlist.userID}
                                        title={playlist.title}
                                        description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                        imgURL={playlist.imgURL}
                                    />
                                ))}
                        </>
                    )}
                </FLBox>
            </FLDataTray>
        </FLBox>
    );
}
