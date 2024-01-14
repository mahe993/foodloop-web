import { SxProps, useTheme, useMediaQuery } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import { defaultBoldText, smallLightText, smallBoldText, xSmallLightText } from '../../themes/typography';
import FLImageBox from '../../components/image/FLImageBox';
import { useErrorSnackbar } from '../../contexts/ErrorSnackbarContext';

type BentoItemProps = {
    title: string;
    description: string;
    imgSrc?: string;
    onClick?: VoidFunction;
    sx?: SxProps;
};

export default function BentoItem({ title, description, imgSrc, onClick, sx }: BentoItemProps): JSX.Element {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('tablet'));
    const snackbar = useErrorSnackbar();

    let handleClick = onClick;
    if (!onClick) {
        handleClick = (): void => {
            if (snackbar.setOpen) snackbar.setOpen(true);
        };
    }

    return (
        <FLBox
            onClick={handleClick}
            sx={{
                borderRadius: '10px',
                maxWidth: '100%',
                width: '100%',
                backgroundColor: 'white',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingBlock: '4%',
                paddingInlineStart: '6%',
                boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)',
                cursor: title === 'Food loop' ? 'pointer' : undefined,
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
