import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Link } from "@mui/material";

import Nav from "../components/Nav.jsx";

import CardPortfolio from "../components/CardPortfolio.jsx";

export default function Portfolio() {
    const { t } = useTranslation();

    const portfolioCards = t("portfolio.cards", { returnObjects: true }) || [];

    return (
        <>
            <Nav />
            <Container
                component="main"
                maxWidth="lg"
                sx={{
                    height: "calc(100vh - 40vh)",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "primary",
                }}
            >
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
                    {portfolioCards.map((card, index) => (
                        <CardPortfolio
                            key={index}
                            title={card.title}
                            srcImg={card.imgSrc}
                            folder={card.folder}
                            numImg={card.num}
                        />
                    ))}
                </Container>
            </Container>
        </>
    );
}
