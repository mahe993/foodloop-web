import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLAlbumCover from '../../components/card/FLAlbumCover';
import FLBox from '../../components/box/FLBox';

export default function FLFoodListIndex(): JSX.Element {
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
                    <FLAlbumCover />
                    <FLAlbumCover />
                    <FLAlbumCover />
                </FLBox>
            </FLDataTray>
        </FLBox>
    );
}
