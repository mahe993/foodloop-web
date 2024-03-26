import { alpha, createTheme, getContrastRatio } from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

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
        mode: 'dark',
        foodloop: {
            main: alpha('#D70F64', 1),
            light: alpha('#D70F64', 0.5),
            dark: alpha('#D70F64', 0.9),
            contrastText: getContrastRatio('#D70F64', '#fff') > 4.5 ? '#fff' : '#111',
        },
        foodlist: {
            main: alpha('#191414', 1),
            light: alpha('#212121', 1),
            dark: alpha('#121212', 1),
            contrastText: alpha('#757575', 1),
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#D70F64',
                    '--TextField-brandBorderHoverColor': '#D70F64',
                    '--TextField-brandBorderFocusedColor': '#D70F64',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'var(--TextField-brandBorderColor)',
                },
                root: {
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: 'var(--TextField-brandBorderHoverColor)',
                    },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    '&::before, &::after': {
                        borderBottom: '2px solid var(--TextField-brandBorderColor)',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&::before': {
                        borderBottom: '2px solid var(--TextField-brandBorderColor)',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
    },
});

export default FLTheme;

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }

    interface Palette {
        foodloop: Palette['primary'];
        foodlist: Palette['primary'];
    }

    interface PaletteOptions {
        foodloop?: PaletteOptions['primary'];
        foodlist?: PaletteOptions['primary'];
    }
}
