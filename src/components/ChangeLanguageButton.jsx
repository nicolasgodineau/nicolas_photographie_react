import React, { useState } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import FrenchFlagIcon from "../img/Ressources/FR.webp";
import EnglishFlagIcon from "../img/Ressources/EN.webp";

export default function ChangeLanguageButton() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <>
            <Button onClick={toggleLanguage}>
                <Avatar
                    variant="square"
                    alt="Flag"
                    src={language === "en" ? EnglishFlagIcon : FrenchFlagIcon}
                />
            </Button>
        </>
    );
}
