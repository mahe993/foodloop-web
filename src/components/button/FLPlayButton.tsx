import PlayIcon from '../../assets/svgs/PlayIcon';
import { PlayState } from '../../common/hooks/stateHooks/types';
import FLBox from '../box/FLBox';

type FLPlayButtonProps = {
    state: PlayState;
    handleClick: VoidFunction;
};

export default function FLPlayButton({ state, handleClick }: FLPlayButtonProps): JSX.Element {
    return (
        <FLBox>
            <PlayIcon state={state} onClick={handleClick} />
        </FLBox>
    );
}
