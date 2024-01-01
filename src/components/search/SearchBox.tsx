import { useEffect, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

type SearchBoxProps = {
    open: boolean;
    children: ReactNode;
};

export default function SearchBox({ open, children }: SearchBoxProps): JSX.Element {
    const theme = useTheme();

    useEffect(() => {
        if (open) {
            // To prevent scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // To restore scrolling
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <Box
                sx={{
                    position: 'absolute',
                    bgcolor: 'white',
                    color: 'black',
                    top: 0,
                    left: 0,
                    width: '100%',
                    // remove maxWidth if using full desktop page
                    maxWidth: theme.breakpoints.values.tablet,
                    minHeight: '100svh',
                }}
            >
                {children}
            </Box>
        </Slide>
    );
}
