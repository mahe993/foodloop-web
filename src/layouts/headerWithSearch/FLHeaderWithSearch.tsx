import { ReactNode } from 'react';
import { useTheme } from '@mui/material';
import FLHeader, { FLHeaderProps } from '../../components/header/FLHeader';
import FLSearch from '../../components/search/FLSearch';
import FLBox from '../../components/box/FLBox';

type FLHeaderWithSearchProps = FLHeaderProps & {
    searchText?: string;
    inputPlaceholder?: string;
    themeColor?: string;
    children?: ReactNode;
};

export default function FLHeaderWithSearch({
    searchText,
    inputPlaceholder,
    addressLineOne,
    addressLineTwo,
    leftIcon,
    lHandleClick,
    rightPrimaryIcon,
    rPHandleClick,
    rightSecondaryIcon,
    rSHandleClick,
    sx,
    themeColor,
    children,
}: FLHeaderWithSearchProps): JSX.Element {
    const theme = useTheme();
    return (
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
            <FLHeader
                addressLineOne={addressLineOne}
                addressLineTwo={addressLineTwo}
                leftIcon={leftIcon}
                lHandleClick={lHandleClick}
                rightPrimaryIcon={rightPrimaryIcon}
                rPHandleClick={rPHandleClick}
                rightSecondaryIcon={rightSecondaryIcon}
                rSHandleClick={rSHandleClick}
                sx={sx}
            />
            <FLSearch searchText={searchText} inputPlaceholder={inputPlaceholder} themeColor={themeColor}>
                {children}
            </FLSearch>
        </FLBox>
    );
}
