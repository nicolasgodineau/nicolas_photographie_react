import React from "react";

// Multilingue
import { useTranslation } from "react-i18next";

// CSS & MUI
import { Container, Grid } from "@mui/material";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import CardPortfolio from "../components/CardPortfolio.jsx";

export default function Portfolio() {
    const { t } = useTranslation();

    const portfolioCards = t("portfolio.cards", { returnObjects: true }) || [];

    return (
        <MainContainer>
            <Container
                component="section"
                maxWidth={false}
                disableGutters={true}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0",
                }}
            >
                <Grid container spacing={2}>
                    {portfolioCards.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
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
