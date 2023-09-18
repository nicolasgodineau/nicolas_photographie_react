import React from "react";
import { Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ChangeLanguageButton() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "fr" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Button
            onClick={toggleLanguage}
            color="primary"
            sx={{
                ":hover": {
                    bgcolor: "unset",
                    borderRadius: "0px",
                },
            }}
        >
            {i18n.language === "en" ? (
                <Typography variant="subtitle1">EN</Typography>
            ) : (
                <Typography variant="subtitle1">FR</Typography>
            )}
        </Button>
    );
}
