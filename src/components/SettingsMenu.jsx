import React, { useState, useEffect } from "react";
import { IconButton, Menu, Box, Button } from "@mui/material";
import { shadows } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SettingsMenu() {
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

    return (
        <IconButton
            sx={{
                height: "35px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                gap: "1rem",
                borderRadius: "0px",
            }}
        >
            {showSettings ? (
                <>
                    <ChangeLanguageButton />
                    <CancelIcon onClick={toggleSettings} />
                    <ChangeThemeButton />
                </>
            ) : (
                <>
                    <SettingsIcon onClick={toggleSettings} />
                </>
            )}
        </IconButton>
    );
}
