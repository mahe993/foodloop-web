import BaseSnackbar from '../base/snackbar/BaseSnackbar';
import { useSnackbar } from '../../contexts/SnackbarContext';

export default function FLErrorSnackBar(): JSX.Element {
    const snackbar = useSnackbar();

    return (
        <BaseSnackbar
            open={snackbar.open}
            setOpen={snackbar.setOpen!}
            message="This feature is not part of the demo"
            sx={{ backgroundColor: 'black' }}
        />
    );
}
