import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <CssBaseline enableColorScheme />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
