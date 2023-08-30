import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
    return (
        <Container
            component="footer"
            maxWidth={false}
            disableGutters={true}
            sx={{
                position: "fixe",
                bottom: "0",
                zIndex: "9999",
                backgroundColor:
                    theme.palette.mode === "light" ? "#fafafa" : "#212121",
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    color:
                        theme.palette.mode === "light"
                            ? theme.palette.primary
                            : theme.palette.secondary,
                }}
            >
                Copyright Nicolas Godineau - {currentYear}
            </Typography>
        </Container>
    );
}
