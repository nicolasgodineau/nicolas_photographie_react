import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Avatar, Link } from "@mui/material";

import homelogo from "../img/Ressources/logo/logo_index_blanc.svg";
import logoLight from "../img/Ressources/logo/logoLight.svg";
import logoDark from "../img/Ressources/logo/logoDark.svg";

import { useTheme } from "@mui/material/styles";
import SettingsMenu from "./SettingsMenu.jsx";

export default function Nav({ toggleTheme }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    const [isBlurred, setIsBlurred] = useState(false);

    // Permet d'activer le blur du menu au scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
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

    // Pour savoir si on est sur la page d'accueil, si oui alors on applique un certaint style
    const isHome = location.pathname === "/";
    // Styles pour la page d'accueil
    const PropsHome = {
        width: "50vmax",
        height: "20vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backdropFilter: "blur(20px)",
        backgroundColor: theme.palette.nav,
    };

    // Styles pour les autres pages
    const PropsPages = {
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: theme.palette.nav,
        ...(isBlurred && {
            backdropFilter: "blur(20px) saturate(0)",
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        }),
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "0rem",
        },
    };

    return (
        <Container
            component="header"
            maxWidth={false}
            disableGutters={true}
            sx={isHome ? PropsHome : PropsPages}
        >
            <Container
                maxWidth="logo"
                disableGutters={true}
                sx={{
                    paddingY: "1rem",
                    [theme.breakpoints.down("sm")]: {
                        width: "250px",
                    },
                }}
            >
                <Avatar
                    variant="square"
                    alt="Logo Nicolas Godineau Photographie"
                    src={
                        isHome
                            ? homelogo
                            : theme.palette.mode === "light"
                            ? logoLight
                            : logoDark
                    }
                    sx={{
                        height: "100%",
                        width: "100%",
                    }}
                />
            </Container>
            <Container
                component="nav"
                maxWidth="xs"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: isHome ? "space-evenly" : "space-between",
                    paddingY: ".3rem",
                    [theme.breakpoints.down("sm")]: {
                        paddingBottom: "0rem",
                        justifyContent: "space-evenly",
                    },
                }}
            >
                <Link
                    rel="noopener noreferrer"
                    underline="none"
                    component={NavLink}
                    to="/portfolio"
                    variant="h5"
                    sx={{
                        color: isHome
                            ? theme.palette.common.white
                            : theme.palette.primary,
                        fontWeight: "bold",
                        fontFamily: "Poiret One, cursive",
                        "&.active": {
                            color: theme.palette.linkActive,
                            textDecoration: "underline",
                        },
                    }}
                >
                    {t("portfolio.title")}
                </Link>
                {isHome ? null : <SettingsMenu toggleTheme={toggleTheme} />}

                <Link
                    rel="noopener noreferrer"
                    underline="none"
                    component={NavLink}
                    to="/contact"
                    variant="h5"
                    sx={{
                        color: isHome
                            ? theme.palette.common.white
                            : theme.palette.primary,

                        fontWeight: "bold",
                        fontFamily: "Poiret One, cursive",
                        "&.active": {
                            color: theme.palette.linkActive,
                            textDecoration: "underline",
                        },
                    }}
                >
                    {t("contact")}
                </Link>
            </Container>
        </Container>
    );
}
