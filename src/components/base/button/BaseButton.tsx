import Button, { ButtonOwnProps } from '@mui/material/Button';

type BaseButtonProps = ButtonOwnProps;

export default function BaseButton({ children }: BaseButtonProps): JSX.Element {
    return <Button variant="contained">{children}</Button>;
}
