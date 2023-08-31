import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import Nav from "../components/Nav.jsx";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Nicolas from "../img/Ressources/Profil.webp";
import Footer from "../components/Footer.jsx";
import ContactModal from "./ContactModal.jsx";

export default function Contact() {
    const { t } = useTranslation();
    const theme = useTheme();
    const aboutText = t("contactText.intro", { returnObjects: true }) || [];
    console.log("aboutText:", aboutText);

    return (
        <>
            <Nav />
            <Container
                component="main"
                maxWidth="lg"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "2rem 0 3rem 0",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        color:
                            theme.palette.mode === "light"
                                ? theme.palette.primary
                                : theme.palette.secondary,
                    }}
                >
                    {t("contact")}
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        gap: "1rem",
                        padding: "0",
                        marginY: "1rem",
                    }}
                >
                    <Avatar
                        variant="square"
                        src={Nicolas}
                        sx={{
                            height: "380px",
                            width: "380px",
                        }}
                    />
                    <Container
                        component="section"
                        maxWidth={false}
                        disableGutters={true}
                        sx={{
                            maxWidth: "70ch",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "1rem",
                            padding: "0",
                            margin: "0 !important",
                        }}
                    >
                        {aboutText.map((text, index) => (
                            <Typography
                                variant={
                                    index === aboutText.length - 1
                                        ? "h5"
                                        : "body1"
                                }
                                key={index}
                                sx={{
                                    paddingX:
                                        index === aboutText.length - 1
                                            ? "1rem"
                                            : "0",
                                    textAlign:
                                        index === aboutText.length - 1
                                            ? "right"
                                            : "left",
                                    fontStyle:
                                        index === aboutText.length - 1
                                            ? "italic"
                                            : "normal",
                                }}
                            >
                                {text.element}
                            </Typography>
                        ))}
                    </Container>
                </Box>
                <ContactModal />
            </Container>
            <Footer />
        </>
    );
}
