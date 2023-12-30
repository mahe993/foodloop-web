import { SxProps, useTheme, useMediaQuery } from '@mui/material';
import FLBox from '../box/FLBox';
import { defaultBoldText, smallLightText, smallBoldText, xSmallLightText } from '../../themes/typography';

type BentoItemProps = {
    title: string;
    description: string;
    imgSrc?: string;
    sx?: SxProps;
};

export default function BentoItem({ title, description, imgSrc, sx }: BentoItemProps): JSX.Element {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <FLBox
            sx={{
                borderRadius: '5px',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'white',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingBlock: '2%',
                paddingInlineStart: '4%',
                boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
                ...sx,
            }}
        >
            <FLBox
                sx={{
                    alignSelf: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <FLBox
                    sx={{
                        ...(isPhone ? smallBoldText : defaultBoldText),
                    }}
                >
                    {title}
                </FLBox>
                <FLBox sx={{ ...(isPhone ? xSmallLightText : smallLightText) }}>{description}</FLBox>
            </FLBox>
            <FLBox
                sx={{
                    alignSelf: 'flex-end',
                    border: 1,
                    flex: 1,
                    width: '50%',
                }}
            >
                {imgSrc}
            </FLBox>
        </FLBox>
    );
}
