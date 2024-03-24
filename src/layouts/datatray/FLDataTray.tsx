import { SxProps } from '@mui/material';
import FLBox from '../../components/box/FLBox';
import { defaultBoldText } from '../../themes/typography';
import { ReactNode } from 'react';

type FLDataTrayProps = {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    sx?: SxProps;
};

export default function FLDataTray({ title, sx, icon, children }: FLDataTrayProps): JSX.Element {
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
            <FLBox
                sx={{
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <FLBox sx={{ ...defaultBoldText }}>{title}</FLBox>
                <FLBox>{icon}</FLBox>
            </FLBox>
            {children}
        </FLBox>
    );
}
