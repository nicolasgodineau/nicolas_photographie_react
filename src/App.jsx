import React, { useState, useEffect } from "react";
// Routage
import { Routes, Route, useLocation, withRouter } from "react-router-dom";

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
    // État pour stocker le mode de couleur actuel
    const [colorMode, setColorMode] = useState("light");

    // Fonction pour basculer manuellement entre les modes clair et sombre
    const toggleTheme = () => {
        setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    // Détecte automatiquement la préférence du navigateur
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Défini le mode de couleur en fonction des préférences du navigateur
        setColorMode(prefersDarkMode ? "dark" : "light");
    }, []);

    // Créer le thème en fonction du mode de couleur actuel
    const theme = createCustomTheme(colorMode);

    const location = useLocation();
    const isHome = location.pathname === "/";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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
