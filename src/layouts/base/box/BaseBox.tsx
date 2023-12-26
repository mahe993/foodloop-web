import { ReactNode } from 'react';
import { Box, BoxProps, SxProps } from '@mui/material';

export type BaseBoxProps = {
    sx?: SxProps;
    children: ReactNode;
} & BoxProps;

export default function BaseBox({ sx, children, ...boxProps }: BaseBoxProps): JSX.Element {
    return (
        <Box {...boxProps} sx={{ ...sx }}>
            {children}
        </Box>
    );
}
