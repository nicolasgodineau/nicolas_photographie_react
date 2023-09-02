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
        transparent: "#fafafa7a",
    },
    accent: grey[900],
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
        transparent: "#2121217a",
    },
    accent: grey[50],
    nav: "#2121217a",
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
                logo: 320,
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
