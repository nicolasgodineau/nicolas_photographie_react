import React from "react";

// Multilingue
import { useTranslation } from "react-i18next";

// CSS & MUI
import { useTheme } from "@mui/material/styles";
import { Avatar, Container, Typography } from "@mui/material";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import ContactModal from "../components/ContactModal.jsx";
import Nicolas from "../img/Ressources/Profil.webp";

export default function Contact() {
    const { t } = useTranslation();
    const theme = useTheme();
    const aboutText = t("contactText.intro", { returnObjects: true }) || [];

    return (
        <MainContainer>
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
            <Container
                maxWidth={false}
                disableGutters={false}
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                    marginY: "1rem",
                }}
            >
                <Avatar
                    variant="square"
                    src={Nicolas}
                    alt="Nicolas"
                    sx={{
                        height: "380px",
                        width: "380px",
                        [theme.breakpoints.down("sm")]: {
                            maxWidth: "280px",
                            height: "fit-content",
                            width: "fit-content",
                        },
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
                            component="p"
                            variant={
                                index === aboutText.length - 1 ? "h4" : "h6"
                            }
                            key={index}
                            sx={{
                                fontFamily: "Poiret One",
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
            </Container>
            <ContactModal />
        </MainContainer>
    );
}
