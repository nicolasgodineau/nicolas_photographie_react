import React from "react";

// Routage
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Multilingue
import i18n from "./translations.js";
import { I18nextProvider } from "react-i18next";

// CSS & MUI
import "./index.css";

// Componentes & Pages
import App from "./App";

const language = i18n.language;

const descriptions = {
    en: "Discover exceptional photographic works on our website. Explore our gallery of captivating photos and immerse yourself in the world of photography.",
    fr: "Découvrez des œuvres photographiques exceptionnelles sur notre site. Explorez notre galerie de photos captivantes et plongez dans l'univers de la photographie.",
};

const metaDescription = document.querySelector('meta[name="description"]');
console.log("metaDescription:", metaDescription);
metaDescription.setAttribute("content", descriptions[language]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
