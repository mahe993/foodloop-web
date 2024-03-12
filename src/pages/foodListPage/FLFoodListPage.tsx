import { useTheme } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import FLPage from '../base/FLPage';
import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';

export default function FLFoodListPage(): JSX.Element {
    const theme = useTheme();
    const navigate = useNavigate();

    const goBack = (): void => {
        navigate(-1);
    };

    return (
        <FLPage
            sx={{
                bgcolor: theme.palette.foodlist.main,
            }}
        >
            <FLBox
                sx={{
                    flexDirection: 'column',
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    maxWidth: theme.breakpoints.values.tablet,
                    zIndex: 1,
                }}
            >
                <FLHeaderWithSearch
                    searchText="Search for food types"
                    inputPlaceholder="Search for food types"
                    addressLineOne="Demo Account"
                    addressLineTwo="Welcome to foodlist demo :)"
                    leftIcon={<ArrowBackRoundedIcon sx={{ color: theme.palette.foodloop.main }} />}
                    lHandleClick={goBack}
                    rightPrimaryIcon={<></>}
                    rightSecondaryIcon={<></>}
                    themeColor="foodlist"
                    sx={{
                        bgcolor: theme.palette.foodlist.light,
                    }}
                >
                    <FLBox
                        sx={{
                            marginBlockStart: '4%',
                            paddingInline: '4%',
                            fontStyle: 'italic',
                        }}
                    >
                        search content here
                    </FLBox>
                </FLHeaderWithSearch>
            </FLBox>
            <FLBox
                sx={{
                    flexDirection: 'column',
                    flex: 1,
                    width: '100%',
                    marginBlockEnd: 'auto',
                    paddingBlockStart: '20svh',
                    paddingInline: '4%',
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
                        <FLBox
                            sx={{
                                paddingBlock: '20%',
                                backgroundColor: 'grey',
                                width: '48%',
                                marginBlockEnd: '4%',
                            }}
                        >
                            Food List 1
                        </FLBox>
                        <FLBox
                            sx={{
                                paddingBlock: '20%',
                                backgroundColor: 'grey',
                                width: '48%',
                                marginBlockEnd: '4%',
                            }}
                        >
                            Food List 2
                        </FLBox>
                        <FLBox
                            sx={{
                                paddingBlock: '20%',
                                backgroundColor: 'grey',
                                width: '48%',
                                marginBlockEnd: '4%',
                            }}
                        >
                            Food List 2
                        </FLBox>
                    </FLBox>
                </FLDataTray>
            </FLBox>
        </FLPage>
    );
}
