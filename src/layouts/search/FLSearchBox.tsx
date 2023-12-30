import { useEffect, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

type FLSearchBoxProps = {
    open: boolean;
    offsetY: number;
    children: ReactNode;
};

export default function FLSearchBox({ open, offsetY, children }: FLSearchBoxProps): JSX.Element {
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
                    top: offsetY,
                    width: '100%',
                    // remove maxWidth if using full desktop page
                    maxWidth: theme.breakpoints.values.tablet,
                    minHeight: '100dvh',
                    paddingInline: '2%',
                    paddingBlockStart: '2%',
                }}
            >
                {children}
            </Box>
        </Slide>
    );
}
