import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';
import { smallLightText, albumTitle } from '../../themes/typography';
import { useEffect, useState } from 'react';
import { whiteList } from '../../constants';
import { useUserContext } from '../../contexts/UserContext';
import { PlayState } from '../../common/hooks/stateHooks/types';
import FLPlayButton from '../../components/button/FLPlayButton';
import FLFoodlistItem from '../../components/card/FLFoodlistItem';
import useGetAllFood from '../../common/hooks/stateHooks/useGetAllFood';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import useGetPlaylistStatus from '../../common/hooks/stateHooks/useGetPlaylistStatus';

export default function FLFoodListListing(): JSX.Element {
    const [playState, setPlayState] = useState<PlayState>(PlayState.PLAY);
    const { id } = useParams();
    const user = useUserContext();
    const { state = {} } = useLocation();
    const { foods, isLoading } = useGetAllFood({ userID: user.id, foodlistID: Number(id) });
    const { currIdx, setCurrIdx } = useGetPlaylistStatus({ id: Number(id) });

    const navigate = useNavigate();

    useEffect(() => {
        if (
            !whiteList.has(state?.userID) &&
            (!state?.title || !state?.description || !state?.userID || state?.userID !== user?.id)
        ) {
            navigate('/invalid');
        }
    }, []);

    const handleClick = (): void => {
        setPlayState(playState === PlayState.PLAY ? PlayState.PAUSE : PlayState.PLAY);
        if (playState === PlayState.PLAY && currIdx === 0) {
            // post request to update currIdx
            setCurrIdx(1);
        }
    };

    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                minHeight: '100svh',
                width: '100%',
                paddingBlockStart: '20svh',
                paddingInline: '4%',
                justifyContent: 'flex-start',
                gap: '2svh',
            }}
        >
            <FLBox
                sx={{
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <FLBox
                    sx={{
                        flexDirection: 'column',
                    }}
                >
                    <FLBox
                        sx={{
                            ...albumTitle,
                            justifyContent: 'flex-start',
                            width: '100%',
                            textTransform: 'uppercase',
                        }}
                    >
                        {state?.title}
                    </FLBox>
                    <FLBox
                        sx={{
                            ...smallLightText,
                            justifyContent: 'flex-start',
                            width: '100%',
                            color: 'grey.600',
                        }}
                    >
                        {state?.description}
                    </FLBox>
                </FLBox>

                <FLPlayButton state={playState} handleClick={handleClick} />
            </FLBox>

            <FLBox
                sx={{
                    width: '100%',
                    flexDirection: 'column',
                    gap: '0.5svh',
                    justifyContent: 'flex-start',
                }}
            >
                {isLoading ? (
                    <FLPauPauLoader sx={{ height: '60svh' }} />
                ) : (
                    Boolean(foods.length) &&
                    foods.map(food => (
                        <FLFoodlistItem
                            key={food.index}
                            title={food.name}
                            description={food.description || ''}
                            currentSelection={currIdx === food.index}
                        />
                    ))
                )}
            </FLBox>
        </FLBox>
    );
}
