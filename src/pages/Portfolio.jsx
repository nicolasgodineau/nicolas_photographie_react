import React from "react";
import { NavLink } from "react-router-dom";

// Multilingue
import { useTranslation } from "react-i18next";

// CSS & MUI
import { useTheme } from "@mui/material/styles";
import { Grid, Avatar, Link, Button } from "@mui/material";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";

export default function Portfolio() {
    const { t } = useTranslation();
    const theme = useTheme();

    const portfolioCards = t("portfolio.cards", { returnObjects: true }) || [];

    return (
        <MainContainer>
            <Grid
                component="section"
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "8vmin 0 0",
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                        gap: "2rem",
                    },
                }}
            >
                {portfolioCards.map((card, index) => {
                    const title = card.title;
                    const srcImg = card.imgSrc;
                    const folder = card.folder;
                    const numImg = card.num;
                    return (
                        <Grid
                            component="article"
                            item
                            key={index}
                            xs={10}
                            sm={5}
                            md={3}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                [theme.breakpoints.down("sm")]: {
                                    padding: "1rem !important",
                                },
                            }}
                        >
                            <Link
                                rel="noopener noreferrer"
                                underline="none"
                                component={NavLink}
                                to="/gallery"
                                state={{ folder: folder, num: numImg }}
                                variant="h6"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "calc(5px + 1vmax)",
                                    [theme.breakpoints.down("sm")]: {
                                        gap: ".7rem",
                                        padding: "0 !important",
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        padding: "0",
                                    }}
                                >
                                    <Avatar
                                        variant="square"
                                        src={require(`../img/Ressources/portfolio/${srcImg}.webp`)}
                                        sx={{
                                            height: "100%",
                                            width: "100%",
                                            boxShadow: 4,
                                            transition: "box-shadow",
                                            transitionDuration: ".3s",
                                            "&.MuiAvatar-root:hover": {
                                                boxShadow: 6,
                                            },
                                        }}
                                    />
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        width: "100%",
                                        paddingY: ".5rem",
                                        fontSize: "calc(10px + 1vmax)",
                                        lineHeight: "initial",
                                        fontFamily: "Poiret One",
                                        fontWeight: "700 !important",
                                        borderRadius: "0",
                                        boxShadow: 4,
                                    }}
                                >
                                    {title}
                                </Button>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </MainContainer>
    );
}
