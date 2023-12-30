import { ReactNode } from 'react';
import Box from '@mui/material/Box';

type FLSearchContentProps = {
    closeSearch: VoidFunction;
    children?: ReactNode;
};
export default function FLSearchContent({ closeSearch, children }: FLSearchContentProps): JSX.Element {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '2%',
                }}
            >
                <Box onClick={closeSearch}>icon for closing</Box>
                <Box>search bar</Box>
            </Box>
            {children}
        </Box>
    );
}
