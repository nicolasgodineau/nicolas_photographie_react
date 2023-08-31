import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Container, ImageList, Typography } from "@mui/material";
import ImgCard from "../components/CardPortfolio.jsx";
import Nav from "../components/Nav.jsx";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer.jsx";

import Fancybox from "../components/Fancybox.jsx";
console.log("Fancybox:", Fancybox);

function Gallery() {
    const location = useLocation("/portfolio");
    const theme = useTheme();
    const { folder, num } = location.state;

    const imageNames = Array.from(
        { length: num },
        (_, index) => `img_${index + 1}.webp`
    );

    const images = imageNames.map((imageName) =>
        require(`../img/${folder}/${imageName}`)
    );

    return (
        <>
            <Nav />
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
                    {folder}
                </Typography>
                <ImageList
                    cols={4}
                    sx={{
                        gap: "2vmax !important",
                    }}
                >
                    {images.map((image, index) => (
                        <Fancybox
                            href={image}
                            src={image}
                            alt={`Collage ${index + 1}`}
                        />
                    ))}
                </ImageList>
            </Container>
            <Footer />
        </>
    );
}

export default Gallery;
