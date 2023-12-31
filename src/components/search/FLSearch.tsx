import { Box, Collapse, useTheme } from '@mui/material';
import FLSearchBox from './FLSearchBox';
import FLSearchContent from './FLSearchContent';
import { useState } from 'react';
import useHideOnScroll from '../../common/hooks/useHideOnScroll';
import FLBox from '../../components/box/FLBox';

export default function FLSearch(): JSX.Element {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const { isHidden, scrollPosition } = useHideOnScroll();

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
                    }}
                >
                    open search button
                </FLBox>
            </Collapse>
            <FLSearchBox offsetY={scrollPosition} open={openSearch}>
                <FLSearchContent
                    closeSearch={() => {
                        setOpenSearch(false);
                    }}
                />
            </FLSearchBox>
        </Box>
    );
}
