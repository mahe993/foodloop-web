import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLSplashScreen from '../../components/loader/FLSplashScreen';
import FLAlbumCover from '../../components/card/FLAlbumCover';
import FLBox from '../../components/box/FLBox';
import { Foodlist } from '../../common/hooks/stateHooks/types';
import useGetAllPlaylists from '../../common/hooks/stateHooks/useGetAllPlaylists';
import FLPauPauLoader from '../../components/loader/FLPauPauLoader';
import { useUserContext } from '../../contexts/UserContext';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useTheme } from '@mui/material';
import FLModal from '../../components/modal/FLModal';
import useModal from '../../common/hooks/stateHooks/useModal';
import { createFoodlist } from '../../api/foodlist/create';
import { getAlbumImg, newAbortSignal } from '../../common/utils/utils';
import TextField from '@mui/material/TextField';
import { DAYS, TIMINGS } from '../../constants';
import MenuItem from '@mui/material/MenuItem';
import useCreateFoodlistForm from '../../common/hooks/stateHooks/useCreateFoodlistForm';
import FLButton from '../../components/button/FLButton';
import useModalPages from '../../common/hooks/stateHooks/useModalPages';
import { defaultBoldText, smallLightText } from '../../themes/typography';
import { keyframes } from '@emotion/react';

export default function FLFoodListIndex(): JSX.Element {
    const user = useUserContext();
    const { playlists, isLoading, refresh } = useGetAllPlaylists({ userID: user?.id });
    const { openModal, setModalOpen } = useModal();
    const { page, setPage } = useModalPages();
    const { formValues, setFormValues, validateForm } = useCreateFoodlistForm();

    const theme = useTheme();

    const handleModalClose = (): void => {
        setFormValues({ query: '', recurringDay: '', recurringTime: '' });
        setPage(1);
        setModalOpen(false);
    };

    const createFoodlistModal = (): void => {
        setModalOpen(true);
    };

    const generateFoodlist = async (): Promise<void> => {
        try {
            if (!validateForm() || !user?.id) {
                setPage(2);
                return;
            }
            await createFoodlist(`${user?.id}`, newAbortSignal(), {
                query: formValues.query,
                recurringDay: formValues.recurringDay,
                recurringTime: formValues.recurringTime,
            });
            handleModalClose();
            refresh();
        } catch (e) {
            console.error(e);
            setPage(2);
        }
    };

    return (
        <>
            <FLBox
                sx={{
                    flexDirection: 'column',
                    flex: 1,
                    width: '100%',
                    marginBlockEnd: 'auto',
                    paddingBlockStart: '20svh',
                }}
            >
                <FLSplashScreen pageLoading={isLoading} />

                <FLDataTray
                    sx={{
                        color: 'white',
                    }}
                    title="Your Foodlists"
                    icon={
                        <FLBox
                            sx={{
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                createFoodlistModal();
                            }}
                        >
                            <AddCircleRoundedIcon sx={{ color: theme.palette.foodloop.main }} />
                        </FLBox>
                    }
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
                            <FLBox
                                sx={{
                                    flexDirection: 'column',
                                    width: '100%',
                                    height: '60svh',
                                }}
                            >
                                <FLPauPauLoader sx={{ marginBlockStart: 'auto', marginBlockEnd: 0 }} />
                                <FLBox
                                    sx={{
                                        ...smallLightText,
                                        animation: `${fade} 1.5s infinite ease-in-out`,
                                        marginBlockEnd: 'auto',
                                        marginBlockStart: '6%',
                                    }}
                                >
                                    Generating list...
                                </FLBox>
                            </FLBox>
                        ) : (
                            Boolean(playlists.length) &&
                            playlists.map((playlist: Foodlist, i) => (
                                <FLAlbumCover
                                    key={playlist.id}
                                    id={playlist.id}
                                    title={playlist.title}
                                    description={`Every ${playlist.recurringDay}, at ${playlist.recurringTime}`}
                                    imgURL={getAlbumImg(playlist.category, i)}
                                />
                            ))
                        )}
                    </FLBox>
                </FLDataTray>
            </FLBox>
            <FLModal open={openModal} close={handleModalClose}>
                {page === 1 && (
                    <>
                        <TextField
                            fullWidth
                            focused
                            required
                            size="small"
                            label="Query"
                            placeholder="I want a list of burgers."
                            helperText="You can use natural langauge."
                            value={formValues.query}
                            onChange={(e): void => {
                                setFormValues({ query: e.target.value });
                            }}
                        />
                        <TextField
                            fullWidth
                            focused
                            required
                            select
                            size="small"
                            label="Day"
                            helperText="Please select the recurring day for food to be ordered."
                            value={formValues.recurringDay}
                            onChange={(e): void => {
                                setFormValues({ recurringDay: e.target.value });
                            }}
                        >
                            {DAYS.map(option => (
                                <MenuItem
                                    key={option}
                                    value={option}
                                    dense
                                    sx={{
                                        '&:focus, :active': {
                                            backgroundColor: theme.palette.foodloop.main, // Change to the desired gold color
                                        },
                                    }}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            focused
                            required
                            select
                            size="small"
                            label="Time"
                            defaultValue={TIMINGS[0]}
                            helperText="Please select the recurring time for food to be ordered."
                            value={formValues.recurringTime}
                            onChange={(e): void => {
                                setFormValues({ recurringTime: e.target.value });
                            }}
                        >
                            {TIMINGS.map(option => (
                                <MenuItem
                                    key={option}
                                    value={option}
                                    dense
                                    sx={{
                                        '&:focus, :active': {
                                            backgroundColor: theme.palette.foodloop.main, // Change to the desired gold color
                                        },
                                    }}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <FLBox>
                            <FLButton
                                sx={{
                                    color: theme.palette.foodlist.main,
                                    backgroundColor: theme.palette.foodloop.main,
                                }}
                                hoverColor={theme.palette.foodloop.main}
                                pressState
                                onClick={generateFoodlist}
                            >
                                Generate
                            </FLButton>
                        </FLBox>
                    </>
                )}
                {page === 2 && (
                    <>
                        <FLBox
                            sx={{
                                ...defaultBoldText,
                            }}
                        >
                            Error generating foodlist
                        </FLBox>
                        <FLBox
                            sx={{
                                ...smallLightText,
                            }}
                        >
                            Please ensure you have filled all fields or try a different query.
                        </FLBox>
                        <FLButton
                            sx={{
                                color: 'white',

                                backgroundColor: theme.palette.foodloop.main,
                            }}
                            hoverColor={theme.palette.foodloop.main}
                            pressState
                            onClick={(): void => {
                                setPage(1);
                            }}
                        >
                            Try Again
                        </FLButton>
                    </>
                )}
            </FLModal>
        </>
    );
}

const fade = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
