import React, { useContext } from "react";

import { Container } from "@mui/material";

export default function CustomArticleContainer({ children }) {
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
            }}
        >
            {children}
        </Container>
    );
}
