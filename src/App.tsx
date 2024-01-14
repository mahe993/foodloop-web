import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import FLErrorSnackBar from './components/snackbar/FLErrorSnackbar';
import SnackbarProvider from './contexts/SnackbarContext';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <SnackbarProvider>
                <CssBaseline enableColorScheme />
                <RouterProvider router={router} />
                <FLErrorSnackBar />
            </SnackbarProvider>
        </ThemeProvider>
    );
}
