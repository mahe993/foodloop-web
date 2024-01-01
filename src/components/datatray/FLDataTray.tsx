import { SxProps } from '@mui/material';
import FLBox from '../box/FLBox';
import { defaultBoldText } from '../../themes/typography';
import { ReactNode } from 'react';

type FLDataTrayProps = {
    title: string;
    children: ReactNode;
    sx?: SxProps;
};

export default function FLDataTray({ title, sx, children }: FLDataTrayProps): JSX.Element {
    return (
        <FLBox
            sx={{
                color: 'black',
                width: '100%',
                height: '100%',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingInline: '4%',
                gap: '2svh',
                ...sx,
            }}
        >
            <FLBox sx={{ ...defaultBoldText }}>{title}</FLBox>
            {children}
        </FLBox>
    );
}
