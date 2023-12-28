import BaseHeader from '../../base/header/BaseHeader';
import { SxProps } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export type FLHeaderProps = {
    addressLineOne?: string;
    addressLineTwo?: string;
    leftIcon?: JSX.Element;
    rightPrimaryIcon?: JSX.Element;
    rightSecondaryIcon?: JSX.Element;
    sx?: SxProps;
};

export default function FLHeader({
    addressLineOne = 'Address line 1',
    addressLineTwo = 'Address line 2',
    leftIcon = <MenuRoundedIcon />,
    rightPrimaryIcon = <FavoriteBorderRoundedIcon />,
    rightSecondaryIcon = <ShoppingCartOutlinedIcon />,
    sx,
}: FLHeaderProps): JSX.Element {
    return (
        <BaseHeader
            addressLineOne={addressLineOne}
            addressLineTwo={addressLineTwo}
            leftIcon={leftIcon}
            rightPrimaryIcon={rightPrimaryIcon}
            rightSecondaryIcon={rightSecondaryIcon}
            sxContainer={sx}
        />
    );
}
