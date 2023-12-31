import { Button, ButtonOwnProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type FLButtonProps = {
    pressState?: boolean;
} & ButtonOwnProps;

export default function FLButton({ pressState = false, children, sx, ...buttonProps }: FLButtonProps): JSX.Element {
    return (
        <ButtonWithPressedState
            disableRipple
            sx={{
                ...(pressState && {
                    '&:active': {
                        backgroundColor: 'lightgrey',
                        transform: 'scale(0.98)',
                    },
                }),
                ...sx,
            }}
            {...buttonProps}
        >
            {children}
        </ButtonWithPressedState>
    );
}

const ButtonWithPressedState = styled(Button)({
    textTransform: 'none',
    backgroundColor: 'white',
    borderRadius: '50px',
    border: 0,
    '&:hover': {
        backgroundColor: 'white',
    },
});
