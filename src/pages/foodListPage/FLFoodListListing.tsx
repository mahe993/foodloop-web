import { useParams } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';
import { smallText, albumTitle } from '../../themes/typography';

export default function FLFoodListListing(): JSX.Element {
    const { id } = useParams();

    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                minHeight: '100svh',
                width: '100%',
                paddingBlockStart: '20svh',
                paddingInline: '4%',
                backgroundColor: 'red',
                justifyContent: 'flex-start',
                gap: '2svh',
            }}
        >
            <FLBox
                sx={{
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <FLBox
                    sx={{
                        flexDirection: 'column',
                    }}
                >
                    <FLBox
                        sx={{
                            ...albumTitle,
                            justifyContent: 'flex-start',
                            backgroundColor: 'grey',
                            width: '100%',
                        }}
                    >
                        title
                    </FLBox>
                    <FLBox
                        sx={{
                            ...smallText,
                            justifyContent: 'flex-start',
                            backgroundColor: 'grey',
                            width: '100%',
                        }}
                    >
                        every monday, at 3pm
                    </FLBox>
                </FLBox>

                <FLBox>play button</FLBox>
            </FLBox>

            <FLBox
                sx={{
                    border: 1,
                    width: '100%',
                }}
            >
                playlist here
            </FLBox>
        </FLBox>
    );
}
