/* eslint-disable indent */
import { useNavigate, useParams } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';
import { smallLightText, albumTitle } from '../../themes/typography';
import { useEffect } from 'react';
import { whiteList } from '../../constants';
import { useUserContext } from '../../contexts/UserContext';
import { PlayState } from '../../common/hooks/stateHooks/types';
import FLPlayButton from '../../components/button/FLPlayButton';
import FLFoodlistItem from '../../components/card/FLFoodlistItem';
import useGetAllFood from '../../common/hooks/stateHooks/useGetAllFood';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import useGetPlaylistStatus from '../../common/hooks/stateHooks/useGetPlaylistStatus';
import { getNearestTime } from '../../common/utils/utils';

export default function FLFoodListListing(): JSX.Element {
    const { id } = useParams();
    const user = useUserContext();
    const { foods, isLoading } = useGetAllFood({ userID: user.id, foodlistID: Number(id) });

    const {
        foodlist: { recurringDay, recurringTime, status: listStatus, currentFoodIdx: currIdx, userID, title },
        setCurrIdx,
        setListStatus,
        isLoading: listLoading,
    } = useGetPlaylistStatus({
        id: Number(id),
    });
    const description = `Every ${recurringDay}, at ${recurringTime}`;

    const navigate = useNavigate();

    useEffect(() => {
        if (!whiteList.has(userID) && (!title || !userID || userID !== user?.id)) {
            navigate('/invalid');
        }
    }, []);

    const handleClick = (): void => {
        setListStatus(listStatus === PlayState.PLAY ? PlayState.PAUSE : PlayState.PLAY);
        if (listStatus === PlayState.PAUSE && currIdx === 0) {
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
                        {title}
                    </FLBox>
                    <FLBox
                        sx={{
                            ...smallLightText,
                            justifyContent: 'flex-start',
                            width: '100%',
                            color: 'grey.600',
                        }}
                    >
                        {description}
                    </FLBox>
                </FLBox>

                {!listLoading && !isLoading && <FLPlayButton state={listStatus} handleClick={handleClick} />}
            </FLBox>

            <FLBox
                sx={{
                    width: '100%',
                    flexDirection: 'column',
                    gap: '0.5svh',
                    justifyContent: 'flex-start',
                }}
            >
                {isLoading || listLoading ? (
                    <FLPauPauLoader sx={{ height: '60svh' }} />
                ) : (
                    Boolean(foods.length) &&
                    foods.map((food, i) => (
                        <FLFoodlistItem
                            key={food.index}
                            title={food.name}
                            description={food.description || ''}
                            currentSelection={listStatus === PlayState.PLAY && currIdx === food.index}
                            orderTime={
                                currIdx <= food.index
                                    ? getNearestTime(recurringDay, recurringTime).add(
                                          i - foods.findIndex(f => f.index === currIdx),
                                          'week',
                                      )
                                    : undefined
                            }
                        />
                    ))
                )}
            </FLBox>
        </FLBox>
    );
}
