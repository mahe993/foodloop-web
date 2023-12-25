import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import FLPage from './pages/base/FLPage';
import FLTheme from './themes/FLTheme';

export default function App(): JSX.Element {
    return (
        <ThemeProvider theme={FLTheme}>
            <CssBaseline enableColorScheme />
            {/* TODO: DO NOT USE FLPAGE DIRECTLY AS IT IS A BASE PAGE */}
            <FLPage>
                <Box sx={{ backgroundColor: 'foodloop.main' }}>test</Box>
                <button type="button">hi</button>
            </FLPage>
        </ThemeProvider>
    );
}
