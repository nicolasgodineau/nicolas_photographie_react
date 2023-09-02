import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

export default function CustomArticleContainer({ children }) {
    const theme = useTheme();
    return (
        <Container
            component="main"
            maxWidth="lg"
            disableGutters={false}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                paddingY: "1rem",
                marginY: "2rem",
                [theme.breakpoints.down("sm")]: {
                    padding: "0.5rem 0 3rem 0",
                },
            }}
        >
            {children}
        </Container>
    );
}
