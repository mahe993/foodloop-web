import { useTheme } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import FLPage from '../base/FLPage';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Outlet, useNavigate } from 'react-router-dom';

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
                paddingBlockEnd: 0,
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
                    leftIcon={<ArrowBackRoundedIcon sx={{ color: theme.palette.foodloop.main, cursor: 'pointer' }} />}
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
                        search for food types
                    </FLBox>
                </FLHeaderWithSearch>
            </FLBox>
            <Outlet />
        </FLPage>
    );
}
