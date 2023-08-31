import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Container
            component="footer"
            maxWidth={false}
            disableGutters={true}
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                ...(!isBlurred && {
                    backgroundColor:
                        theme.palette.mode === "light" ? "#fafafa" : "#212121",
                }),
                ...(isBlurred && {
                    backgroundColor: theme.palette.nav,
                    backdropFilter: "blur(20px) saturate(0)",
                }),
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
