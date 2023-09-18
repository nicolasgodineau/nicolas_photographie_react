import React from "react";
import { useTheme } from "@mui/material/styles";
import { ButtonGroup, Button } from "@mui/material";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import SettingsIcon from "@mui/icons-material/Settings";

export default function BasicMenu({ toggleTheme }) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <SettingsIcon />
            </Button>
            <Popper
                sx={{
                    zIndex: 100,
                }}
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom"
                                    ? "center top"
                                    : "center bottom",
                        }}
                    >
                        <Paper
                            sx={{
                                backgroundColor:
                                    theme.palette.background.transparent,
                                backdropFilter: "blur(20px) saturate(0)",
                                boxShadow: theme.shadows[5],
                                "& > *": {
                                    m: 1,
                                },
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="text"
                                    sx={{
                                        gap: ".5rem",
                                    }}
                                >
                                    <ChangeLanguageButton key="1" />
                                    <ChangeThemeButton
                                        key="2"
                                        toggleTheme={toggleTheme}
                                    />
                                </ButtonGroup>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}
