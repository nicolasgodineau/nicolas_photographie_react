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
