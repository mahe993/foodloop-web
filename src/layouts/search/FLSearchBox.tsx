import { useEffect, useRef, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

type FLSearchBoxProps = {
    open: boolean;

    children: ReactNode;
};

export default function FLSearchBox({ open, children }: FLSearchBoxProps): JSX.Element {
    const scrollPosition = useRef<number>(0);

    const theme = useTheme();

    useEffect(() => {
        const updateBoxTop = (): void => {
            const scrollY = window.scrollY;
            if (scrollY != scrollPosition.current) scrollPosition.current = scrollY;
        };

        window.addEventListener('scroll', updateBoxTop);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateBoxTop);
        };
    }, []);

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
                    top: scrollPosition.current,
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
