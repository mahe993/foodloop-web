import { SxProps } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import VBentoTray from './VBentoTray';
import BentoItem from './BentoItem';
import { useNavigate } from 'react-router-dom';

type BentoProps = {
    sx?: SxProps;
};

export default function FLBento({ sx }: BentoProps): JSX.Element {
    const navigate = useNavigate();

    return (
        <FLBox
            sx={{
                backgroundColor: '#F2F2F2',
                width: '100%',
                minHeight: '78svh',
                height: '78svh',
                padding: '2svh',
                gap: '4%',
                color: 'black',
                ...sx,
            }}
        >
            <VBentoTray
                sx={{
                    flex: 1,
                    height: '100%',
                    width: '42%',
                }}
            >
                <BentoItem
                    description="New, experimental food playlist feature!"
                    imgSrc="src/assets/images/foodloop.png"
                    sx={{ flex: 0.54 }}
                    title="Food loop"
                    onClick={() => {
                        navigate('/foodloop');
                    }}
                />
                <BentoItem
                    description="Up to 50% off"
                    imgSrc="src/assets/images/pick-up.png"
                    sx={{ flex: 0.23, flexDirection: 'row' }}
                    title="Pick-up"
                />
                <BentoItem
                    description="Send parcels"
                    imgSrc="src/assets/images/pandago.png"
                    sx={{ flex: 0.23, flexDirection: 'row' }}
                    title="pandago"
                />
            </VBentoTray>
            <VBentoTray
                sx={{
                    flex: 1,
                    height: '100%',
                    width: '42%',
                }}
            >
                <BentoItem
                    description="Fresh groceries & more"
                    imgSrc="src/assets/images/pandamart.png"
                    sx={{ flex: 0.385 }}
                    title="pandamart"
                />
                <BentoItem
                    description="Giant, CS Fresh & more"
                    imgSrc="src/assets/images/shops.png"
                    sx={{ flex: 0.385 }}
                    title="Shops"
                />
                <BentoItem
                    description="Up to 50% off Entire bill"
                    imgSrc="src/assets/images/dine-in.png"
                    sx={{ flex: 0.23, flexDirection: 'row' }}
                    title="Dine-in"
                />
            </VBentoTray>
        </FLBox>
    );
}
