import React, { useState, useEffect } from "react";
// Routage
import { useLocation } from "react-router-dom";

// CSS & MUI
import { Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
import ImageModal from "../components/ImageModal.jsx";
import BackToTopButton from "../components/BackToTopButton.jsx";
import ShowMore from "../components/ShowMoreButton.jsx";

export default function Gallery() {
    const location = useLocation("/portfolio");
    const theme = useTheme();
    const { folder, num } = location.state; // Récupère le nombre d'images et le dossier depuis l'état de location
    const [visibleCount, setVisibleCount] = useState(20);
    const [selectedImage, setSelectedImage] = useState(null);
    const [shuffledImagesThumbnail, setShuffledImagesThumbnail] = useState([]);

    // exécuté une seule fois au montage du composant pour mélanger les images
    useEffect(() => {
        const imageNames = Array.from(
            { length: num },
            (_, index) => `img_${index + 1}.webp`
        );
        const thumbnailImages = imageNames.map((imageName) =>
            require(`../img/${folder}/Small/${imageName}`)
        );
        const shuffledImages = [...thumbnailImages];
        shuffledImages.sort(() => Math.random() - 0.5);
        setShuffledImagesThumbnail(shuffledImages);
    }, [folder, num]);

    // Fonction pour charger plus d'images lorsque le bouton "Voir plus" est cliqué
    const loadMoreImages = () => {
        setVisibleCount((prevCount) => prevCount + 20);
    };
    const handleShowMoreClick = () => {
        // Appelle la fonction pour charger plus d'images lorsque le bouton "Voir plus" est cliqué
        loadMoreImages();
    };

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
                {shuffledImagesThumbnail
                    .slice(0, visibleCount)
                    .map((image, index) => (
                        <Grid
                            component="article"
                            key={index}
                            item
                            xxs={5}
                            xs={5}
                            sm={4}
                            md={4}
                            lg={3}
                            sx={{
                                display: "inline-flex",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                variant="square"
                                src={image}
                                alt={`Collage ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    minHeight: "100px",
                                    minWidth: "100px",
                                    maxHeight: "300px",
                                    maxWidth: "300px",
                                    objectFit: "cover",
                                    objectPosition: "50% 50%",
                                    aspectRatio: "1 / 1",
                                    minHeightt: "100%",
                                }}
                                loading="lazy"
                                onClick={() => openModal(image)}
                            />
                        </Grid>
                    ))}
            </Grid>
            {num > 20 && visibleCount < num && (
                <ShowMore
                    onClick={handleShowMoreClick}
                    visibleCount={visibleCount}
                    totalCount={num}
                />
            )}
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
