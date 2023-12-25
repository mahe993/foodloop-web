import { alpha, createTheme, getContrastRatio } from '@mui/material';

const FLTheme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        },
    },
    palette: {
        mode: 'dark', // Set the theme mode to dark
        foodloop: {
            main: alpha('#D70F64', 1),
            light: alpha('#D70F64', 0.5),
            dark: alpha('#D70F64', 0.9),
            contrastText: getContrastRatio('#D70F64', '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});

export default FLTheme;

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true; // adds the `tablet` breakpoint
        laptop: true;
        desktop: true;
    }

    interface Palette {
        foodloop: Palette['primary'];
    }

    interface PaletteOptions {
        foodloop?: PaletteOptions['primary'];
    }
}
