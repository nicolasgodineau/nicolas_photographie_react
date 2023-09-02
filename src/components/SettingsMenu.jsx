import React, { useState, useEffect } from "react";
import { ButtonGroup } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SettingsMenu({ toggleTheme }) {
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };

    useEffect(() => {
        if (showSettings) {
            const timer = setTimeout(() => {
                setShowSettings(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showSettings]);

    const buttons = [
        <ChangeLanguageButton />,
        <CancelIcon onClick={toggleSettings} />,
        <ChangeThemeButton toggleTheme={toggleTheme} />,
    ];

    return (
        <ButtonGroup
            sx={{
                height: "35px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                gap: "1rem",
                borderRadius: "0px",
                cursor: "pointer",
            }}
        >
            {showSettings ? buttons : <SettingsIcon onClick={toggleSettings} />}
        </ButtonGroup>
    );
}
