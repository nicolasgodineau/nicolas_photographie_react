import React from "react";
// CSS & MUI
import { Container } from "@mui/material";

// Componentes & Pages & Autre
import background from "../img/Ressources/index.webp";
import Nav from "../components/Nav.jsx";

export default function Home() {
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
