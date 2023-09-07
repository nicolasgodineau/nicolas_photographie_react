import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { ButtonGroup, Button, Tooltip, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

export default function SettingsMenu({ toggleTheme }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const buttons = [
        <ChangeLanguageButton key="1" />,
        <Divider key="2" />,
        <ChangeThemeButton key="3" toggleTheme={toggleTheme} />,
    ];

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select language or mode"
                aria-haspopup="menu"
                title="some more information"
                onClick={handleToggle}
            >
                <SettingsIcon />
            </Button>
            <Popper
                sx={{
                    zIndex: 100,
                }}
                open={open}
                anchorEl={anchorRef.current}
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
                                borderRadius: "0",
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
