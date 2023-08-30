import React from "react";
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as CustomThemeProvider } from "./themeContext.js";
// Routage
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";

import { lightTheme, darkTheme } from "./theme.js";
import Gallery from "./pages/Gallery.jsx";

export default function App() {
    const [mode, setMode] = useState("light");

    const theme = mode === "light" ? lightTheme : darkTheme;
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <CustomThemeProvider mode={mode} setMode={setMode}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </CustomThemeProvider>
        </MuiThemeProvider>
    );
}
