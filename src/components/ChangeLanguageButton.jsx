import React, { useState } from "react";
import { Avatar, Button, Switch, IconButton, Box } from "@mui/material";
import { shadows } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FrenchFlagIcon from "../img/Ressources/FR.webp";
import EnglishFlagIcon from "../img/Ressources/EN.webp";

export default function ChangeLanguageButton() {
    const { i18n } = useTranslation();
    const theme = useTheme();
    console.log("theme:", theme);
    const isEnglish = i18n.language === "en";
    const [isToggled, setIsToggled] = useState(!isEnglish);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        toggleLanguage();
    };

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "fr" : "en";
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Box
            sx={{
                padding: "7px",
            }}
        >
            <Box
                sx={{
                    height: "20px",
                    width: "48px",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "start",
                    justifyContent: "center",
                    borderRadius: 20 / 2,
                    backgroundColor: "#bdbdbd",
                }}
            >
                <IconButton
                    sx={{
                        cursor: "pointer",
                        padding: "0",
                        transform: isToggled
                            ? "translateX(50%)"
                            : "translateX(0)",
                        transition: "transform 0.1s ease-in-out",
                        boxShadow: 2,
                    }}
                    onClick={handleToggle}
                >
                    {isToggled ? (
                        <img
                            src={EnglishFlagIcon}
                            alt="Language english"
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                boxShadow: 3,
                                backgroundColor:
                                    theme.palette.mode === "light"
                                        ? "#fafafa"
                                        : "#212121",
                                padding: "5px",
                            }}
                        />
                    ) : (
                        <img
                            src={FrenchFlagIcon}
                            alt="Language francais"
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                boxShadow: 3,
                                backgroundColor:
                                    theme.palette.mode === "light"
                                        ? "#fafafa"
                                        : "#212121",
                                padding: "5px",
                            }}
                        />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
}
