import BaseHeader from '../base/header/BaseHeader';
import { SxProps } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { defaultAction } from '../../common/utils/utils';

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
    lHandleClick = defaultAction('Left Icon clicked'),
    rightPrimaryIcon = <FavoriteBorderRoundedIcon />,
    rPHandleClick = defaultAction('Right Primary Icon clicked'),
    rightSecondaryIcon = <ShoppingCartOutlinedIcon />,
    rSHandleClick = defaultAction('Right Secondary Icon clicked'),
    sx,
}: FLHeaderProps): JSX.Element {
    return (
        <BaseHeader
            addressLineOne={addressLineOne}
            addressLineTwo={addressLineTwo}
            lHandleClick={lHandleClick}
            leftIcon={leftIcon}
            rPHandleClick={rPHandleClick}
            rSHandleClick={rSHandleClick}
            rightPrimaryIcon={rightPrimaryIcon}
            rightSecondaryIcon={rightSecondaryIcon}
            sxContainer={sx}
        />
    );
}
