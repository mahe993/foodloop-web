import { SxProps, useTheme, useMediaQuery } from '@mui/material';
import FLBox from '../box/FLBox';
import { defaultBoldText, smallLightText, smallBoldText, xSmallLightText } from '../../themes/typography';

type BentoItemProps = {
    title: string;
    description: string;
    imgSrc?: string;
    sx?: SxProps;
};

export default function BentoItem({
    title,
    description,
    imgSrc = 'https://source.unsplash.com/random',
    sx,
}: BentoItemProps): JSX.Element {
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
                    width: (sx as { flexDirection?: 'row' | 'column' })?.flexDirection === 'row' ? '50%' : '100%',
                    overflow: 'wrap',
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
                    width: (sx as { flexDirection?: 'row' | 'column' })?.flexDirection === 'row' ? '45%' : '80%',
                    height: (sx as { flexDirection?: 'row' | 'column' })?.flexDirection === 'row' ? '100%' : '60%',
                    overflow: 'hidden',
                    position: 'relative',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <img
                    alt="bento-item"
                    src={imgSrc}
                    style={{
                        display: 'block',
                        height: '100%',
                        objectFit: 'contain',
                        position: 'absolute',
                    }}
                />
            </FLBox>
        </FLBox>
    );
}
