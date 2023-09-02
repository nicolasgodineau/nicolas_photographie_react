import React, { useState } from "react";
// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// CSS & MUI
import { CssBaseline } from "@mui/material";

// Componentes & Pages & Autre
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

import { createCustomTheme } from "./theme";

import { ThemeProvider } from "@mui/material/styles";

export default function App() {
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const theme = createCustomTheme(themeMode);

    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {isHome ? null : <Nav toggleTheme={toggleTheme} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {isHome ? null : <Footer />}
        </ThemeProvider>
    );
}
