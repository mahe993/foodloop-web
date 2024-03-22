import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import FLErrorSnackBar from './components/snackbar/FLErrorSnackbar';
import ErrorSnackbarProvider from './contexts/ErrorSnackbarContext';
import UserContextProvider from './contexts/UserContext';
import SessionContextProvider from './contexts/SessionContext';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <ErrorSnackbarProvider>
                <UserContextProvider>
                    <SessionContextProvider>
                        <CssBaseline enableColorScheme />
                        <RouterProvider router={router} />
                        <FLErrorSnackBar />
                    </SessionContextProvider>
                </UserContextProvider>
            </ErrorSnackbarProvider>
        </ThemeProvider>
    );
}
