import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import FLBox from '../../layouts/box/FLBox';

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
                // extra 1 so that scroll bar is always present
                // prevents horizontal shake
                minHeight: '150dvh',
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
