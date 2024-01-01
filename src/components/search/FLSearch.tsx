import { Box, Collapse, useTheme } from '@mui/material';
import FLSearchBox from './FLSearchBox';
import FLSearchContent from './FLSearchContent';
import { useState } from 'react';
import useHideOnScroll from '../../common/hooks/useHideOnScroll';
import FLBox from '../../components/box/FLBox';
import { smallLightText } from '../../themes/typography';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FLButton from '../button/FLButton';

export default function FLSearch(): JSX.Element {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const { isHidden } = useHideOnScroll();

    const theme = useTheme();

    const handleClick = (): void => {
        setOpenSearch(true);
    };

    return (
        <Box sx={{ marginBlockEnd: 'auto', width: '100%' }}>
            <Collapse in={!isHidden} mountOnEnter unmountOnExit>
                <FLBox
                    onClick={handleClick}
                    sx={{
                        bgcolor: theme.palette.foodloop.main,
                        height: '8svh',
                        width: '100%',
                        paddingInline: '4%',
                    }}
                >
                    <FLButton
                        pressState
                        startIcon={<SearchRoundedIcon />}
                        sx={{
                            ...smallLightText,
                            color: 'grey',
                            width: '100%',
                            gap: '2%',
                            paddingInline: '6%',
                        }}
                    >
                        Search for shops & restaurants
                    </FLButton>
                </FLBox>
            </Collapse>
            <FLSearchBox open={openSearch}>
                <FLSearchContent
                    closeSearch={() => {
                        setOpenSearch(false);
                    }}
                />
            </FLSearchBox>
        </Box>
    );
}
