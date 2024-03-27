/* eslint-disable indent */
import { useNavigate, useParams } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';
import { smallLightText, albumTitle } from '../../themes/typography';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { PlayState } from '../../common/hooks/stateHooks/types';
import FLPlayButton from '../../components/button/FLPlayButton';
import FLFoodlistItem from '../../components/card/FLFoodlistItem';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import useGetPlaylistStatus from '../../common/hooks/stateHooks/useGetPlaylistStatus';
import { getFoodImg, getNearestTime } from '../../common/utils/utils';
import dayjs from 'dayjs';

export default function FLFoodListListing(): JSX.Element {
    const [description, setDescription] = useState<string>('');
    const [nearestTime, setNearestTime] = useState<dayjs.Dayjs>(dayjs());
    const { id } = useParams();
    const user = useUserContext();

    const {
        foodlist: { recurringDay = '', recurringTime = '', status: listStatus, currentFoodIdx: currIdx, title },
        foods,
        setCurrIdx,
        setListStatus,
        isLoading: listLoading,
        refresh,
    } = useGetPlaylistStatus({
        foodlistID: Number(id),
        userID: user?.id,
    });

    useEffect(() => {
        setDescription(`Every ${recurringDay}, at ${recurringTime}`);
        if (recurringDay && recurringTime) setNearestTime(getNearestTime(recurringDay, recurringTime));
    }, [recurringDay, recurringTime, currIdx, listStatus]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!listLoading && (!title || !user.id || !recurringDay || !recurringTime)) {
            navigate('/invalid');
        }
    }, [listLoading, navigate, recurringDay, recurringTime, title, user.id]);

    const handleClick = (): void => {
        setListStatus(listStatus === PlayState.PLAY ? PlayState.PAUSE : PlayState.PLAY);
        if (listStatus === PlayState.PAUSE && currIdx === 0) {
            // post request to update currIdx
            setCurrIdx(1);
        }
    };

    useEffect(() => {
        if (!recurringDay || !recurringTime) return;
        // Calculate the difference between now and the target time
        const now = dayjs();
        const targetTime = getNearestTime(recurringDay, recurringTime);
        const timeDifference = targetTime.diff(now);

        // If the target time has already passed, do nothing
        if (timeDifference <= 0) {
            return;
        }

        // Set a timeout to call setCurrIdx when the time difference reaches zero
        const timeoutId = setTimeout(() => {
            setCurrIdx(currIdx + 1);
            refresh();
        }, timeDifference);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, [currIdx, recurringDay, recurringTime]);

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
                {!listLoading && (
                    <>
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

                        <FLPlayButton state={listStatus} handleClick={handleClick} />
                    </>
                )}
            </FLBox>

            <FLBox
                sx={{
                    width: '100%',
                    flexDirection: 'column',
                    gap: '1svh',
                    justifyContent: 'flex-start',
                }}
            >
                {listLoading ? (
                    <FLPauPauLoader sx={{ height: '60svh' }} />
                ) : (
                    Boolean(foods.length) &&
                    Boolean(recurringDay) &&
                    Boolean(recurringTime) &&
                    foods.map((food, i) => (
                        <FLFoodlistItem
                            key={food.index}
                            title={food.name}
                            description={food.description || ''}
                            currentSelection={listStatus === PlayState.PLAY && currIdx === food.index}
                            imgSrc={getFoodImg(food.category, i)}
                            orderTime={
                                currIdx <= food.index
                                    ? nearestTime.add(i - foods.findIndex(f => f.index === currIdx), 'week')
                                    : undefined
                            }
                        />
                    ))
                )}
            </FLBox>
        </FLBox>
    );
}
