import { SxProps, useTheme } from '@mui/material';
import FLBox from '../../../components/box/FLBox';
import { smallLightText, defaultBoldText } from '../../../themes/typography';

export type BaseHeaderProps = {
    addressLineOne: string;
    addressLineTwo: string;
    addressHandleClick: VoidFunction;
    leftIcon: JSX.Element;
    lHandleClick: VoidFunction;
    rightPrimaryIcon: JSX.Element;
    rPHandleClick: VoidFunction;
    rSHandleClick: VoidFunction;
    rightSecondaryIcon: JSX.Element;
    sxContainer?: SxProps;
};

export default function BaseHeader({
    addressLineOne,
    addressLineTwo,
    addressHandleClick,
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
                minHeight: '10svh',
                height: '10svh',
                paddingInline: '4%',
                gap: '2%',
                justifyContent: 'space-between',
                ...sxContainer,
            }}
        >
            <FLBox onClick={lHandleClick} sx={{ flex: 0.1, height: '100%', justifyContent: 'flex-start' }}>
                {leftIcon}
            </FLBox>
            <FLBox
                onClick={addressHandleClick}
                sx={{
                    flex: 0.7,
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
                        ...defaultBoldText,
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
            <FLBox sx={{ flex: 0.2, height: 'inherit', gap: '10%', justifyContent: 'flex-end' }}>
                <FLBox onClick={rPHandleClick}>{rightPrimaryIcon}</FLBox>
                <FLBox onClick={rSHandleClick}>{rightSecondaryIcon}</FLBox>
            </FLBox>
        </FLBox>
    );
}
