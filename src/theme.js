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
    link: grey[900],
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
        transparent: "#0000007a",
    },
    link: grey[50],
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
                xs: 376,
                xsm: 500,
                sm: 600,
                md: 960,
                lg: 1280,
            },
        },
    });
    theme = responsiveFontSizes(theme);

    return theme;
};
