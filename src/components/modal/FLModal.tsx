import { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import { Box, useTheme } from '@mui/material';

type FLModalProps = {
    open: boolean;
    close: VoidFunction;
    children?: ReactNode;
};

export default function FLModal({ open, close, children }: FLModalProps): JSX.Element {
    const theme = useTheme();

    const handleClose = (): void => {
        close();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: theme.breakpoints.values.tablet,
                width: '100%',
                height: '100svh',
            }}
        >
            <Box sx={{ ...style, width: '90%', padding: '4%', position: 'relative' }}>{children}</Box>
        </Modal>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: '2svh',
};
