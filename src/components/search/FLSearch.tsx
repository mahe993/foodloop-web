import { ReactNode } from 'react';
import { Box, Collapse, useTheme } from '@mui/material';
import SearchBox from './SearchBox';
import SearchContent from './SearchContent';
import { useState } from 'react';
import useHideOnScroll from '../../common/hooks/useHideOnScroll';
import FLBox from '../../components/box/FLBox';
import { smallLightText } from '../../themes/typography';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FLButton from '../button/FLButton';

type FLSearchProps = {
    searchText?: string;
    inputPlaceholder?: string;
    themeColor?: string;
    children?: ReactNode;
};

export default function FLSearch({ searchText, inputPlaceholder, children, themeColor }: FLSearchProps): JSX.Element {
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
                        bgcolor: themeColor === 'foodlist' ? theme.palette.foodlist.light : theme.palette.foodloop.main,
                        height: '6svh',
                        width: '100%',
                        paddingInline: '4%',
                        alignItems: 'flex-start',
                    }}
                >
                    <FLButton
                        pressState
                        startIcon={<SearchRoundedIcon />}
                        sx={{
                            ...smallLightText,
                            color: 'grey',
                            width: '100%',
                        }}
                    >
                        {searchText ?? 'Search for shops & restaurants'}
                    </FLButton>
                </FLBox>
            </Collapse>
            <SearchBox open={openSearch}>
                <SearchContent
                    inputPlaceholder={inputPlaceholder}
                    closeSearch={() => {
                        setOpenSearch(false);
                    }}
                >
                    {children}
                </SearchContent>
            </SearchBox>
        </Box>
    );
}
