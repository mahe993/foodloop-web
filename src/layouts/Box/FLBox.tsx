import { ReactNode } from 'react';
import BaseBox from '../base/box/BaseBox';
import { BoxProps, SxProps } from '@mui/material';

type FLBoxProps = {
    children?: ReactNode;
    sx?: SxProps;
} & BoxProps;

export default function FLBox({ children, sx, ...boxProps }: FLBoxProps): JSX.Element {
    return (
        <BaseBox
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx,
            }}
            {...boxProps}
        >
            {children}
        </BaseBox>
    );
}
