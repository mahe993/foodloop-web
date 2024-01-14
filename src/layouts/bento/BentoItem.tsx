import { SxProps, useTheme, useMediaQuery } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import { defaultBoldText, smallLightText, smallBoldText, xSmallLightText } from '../../themes/typography';
import FLImageBox from '../../components/image/FLImageBox';
import { defaultAction } from '../../common/utils/utils';

type BentoItemProps = {
    title: string;
    description: string;
    imgSrc?: string;
    sx?: SxProps;
    onClick?: VoidFunction;
};

export default function BentoItem({
    title,
    description,
    imgSrc,
    sx,
    onClick = defaultAction('bento item clicked'),
}: BentoItemProps): JSX.Element {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('tablet'));

    return (
        <FLBox
            onClick={onClick}
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
            {Boolean(imgSrc) && (
                <FLImageBox
                    boxHeight={(sx as { flexDirection?: 'row' | 'column' })?.flexDirection === 'row' ? '100%' : '60%'}
                    boxWidth={(sx as { flexDirection?: 'row' | 'column' })?.flexDirection === 'row' ? '45%' : '80%'}
                    imgHeight="100%"
                    imgSrc={imgSrc as string}
                    sx={{
                        alignSelf: 'flex-end',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}
                />
            )}
        </FLBox>
    );
}
