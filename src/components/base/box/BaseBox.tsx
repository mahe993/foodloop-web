import { ReactNode } from 'react';
import { Box, SxProps } from '@mui/material';

export type BaseBoxProps = {
    sx?: SxProps;
    children: ReactNode;
    onClick?: VoidFunction;
};

export default function BaseBox({ sx, children, onClick }: BaseBoxProps): JSX.Element {
    return (
        <Box sx={{ ...sx }} onClick={onClick}>
            {children}
        </Box>
    );
}
