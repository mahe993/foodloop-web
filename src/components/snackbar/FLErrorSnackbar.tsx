import BaseSnackbar from '../base/snackbar/BaseSnackbar';
import { useErrorSnackbar } from '../../contexts/ErrorSnackbarContext';

export default function FLErrorSnackBar(): JSX.Element {
    const snackbar = useErrorSnackbar();

    return (
        <BaseSnackbar
            open={snackbar.open}
            setOpen={snackbar.setOpen!}
            message="This feature is not part of the demo"
            sx={{ backgroundColor: 'black' }}
        />
    );
}
