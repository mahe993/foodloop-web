import { Box } from '@mui/material';
import { ReactNode } from 'react';

type FLPageProps = {
    children: ReactNode;
};

function FLPage({ children }: FLPageProps): JSX.Element {
    return <Box>{children}</Box>;
}

export default FLPage;
