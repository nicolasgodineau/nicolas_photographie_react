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
                alignItems: "center",
                gap: "1rem",
                paddingY: "2rem",
                marginBottom: "2rem",
                [theme.breakpoints.down("sm")]: {
                    paddingY: "0rem",
                    marginBottom: "3rem",
                },
            }}
        >
            {children}
        </Container>
    );
}
