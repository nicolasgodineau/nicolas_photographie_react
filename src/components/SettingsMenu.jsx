import React, { useState } from "react";
import { IconButton, Menu, Box } from "@mui/material";
import { shadows } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";

export default function SettingsMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleOpenMenu}>
                <SettingsIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                sx={{
                    ".css-6hp17o-MuiList-root-MuiMenu-list": {
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                        gap: "1rem",
                    },
                    ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                        {
                            borderRadius: "0px",
                        },
                }}
            >
                <ChangeLanguageButton />
                <ChangeThemeButton />
            </Menu>
        </>
    );
}
