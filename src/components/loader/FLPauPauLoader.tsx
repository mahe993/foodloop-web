import PandaIcon from '../../assets/svgs/PandaIcon';
import { keyframes } from '@emotion/react';
import FLBox from '../box/FLBox';
import { SxProps } from '@mui/material';

type FLPauPauLoaderProps = {
    sx?: SxProps;
};

export default function FLPauPauLoader({ sx }: FLPauPauLoaderProps): JSX.Element {
    return (
        <FLBox
            sx={{
                animation: `${spin} 1s infinite ease-out`,
                margin: 'auto',
                ...sx,
            }}
        >
            <PandaIcon circular />
        </FLBox>
    );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(720deg);
  }
`;
