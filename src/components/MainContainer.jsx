import React from "react";
import { useTheme } from "@mui/material/styles";
// Componentes & Pages & Autre
import { Container } from "@mui/material";

export default function CustomArticleContainer({ children }) {
    const theme = useTheme();
    return (
        <Container
            component="main"
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                paddingY: "2rem",
                marginBottom: "2rem",
            }}
        >
            {children}
        </Container>
    );
}
