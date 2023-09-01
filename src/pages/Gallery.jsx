import React from "react";
// Routage
import { useLocation } from "react-router-dom";

// CSS & MUI
import { Container, ImageList, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Componentes & Pages & Autre
import Fancybox from "../components/Fancybox.jsx";

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
    );
}

export default Gallery;
