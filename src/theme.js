import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

export const lightPalette = {
    primary: {
        main: grey[900],
    },
    secondary: {
        main: grey[50],
    },
    background: {
        default: grey[50],
        SpeeDial: grey[300],
        transparent: "#fafafa7a",
    },
    button: {
        main: "black",
        contrastText: grey[50],
    },
    accent: "black",
    nav: "#fafafa7a",
    linkActive: "#01579b",
};

export const darkPalette = {
    primary: {
        main: grey[50],
    },
    secondary: {
        main: grey[900],
    },
    background: {
        default: grey[900],
        SpeeDial: grey[400],
        transparent: "#0000007a",
    },
    button: {
        main: grey[50],
        contrastText: grey[900],
    },
    accent: grey[50],
    nav: "#0000007a",
};

export const createCustomTheme = (mode) => {
    const palette = mode === "light" ? lightPalette : darkPalette;

    let theme = createTheme({
        palette: {
            mode,
            ...palette,
        },
        breakpoints: {
            values: {
                xxs: 320,
                xs: 375,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    });
    theme = responsiveFontSizes(theme);

    return theme;
};
