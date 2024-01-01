import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import FLBox from '../../components/box/FLBox';

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
                // >100 so that scroll bar is always present
                // prevents horizontal shake
                minHeight: '101svh',
                // TODO: check if needed
                maxWidth: theme.breakpoints.values.tablet,
                width: '100dvw',
                paddingBlockEnd: '4svh',
                ...sx,
            }}
        >
            {children}
        </FLBox>
    );
}

export default FLPage;
