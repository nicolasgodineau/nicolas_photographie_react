import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import CloseIcon from "@mui/icons-material/Close";

export default function SettingsMenu({ toggleTheme }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const buttons = [
        { icon: <ChangeLanguageButton />, name: t("changeLanguage") },
        {
            icon: <ChangeThemeButton toggleTheme={toggleTheme} />,
            name: t("changeMode"),
        },
    ];

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <SpeedDial
            ariaLabel="SpeedDial change language and mode"
            icon={
                open ? (
                    <CloseIcon /> // Icône de fermeture
                ) : (
                    <SettingsIcon /> // Icône d'ouverture
                )
            }
            open={open}
            onOpen={handleToggle}
            onClose={handleClose}
            direction="down"
            sx={{
                position: "relative",
                ".MuiSpeedDial-actions": {
                    position: "absolute",
                    paddingX: ".5rem",
                    marginTop: "60px",
                    paddingTop: "40px",
                    top: "-56px",
                    backgroundColor: open
                        ? theme.palette.background.transparent
                        : "unset",
                    backdropFilter: open ? "blur(20px) saturate(0)" : "unset",
                    zIndex: "1000",
                },
                ".MuiSpeedDial-root": {
                    backgroundColor: "green",
                },
                ".MuiSpeedDial-fab": {
                    minHeight: "30px",
                    minWidth: "30px",
                    height: "unset !important",
                    width: "unset !important",
                },
            }}
        >
            {buttons.map((button) => (
                <SpeedDialAction
                    key={button.name}
                    icon={button.icon}
                    tooltipTitle={button.name}
                    onClick={handleClose}
                />
            ))}
        </SpeedDial>
    );
}
