import { SxProps, useTheme } from '@mui/material';
import FLBox from '../../../layouts/Box/FLBox';
import { smallLightText } from '../../../themes/typography';

export type BaseHeaderProps = {
    addressLineOne: string;
    addressLineTwo: string;
    leftIcon: JSX.Element;
    rightPrimaryIcon: JSX.Element;
    rightSecondaryIcon: JSX.Element;
    sxContainer?: SxProps;
};

export default function BaseHeader({
    addressLineOne,
    addressLineTwo,
    leftIcon,
    rightPrimaryIcon,
    rightSecondaryIcon,
    sxContainer,
}: BaseHeaderProps): JSX.Element {
    const theme = useTheme();

    return (
        <FLBox
            sx={{
                width: '100%',
                bgcolor: theme.palette.foodloop.main,
                minHeight: '10dvh',
                height: '10dvh',
                paddingInline: '2%',
                gap: '2%',
                ...sxContainer,
            }}
        >
            <FLBox sx={{ flex: 0.2, height: '100%' }}>{leftIcon}</FLBox>
            <FLBox
                sx={{
                    flex: 1,
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    maxWidth: '55dvw',
                }}
            >
                <FLBox
                    sx={{
                        width: '100%',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        display: 'block',
                    }}
                >
                    {addressLineOne}
                </FLBox>
                <FLBox
                    sx={{
                        width: '100%',
                        ...smallLightText,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        display: 'block',
                    }}
                >
                    {addressLineTwo}
                </FLBox>
            </FLBox>
            <FLBox sx={{ flex: 0.2, height: 'inherit' }}>{rightPrimaryIcon}</FLBox>
            <FLBox sx={{ flex: 0.2, height: 'inherit' }}>{rightSecondaryIcon}</FLBox>
        </FLBox>
    );
}
