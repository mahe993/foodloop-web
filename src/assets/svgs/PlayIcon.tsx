import { useTheme } from '@mui/material';
import { PlayState } from '../../common/hooks/stateHooks/types';

type PlayIconProps = {
    state: PlayState;
    onClick: VoidFunction;
};

export default function PlayIcon({ state, onClick }: PlayIconProps): JSX.Element {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" fill={theme.palette.foodloop.main} stroke={theme.palette.foodloop.main} />
            {state === PlayState.PAUSE && <polygon points="10 8 16 12 10 16 10 8" fill={theme.palette.foodlist.main} />}

            {state === PlayState.PLAY && (
                <>
                    <rect id="pause-icon" x="9" y="8" width="2" height="8" fill={theme.palette.foodlist.main} />
                    <rect id="pause-icon" x="13" y="8" width="2" height="8" fill={theme.palette.foodlist.main} />
                </>
            )}
        </svg>
    );
}
