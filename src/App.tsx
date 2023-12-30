import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import LandingPage from './pages/landingPage/LandingPage';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <CssBaseline enableColorScheme />
            <LandingPage />
        </ThemeProvider>
    );
}
