import { useParams } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';

export default function FLFoodListListing(): JSX.Element {
    const { id } = useParams();

    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                flex: 1,
                width: '100%',
                marginBlockEnd: 'auto',
                paddingBlockStart: '20svh',
            }}
        >
            playlist {id}
        </FLBox>
    );
}
