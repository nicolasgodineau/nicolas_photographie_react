import React from "react";
// Routage
import { useLocation } from "react-router-dom";

// CSS & MUI
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import Fancybox from "../components/Fancybox.jsx";

export default function Gallery() {
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
                {folder}
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "3svw",
                    padding: "0",
                }}
            >
                {images.map((image, index) => (
                    <Fancybox
                        href={image}
                        src={image}
                        alt={`Collage ${index + 1}`}
                    />
                ))}
            </Box>
        </MainContainer>
    );
}
