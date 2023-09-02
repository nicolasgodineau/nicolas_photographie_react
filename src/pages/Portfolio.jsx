import React from "react";

// Multilingue
import { useTranslation } from "react-i18next";

// CSS & MUI
import { useTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import CardPortfolio from "../components/CardPortfolio.jsx";

export default function Portfolio() {
    const { t } = useTranslation();
    const theme = useTheme();

    const portfolioCards = t("portfolio.cards", { returnObjects: true }) || [];

    return (
        <MainContainer>
            <Container
                component="section"
                maxWidth="lg"
                disableGutters={false}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "8vmin 0 0",
                    [theme.breakpoints.down("sm")]: {
                        padding: "0",
                        gap: "2rem",
                    },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        [theme.breakpoints.down("sm")]: {
                            gap: "2rem",
                        },
                    }}
                >
                    {portfolioCards.map((card, index) => (
                        <Grid item key={index} xs={10} sm={6} md={3}>
                            <CardPortfolio
                                title={card.title}
                                srcImg={card.imgSrc}
                                folder={card.folder}
                                numImg={card.num}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MainContainer>
    );
}
