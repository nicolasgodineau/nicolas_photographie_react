import React from "react";
// CSS & MUI
import { useTheme } from "@mui/material/styles";
import { Container, Avatar, Box } from "@mui/material";

// Componentes & Pages & Autre
import background from "../img/Ressources/index.webp";
import Nav from "../components/Nav.jsx";

import logoLight from "../img/Ressources/logo/logoLight.svg";
import logoDark from "../img/Ressources/logo/logoDark.svg";
import ButtonNavLink from "../components/ButtonNavLink.jsx";

export default function Home() {
    const theme = useTheme();
    return (
        <Container
            component="main"
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
                [theme.breakpoints.down("sm")]: {
                    backgroundPosition: "right 20% bottom 45%",
                },
            }}
        >
            <Container
                component="nav"
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5vmax",
                    padding: "10vmin",
                    backgroundColor: theme.palette.background.transparent,
                    backdropFilter: "blur(20px)",
                }}
            >
                <Container maxWidth="xs" disableGutters>
                    <Avatar
                        variant="square"
                        alt="Logo Nicolas Godineau Photographie"
                        src={
                            theme.palette.mode === "light"
                                ? logoLight
                                : logoDark
                        }
                        sx={{
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </Container>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        [theme.breakpoints.down("sm")]: {
                            flexDirection: "column",
                            gap: "5vmax",
                        },
                    }}
                >
                    <ButtonNavLink
                        to="portfolio"
                        target="_self"
                        text="portfolio"
                        variantText="h5"
                        disableRipple="false"
                        icon={null}
                    />
                    <ButtonNavLink
                        to="contact"
                        target="_self"
                        text="contact"
                        variantText="h5"
                        disableRipple="false"
                        icon={null}
                    />
                </Box>
            </Container>
        </Container>
    );
}
