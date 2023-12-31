import { ReactNode } from 'react';
import FLBox from '../../components/box/FLBox';
import { SxProps } from '@mui/material';

type VBentoTrayProps = {
    children: ReactNode;
    sx?: SxProps;
};

export default function VBentoTray({ children, sx }: VBentoTrayProps): JSX.Element {
    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                gap: '3%',
                ...sx,
            }}
        >
            {children}
        </FLBox>
    );
}
