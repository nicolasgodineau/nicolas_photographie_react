import React from "react";
import { NavLink } from "react-router-dom";

// Multilingue
import { useTranslation } from "react-i18next";

// CSS & MUI
import { useTheme } from "@mui/material/styles";
import {
    Grid,
    Avatar,
    Link,
    Button,
    ImageList,
    useMediaQuery,
    Box,
    Typography,
} from "@mui/material";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";

export default function Portfolio() {
    const { t } = useTranslation();
    const theme = useTheme();

    const portfolioCards = t("portfolio.cards", { returnObjects: true }) || [];

    const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xxs"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const isXMediumScreen = useMediaQuery(theme.breakpoints.down("xsm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isXLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <MainContainer>
            <ImageList
                cols={
                    isXSmallScreen
                        ? 1
                        : isSmallScreen
                        ? 1
                        : isXMediumScreen
                        ? 1
                        : isMediumScreen
                        ? 2
                        : isLargeScreen
                        ? 2
                        : isXLargeScreen
                        ? 4
                        : 4
                }
                component="section"
                sx={{
                    width: "100%",
                    gap: "2vmin",
                    padding: "8vmin 0 0",
                    overflow: "hidden",
                }}
            >
                {portfolioCards.map((card, index) => {
                    const delay100 = index * 100;
                    const delay200 = index * 150;
                    const title = card.title;
                    const srcImg = card.imgSrc;
                    const folder = card.folder;
                    const numImg = card.num;
                    return (
                        <Box
                            component="article"
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2vmin",
                                [theme.breakpoints.down("sm")]: {
                                    padding: "1rem !important",
                                },
                            }}
                            data-aos="fade"
                            data-aos-delay={delay100}
                        >
                            <Button
                                variant="text"
                                rel="noopener noreferrer"
                                underline="none"
                                component={NavLink}
                                to="/gallery"
                                state={{ folder: folder, num: numImg }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2vmin",
                                    paddingY: ".7rem",
                                    [theme.breakpoints.down("sm")]: {
                                        gap: ".7rem",
                                        padding: "0 !important",
                                    },
                                }}
                                data-aos="fade"
                                data-aos-delay={delay100}
                            >
                                <Avatar
                                    variant="square"
                                    src={require(`../img/Ressources/portfolio/${srcImg}.webp`)}
                                    sx={{
                                        minHeight: "40svh",
                                        width: "100%",
                                        boxShadow: 4,
                                        transition: "box-shadow",
                                        transitionDuration: ".3s",
                                        "&.MuiAvatar-root:hover": {
                                            boxShadow: 8,
                                        },
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay={delay200}
                                />
                                <Typography
                                    sx={{
                                        width: "100%",
                                        paddingY: ".5rem",
                                        fontSize: "calc(10px + 1vmax)",
                                        lineHeight: "initial",
                                        fontFamily: "Poiret One",
                                        fontWeight: "700 !important",
                                        textAlign: "center",
                                        boxShadow: 4,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        color: theme.palette.secondary.main,
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "calc(14px + 1vmax)",
                                        },
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay={delay200}
                                >
                                    {title}
                                </Typography>
                            </Button>
                        </Box>
                    );
                })}
            </ImageList>
        </MainContainer>
    );
}
