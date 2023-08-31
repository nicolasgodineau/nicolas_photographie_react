import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Avatar, Link } from "@mui/material";

import homelogo from "../img/Ressources/logo/logo_index_blanc.svg";
import logoLight from "../img/Ressources/logo/logoLight.svg";
import logoDark from "../img/Ressources/logo/logoDark.svg";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";

import { useTheme } from "@mui/material/styles";
import SettingsMenu from "./SettingsMenu.jsx";

export default function Nav() {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    const [isBlurred, setIsBlurred] = useState(false);

    // Permet d'activer le blur du menu au scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
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
    const PropsHeader = {
        width: "50vmax",
        height: "20vmax",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingY: "2rem",
        backdropFilter: "blur(20px)",
        backgroundColor: theme.palette.nav,
    };

    // Styles pour les autres pages
    const containerStyle = {
        position: "sticky",
        top: "0",
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: theme.palette.nav,
        ...(isBlurred && {
            backdropFilter: "blur(20px) saturate(0)",
        }),
    };

    return (
        <Container
            component="header"
            maxWidth={false}
            disableGutters={true}
            sx={isHome ? PropsHeader : containerStyle}
        >
            {/* <SettingsMenu /> */}
            <Container maxWidth="logo" disableGutters={true}>
                <Avatar
                    variant="square"
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
                    paddingY: "1rem",
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
                    }}
                >
                    {t("portfolio.title")}
                </Link>
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
                    }}
                >
                    {t("contact")}
                </Link>
                {/*                 {isHome ? null : <ChangeLanguageButton />}
                {isHome ? null : <ChangeThemeButton isHome={isHome} />} */}
            </Container>
        </Container>
    );
}
