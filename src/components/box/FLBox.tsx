import { ReactNode } from 'react';
import BaseBox from '../base/box/BaseBox';
import { SxProps } from '@mui/material';

type FLBoxProps = {
    children?: ReactNode;
    sx?: SxProps;
    onClick?: VoidFunction;
};

export default function FLBox({ children, sx, onClick }: FLBoxProps): JSX.Element {
    return (
        <BaseBox
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...sx,
            }}
            onClick={onClick}
        >
            {children}
        </BaseBox>
    );
}
