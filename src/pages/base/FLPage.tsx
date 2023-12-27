import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import FLBox from '../../layouts/Box/FLBox';

type FLPageProps = {
    children: ReactNode;
    sx?: SxProps;
};

function FLPage({ children, sx }: FLPageProps): JSX.Element {
    const theme = useTheme();

    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                minHeight: '100dvh',
                // TODO: check if needed
                maxWidth: theme.breakpoints.values.tablet,
                width: '100dvw',
                ...sx,
            }}
        >
            {children}
        </FLBox>
    );
}

export default FLPage;
