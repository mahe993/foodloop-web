import { CssBaseline, ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import TestPage from './pages/test/TestPage';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <CssBaseline enableColorScheme />
            <TestPage>test</TestPage>
        </ThemeProvider>
    );
}
