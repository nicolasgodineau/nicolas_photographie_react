// theme.js
import { createTheme } from "@mui/material";
import { grey, green } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: grey[900],
        },
        secondary: {
            main: grey[50],
        },
        background: {
            default: grey[50],
        },
        accent: grey[900],
        nav: "#fafafa7a",
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

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: grey[50],
        },
        secondary: {
            main: green[900],
        },
        background: {
            /*  */ default: grey[900],
        },
        accent: grey[50],
        nav: "#2121217a",
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
