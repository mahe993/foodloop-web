import Snackbar from '@mui/material/Snackbar';
import { SxProps, useTheme } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';

type BaseSnackbarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message?: string;
    sx?: SxProps;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BaseSnackbar({ open, setOpen, sx, message }: BaseSnackbarProps): JSX.Element {
    const theme = useTheme();
    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            sx={{
                bottom: '50%',
                top: '50%',
            }}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100dvw', maxWidth: theme.breakpoints.values.tablet * 0.5, ...sx }}
                action={<IconButton />}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
