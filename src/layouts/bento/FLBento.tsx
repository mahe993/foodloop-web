import { SxProps } from '@mui/material';
import FLBox from '../box/FLBox';
import VBentoTray from './VBentoTray';
import BentoItem from './BentoItem';

type BentoProps = {
    sx?: SxProps;
};

export default function FLBento({ sx }: BentoProps): JSX.Element {
    return (
        <FLBox
            sx={{
                backgroundColor: '#F2F2F2',
                width: '100%',
                minHeight: '70svh',
                height: '70svh',
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
                    sx={{ flex: 0.54 }}
                    title="Food loop"
                    description="New, experimental food playlist feature!"
                />
                <BentoItem sx={{ flex: 0.23, flexDirection: 'row' }} title="Pick-up" description="Up to 50% off" />
                <BentoItem sx={{ flex: 0.23, flexDirection: 'row' }} title="pandago" description="Send parcels" />
            </VBentoTray>
            <VBentoTray
                sx={{
                    flex: 1,
                    height: '100%',
                    width: '42%',
                }}
            >
                <BentoItem sx={{ flex: 0.385 }} title="pandamart" description="Fresh groceries & more" />
                <BentoItem sx={{ flex: 0.385 }} title="Shops" description="Giant, CS Fresh & more" />
                <BentoItem
                    sx={{ flex: 0.23, flexDirection: 'row' }}
                    title="Dine-in"
                    description="Up to 50% off Entire bill"
                />
            </VBentoTray>
        </FLBox>
    );
}
