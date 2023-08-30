import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import background from "../img/Ressources/index.webp";
import Nav from "../components/Nav.jsx";

export default function Home() {
    const { t } = useTranslation();
    return (
        <Container
            maxWidth="false"
            sx={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Nav />
        </Container>
    );
}
