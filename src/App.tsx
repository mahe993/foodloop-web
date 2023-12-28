import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import FLTheme from './themes/FLTheme';
import TestPage from './pages/test/TestPage';
import FLSearch from './layouts/Search/FLSearch';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <CssBaseline enableColorScheme />
            <TestPage>
                <FLSearch />
            </TestPage>
        </ThemeProvider>
    );
}
