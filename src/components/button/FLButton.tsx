import { Button, ButtonOwnProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type FLButtonProps = {
    pressState?: boolean;
    hoverColor?: string;
    onClick?: () => void;
} & ButtonOwnProps;

export default function FLButton({
    pressState = false,
    hoverColor = 'white',
    onClick = (): void => {},
    children,
    sx,
    ...buttonProps
}: FLButtonProps): JSX.Element {
    return (
        <ButtonWithPressedState
            disableRipple
            sx={{
                ...(pressState && {
                    '&:active': {
                        backgroundColor: 'lightgrey',
                        transform: 'scale(0.98)',
                    },
                    gap: '2%',
                    paddingInline: '6%',
                }),
                '&:hover': {
                    backgroundColor: hoverColor,
                },
                ...sx,
            }}
            onClick={onClick}
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
});
