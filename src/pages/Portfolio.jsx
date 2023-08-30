import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container, Link } from "@mui/material";

import Nav from "../components/Nav.jsx";

import ImgCard from "../components/ImgCard.jsx";

export default function Portfolio() {
    const { t } = useTranslation();

    // Sélectionne le tableau de traductions en fonction de la langue et l'utilise pour l'affichage
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
                        <ImgCard
                            key={index}
                            data={{
                                title: card.title,
                                srcImg: card.imgSrc,
                                folder: card.folder,
                                numImg: card.num,
                                withText: true,
                                withFolder: true,
                                withNum: true,
                            }}
                        />
                    ))}
                </Container>
            </Container>
        </>
    );
}
