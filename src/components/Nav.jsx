import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Avatar, Link } from "@mui/material";

import homelogo from "../img/Ressources/logo/logo_index_blanc.svg";
import logo from "../img/Ressources/logo/Logo_menu.svg";
import ChangeLanguageButton from "./ChangeLanguageButton.jsx";
import ChangeThemeButton from "./ChangeThemeButton.jsx";

import { useTheme } from "@mui/material/styles";

export default function Nav() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();

    const location = useLocation();
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
        backgroundColor: "#ffffff0e",
    };

    return (
        <Container
            component="header"
            maxWidth={false}
            disableGutters={true}
            sx={
                isHome
                    ? PropsHeader
                    : {
                          position: "sticky",
                          top: "0",
                          zIndex: "9999",
                          backgroundColor:
                              theme.palette.mode === "light"
                                  ? "#fafafa"
                                  : "#212121",
                      }
            }
        >
            <Container maxWidth="logo" disableGutters={true}>
                <Avatar
                    variant="square"
                    src={isHome ? homelogo : logo}
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
                {isHome ? null : <ChangeLanguageButton />}
                {isHome ? null : <ChangeThemeButton isHome={isHome} />}
            </Container>
        </Container>
    );
}
