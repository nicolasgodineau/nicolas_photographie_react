import React, { useState } from "react";
// Routage
import { useLocation } from "react-router-dom";

// CSS & MUI
import {
    Typography,
    Button,
    Avatar,
    Grid,
    Dialog,
    DialogActions,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import ImageModal from "../components/ImageModal.jsx";
import BackToTopButton from "../components/BackToTopButton.jsx";

export default function Gallery() {
    const location = useLocation("/portfolio");
    const theme = useTheme();
    const { folder, num } = location.state;

    const [selectedImage, setSelectedImage] = useState(null);

    const imageNames = Array.from(
        { length: num },
        (_, index) => `img_${index + 1}.webp`
    );
    const thumbnailImages = imageNames.map((imageName) =>
        require(`../img/${folder}/Small/${imageName}`)
    );

    const shuffledImagesThumbnail = [...thumbnailImages];
    shuffledImagesThumbnail.sort(() => Math.random() - 0.5);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

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
            <Grid
                component="section"
                container
                spacing={2}
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                {shuffledImagesThumbnail.map((image, index) => (
                    <Grid
                        component="article"
                        key={index}
                        item
                        xxs={6}
                        xs={6}
                        sm={4}
                        md={4}
                        lg={3}
                        sx={{
                            display: "inline-flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <Avatar
                            variant="square"
                            src={image}
                            alt={`Collage ${index + 1}`}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            loading="lazy"
                            onClick={() => openModal(image)}
                        />
                    </Grid>
                ))}
            </Grid>
            {selectedImage && (
                <ImageModal
                    open={Boolean(selectedImage)}
                    onClose={closeModal}
                    imageUrl={selectedImage}
                />
            )}
            <BackToTopButton />
        </MainContainer>
    );
}
