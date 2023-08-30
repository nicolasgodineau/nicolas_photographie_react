// ChangeThemeButton.js
import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "../themeContext.js"; // Importez le hook useTheme
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ChangeThemeButton() {
    const { mode, setMode } = useTheme(); // Utilisez le hook useTheme pour accéder au mode et à setMode

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <Button onClick={toggleTheme}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
    );
}
