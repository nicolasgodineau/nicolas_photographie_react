import React, { useState, useEffect } from "react";
// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// CSS & MUI
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createCustomTheme } from "./theme";

// Componentes & Pages & Autre
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

import AOS from "aos";

export default function App() {
    const location = useLocation();

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

    // configuration de AOS
    useEffect(() => {
        AOS.init({
            useClassNames: true, // Utilise des noms de classe pour les animations (optionnel)
            initClassName: true, // Désactive l'ajout de la classe d'initialisation automatique (optionnel)
            easing: "ease", // Type d'interpolation de l'animation
            duration: 1000, // Durée de l'animation en millisecondes
            delay: 0, // Délai avant que l'animation ne commence en millisecondes
            anchorPlacement: "top-bottom", // Placement de l'ancre pour déclencher les animations lors du défilement
            offset: 0, // Décalage personnalisé pour déclencher les animations avant ou après le point de déclenchement
            once: false, // Indique si l'animation ne se répète qu'une seule fois
            mirror: false, // Indique si les animations se répètent en sens inverse lorsqu'elles sont déclenchées dans l'autre sens
            zoom: 0, // Réduire le niveau de zoom pour les animations avec l'effet "zoom-in"
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, []);

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
