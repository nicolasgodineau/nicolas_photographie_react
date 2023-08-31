import React, { useState } from "react";
import { Avatar, Button, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "../themeContext.js";
import { useTranslation } from "react-i18next";
import FrenchFlagIcon from "../img/Ressources/FR.webp";
import EnglishFlagIcon from "../img/Ressources/EN.webp";
import FR from "../img/Ressources/FR.svg";

export default function ChangeLanguageButton() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        "& .MuiSwitch-switchBase": {
            margin: 1,
            padding: 0,
            transform: "translateX(6px)",
            "&.Mui-checked": {
                color: "#fff",
                transform: "translateX(22px)",
                "& .MuiSwitch-thumb:before": {
                    backgroundImage: FR,
                },
                "& + .MuiSwitch-track": {
                    opacity: 1,
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
                        "red"
                    )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
                },
            },
        },
        "& .MuiSwitch-thumb": {
            backgroundColor:
                theme.palette.mode === "dark" ? "#212121" : "#fafafa",
            width: 32,
            height: 32,
            "&:before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            },
        },
        "& .MuiSwitch-track": {
            opacity: 1,
            backgroundColor:
                theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            borderRadius: 20 / 2,
        },
    }));

    return (
        <>
            {/*             <Button onClick={toggleLanguage}>
                <Avatar
                    variant="square"
                    alt="Flag"
                    src={language === "en" ? EnglishFlagIcon : FrenchFlagIcon}
                />
            </Button> */}
            <MaterialUISwitch
                checked={language === "fr"}
                onChange={toggleLanguage}
            />
        </>
    );
}
