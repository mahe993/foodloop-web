import { SxProps, useTheme } from '@mui/material';
import FLBox from '../../../layouts/box/FLBox';
import { smallLightText, defaultText } from '../../../themes/typography';

export type BaseHeaderProps = {
    addressLineOne: string;
    addressLineTwo: string;
    leftIcon: JSX.Element;
    lHandleClick: Voidfunction;
    rightPrimaryIcon: JSX.Element;
    rPHandleClick: VoidFunction;
    rSHandleClick: VoidFunction;
    rightSecondaryIcon: JSX.Element;
    sxContainer?: SxProps;
};

export default function BaseHeader({
    addressLineOne,
    addressLineTwo,
    leftIcon,
    lHandleClick,
    rightPrimaryIcon,
    rPHandleClick,
    rSHandleClick,
    rightSecondaryIcon,
    sxContainer,
}: BaseHeaderProps): JSX.Element {
    const theme = useTheme();

    return (
        <FLBox
            sx={{
                width: '100%',
                bgcolor: theme.palette.foodloop.main,
                minHeight: '12svh',
                height: '12svh',
                paddingInline: '2%',
                gap: '2%',
                ...sxContainer,
            }}
        >
            <FLBox onClick={lHandleClick} sx={{ flex: 0.2, height: '100%', justifyContent: 'flex-start' }}>
                {leftIcon}
            </FLBox>
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
                        ...defaultText,
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
            <FLBox sx={{ flex: 0.4, height: 'inherit', gap: '10%', justifyContent: 'flex-end' }}>
                <FLBox onClick={rPHandleClick}>{rightPrimaryIcon}</FLBox>
                <FLBox onClick={rSHandleClick}>{rightSecondaryIcon}</FLBox>
            </FLBox>
        </FLBox>
    );
}
