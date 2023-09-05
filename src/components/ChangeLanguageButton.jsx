import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

import FrenchFlagIcon from "../img/Ressources/FR.webp";
import EnglishFlagIcon from "../img/Ressources/EN.webp";

export default function ChangeLanguageButton() {
    const theme = useTheme();
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <IconButton onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            {i18n.language === "en" ? (
                <Avatar
                    src={EnglishFlagIcon}
                    alt="Language english"
                    style={{
                        padding: ".2rem",
                        boxShadow: theme.shadows[3],
                    }}
                />
            ) : (
                <Avatar
                    src={FrenchFlagIcon}
                    alt="langue francaise"
                    style={{
                        padding: ".2rem",
                        boxShadow: theme.shadows[3],
                    }}
                />
            )}
        </IconButton>
    );
}
