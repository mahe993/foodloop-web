import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';

type FLPageProps = {
    children: ReactNode;
    sx?: SxProps;
};

function FLPage({ children, sx }: FLPageProps): JSX.Element {
    return (
        <Box
            sx={{
                paddingInline: '2%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100dvh',
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}

export default FLPage;
