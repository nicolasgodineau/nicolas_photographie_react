import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkMode from "../img/Ressources/DarkMode.webp";
import LightkMode from "../img/Ressources/LightMode.webp";

export default function ChangeThemeButton({ toggleTheme }) {
    const theme = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme.palette.mode === "dark");

    const handleToggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        // Appelez la fonction toggleTheme fournie en tant que prop pour gérer le changement de thème global
        toggleTheme();
    };

    return (
        <IconButton onClick={handleToggleTheme} style={{ cursor: "pointer" }}>
            {isDarkMode ? (
                <Avatar
                    src={LightkMode}
                    alt="Language english"
                    style={{
                        padding: ".2rem",
                        boxShadow: theme.shadows[3],
                    }}
                />
            ) : (
                <Avatar
                    src={DarkMode}
                    alt="Language english"
                    style={{
                        padding: ".2rem",
                        boxShadow: theme.shadows[3],
                    }}
                />
            )}
        </IconButton>
    );
}
