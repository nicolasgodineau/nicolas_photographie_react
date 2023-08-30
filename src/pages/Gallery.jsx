import React from "react";
import { useLocation } from "react-router-dom";
import {
    Container,
    CardContent,
    ImageListItem,
    ImageList,
    Avatar,
    Link,
    Typography,
} from "@mui/material";
import ImgCard from "../components/ImgCard.jsx";
import Nav from "../components/Nav.jsx";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer.jsx";

function Gallery() {
    const location = useLocation();
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
                component="section"
                maxWidth="lg"
                disableGutters={false}
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0",
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
                    {folder}{" "}
                </Typography>
                <ImageList
                    cols={4}
                    sx={{
                        gap: "2vmax !important",
                    }}
                >
                    {images.map((image, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={image}
                                alt={`Collage ${index + 1}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
            <Footer />
        </>
    );
}

export default Gallery;
