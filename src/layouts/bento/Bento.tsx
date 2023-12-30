import { SxProps } from '@mui/material';
import FLBox from '../box/FLBox';

type BentoProps = {
    sx?: SxProps;
};

export default function Bento({ sx }: BentoProps): JSX.Element {
    return (
        <FLBox
            sx={{
                backgroundColor: 'red',
                width: '100%',
                minHeight: '50svh',
                height: '50svh',
                paddingInline: '4%',
                color: 'black',
                ...sx,
            }}
        >
            <FLBox
                sx={{
                    flex: 1,
                    flexDirection: 'column',
                    gap: '4%',
                    border: 1,
                    height: '100%',
                }}
            ></FLBox>
            <FLBox
                sx={{
                    flex: 1,
                    flexDirection: 'column',
                    gap: '4%',
                    border: 1,
                    height: '100%',
                }}
            ></FLBox>
        </FLBox>
    );
}
