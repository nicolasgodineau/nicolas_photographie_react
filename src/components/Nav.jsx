import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    Container,
    Avatar,
    AppBar,
    Toolbar,
    Box,
    Divider,
    Drawer,
    IconButton,
} from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import logoLight from "../img/Ressources/logo/logoLight.svg";
import logoDark from "../img/Ressources/logo/logoDark.svg";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";
import SettingsMenu from "./SettingsMenu.jsx";
import ButtonNavLink from "./ButtonNavLink.jsx";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";

export default function Nav({ toggleTheme }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    const [isBlurred, setIsBlurred] = useState(false);

    // Permet l'apparition de la bordure du menu quand on scrool
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    // Permet d'activer le blur du menu au scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Est le logo
    const avatar = (
        <Avatar
            variant="square"
            alt="Logo Nicolas Godineau Photographie"
            src={theme.palette.mode === "light" ? logoLight : logoDark}
            sx={{
                height: "100%",
                width: "100%",
            }}
        />
    );

    // Est le menu mobile
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", backdropFilter: "blur(20px)" }}
        >
            <Container
                maxWidth="xxs"
                sx={{
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                        padding: "1rem",
                    },
                }}
            >
                {avatar}
            </Container>
            <Divider />
            <Container
                maxWidth="xxs"
                sx={{
                    height: "100%",
                    minHeight: "35svh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }}
            >
                <ButtonNavLink to="portfolio" variantText="h4" />
                <ButtonNavLink to="contact" variantText="h4" />
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <ChangeLanguageButton />
                    <ChangeThemeButton toggleTheme={toggleTheme} />
                </Box>
            </Container>
        </Box>
    );

    return (
        <>
            <AppBar
                component="header"
                elevation={trigger ? 2 : 0}
                sx={{
                    position: "sticky",
                    top: "0",
                    zIndex: "10",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: theme.palette.background.default,
                    ...(isBlurred && {
                        backgroundColor: theme.palette.background.transparent,
                        backdropFilter: "blur(20px) saturate(0)",
                    }),
                }}
            >
                <Toolbar
                    component="nav"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5rem",
                    }}
                >
                    {/* Logo */}
                    <Container
                        maxWidth="xxs"
                        disableGutters
                        sx={{
                            paddingTop: "1rem",
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                                padding: "1rem",
                            },
                        }}
                    >
                        {avatar}
                    </Container>
                    {/* Menu */}
                    <Container
                        maxWidth="xs"
                        disableGutters
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            [theme.breakpoints.down("sm")]: {
                                display: "none",
                            },
                            [theme.breakpoints.down("xxs")]: {
                                display: "none",
                            },
                        }}
                    >
                        <ButtonNavLink to="portfolio" variantText="h5" />
                        <SettingsMenu toggleTheme={toggleTheme} />
                        <ButtonNavLink to="contact" variantText="h5" />
                    </Container>
                </Toolbar>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        display: "none",
                        width: "min-content",
                        alignSelf: "center",
                        margin: "0",
                        [theme.breakpoints.down("sm")]: {
                            display: "flex",
                        },
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: "none",
                    [theme.breakpoints.down("sm")]: {
                        display: "block",
                        backdropFilter: "blur(20px) saturate(0)",
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "100%",
                        minHeight: "40%",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
