import BaseHeader from '../base/header/BaseHeader';
import { SxProps } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useErrorSnackbar } from '../../contexts/ErrorSnackbarContext';

export type FLHeaderProps = {
    addressLineOne?: string;
    addressLineTwo?: string;
    leftIcon?: JSX.Element;
    lHandleClick?: VoidFunction;
    rightPrimaryIcon?: JSX.Element;
    rPHandleClick?: VoidFunction;
    rightSecondaryIcon?: JSX.Element;
    rSHandleClick?: VoidFunction;
    sx?: SxProps;
};

export default function FLHeader({
    addressLineOne = 'Afro Asia',
    addressLineTwo = '63 Robinson Rd, Singapore 068894',
    leftIcon = <MenuRoundedIcon />,
    lHandleClick,
    rightPrimaryIcon = <FavoriteBorderRoundedIcon />,
    rPHandleClick,
    rightSecondaryIcon = <ShoppingCartOutlinedIcon />,
    rSHandleClick,
    sx,
}: FLHeaderProps): JSX.Element {
    const snackbar = useErrorSnackbar();

    const defaultClick = (): void => {
        if (snackbar.setOpen) snackbar.setOpen(true);
    };

    return (
        <BaseHeader
            addressLineOne={addressLineOne}
            addressLineTwo={addressLineTwo}
            addressHandleClick={defaultClick}
            lHandleClick={lHandleClick ? lHandleClick : defaultClick}
            leftIcon={leftIcon}
            rPHandleClick={rPHandleClick ? rPHandleClick : defaultClick}
            rSHandleClick={rSHandleClick ? rSHandleClick : defaultClick}
            rightPrimaryIcon={rightPrimaryIcon}
            rightSecondaryIcon={rightSecondaryIcon}
            sxContainer={sx}
        />
    );
}
