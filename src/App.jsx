import React, { useState } from "react";
// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// CSS & MUI
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as CustomThemeProvider } from "./themeContext.js";
import { lightTheme, darkTheme } from "./theme.js";

// Componentes & Pages & Autre
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
    const [mode, setMode] = useState("light");
    const theme = mode === "light" ? lightTheme : darkTheme;

    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <CustomThemeProvider mode={mode} setMode={setMode}>
                {isHome ? null : <Nav />}
                {isHome ? null : <Footer />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </CustomThemeProvider>
        </MuiThemeProvider>
    );
}
