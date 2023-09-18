import React, { useState } from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ChangeThemeButton({ toggleTheme }) {
    const theme = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme.palette.mode === "dark");

    const handleToggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        toggleTheme();
    };

    return (
        <Button onClick={handleToggleTheme} color="primary">
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
    );
}
