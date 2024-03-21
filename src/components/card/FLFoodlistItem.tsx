import FLBox from '../box/FLBox';
import FLImageBox from '../image/FLImageBox';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { defaultBoldText, smallBoldText } from '../../themes/typography';
import { useTheme } from '@mui/material';

type FLFoodlistItemProps = {
    title: string;
    description: string;
    currentSelection: boolean;
    completed: boolean;
    orderTime: string;
    imgSrc?: string;
};

export default function FLFoodlistItem({
    title,
    description,
    currentSelection,
    completed,
    orderTime,
    imgSrc = '',
}: FLFoodlistItemProps): JSX.Element {
    const theme = useTheme();

    return (
        <FLBox
            sx={{
                width: '100%',
                minHeight: '15svh',
                maxHeight: '15svh',
                borderRadius: '5px',
                backgroundColor: theme.palette.foodlist.light,
                overflow: 'hidden',
                justifyContent: 'flex-start',
                borderColor: theme.palette.foodloop.main,
                borderStyle: currentSelection ? 'solid' : 'none',
            }}
        >
            <FLBox
                sx={{
                    width: '90%',
                    marginInlineEnd: 'auto',
                    justifyContent: 'flex-start',
                    gap: '4%',
                }}
            >
                <FLBox sx={{ minWidth: '30%' }}>
                    <FLImageBox
                        boxWidth="100%"
                        boxHeight="15svh"
                        imgSrc={imgSrc}
                        fallback="../src/assets/images/albumFallback2.png"
                        imgHeight="100%"
                    />
                </FLBox>

                <FLBox
                    sx={{
                        flexDirection: 'column',
                        height: '15svh',
                        minWidth: '66%',
                    }}
                >
                    <FLBox
                        sx={{
                            ...defaultBoldText,
                            flex: 1,
                            width: '100%',
                        }}
                    >
                        <FLBox
                            sx={{
                                width: '100%',
                                alignSelf: 'flex-end',
                                /** required for ellipsis */
                                overflow: 'hidden',
                                display: 'block',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                /** required for ellipsis */
                            }}
                        >
                            {title}
                        </FLBox>
                    </FLBox>
                    <FLBox
                        sx={{
                            ...smallBoldText,
                            color: theme.palette.foodlist.contrastText,
                            flex: 1,
                            width: '100%',
                        }}
                    >
                        <FLBox
                            sx={{
                                width: '100%',
                                alignSelf: 'flex-start',
                                /** required for ellipsis */
                                overflow: 'hidden',
                                display: 'block',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                /** required for ellipsis */
                            }}
                        >
                            {description}
                        </FLBox>
                    </FLBox>
                    <FLBox
                        sx={{
                            ...smallBoldText,
                            color: theme.palette.foodlist.contrastText,
                            flex: 1,
                            width: '100%',
                        }}
                    >
                        <FLBox
                            sx={{
                                width: '100%',
                                alignSelf: 'flex-end',
                                /** required for ellipsis */
                                overflow: 'hidden',
                                display: 'block',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                /** required for ellipsis */
                            }}
                        >
                            {completed ? 'Completed' : `Order by ${orderTime}`}
                        </FLBox>
                    </FLBox>
                </FLBox>
            </FLBox>

            <FLBox sx={{ height: '10svh', marginInlineStart: '2%' }}>
                <MoreVertRoundedIcon />
            </FLBox>
        </FLBox>
    );
}
