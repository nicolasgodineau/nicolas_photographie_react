import React, { useState } from "react";
// Routage
import { useLocation } from "react-router-dom";

// CSS & MUI
import {
    Typography,
    Dialog,
    ImageList,
    ImageListItem,
    useMediaQuery,
    Box,
    Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Componentes & Pages & Autre
import MainContainer from "../components/MainContainer.jsx";
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

    const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xxs"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isXLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = (reason) => {
        if (reason === "backdropClick" || reason === "modalContentClick") {
            setSelectedImage(null);
        }
    };
    const handleCloseModalContent = () => {
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
            <Box
                component="ul"
                sx={{
                    overflow: "hidden",
                    display: "grid",
                    gap: "2vmin",
                    gridTemplateColumns: "repeat(auto-fill, 18rem)",
                    /*                     gridTemplateColumns:
                        "repeat(auto-fill, minmax(19rem, 1fr)) !important", */
                    justifyItems: "center",
                    justifyContent: "center",
                    padding: "0",
                    margin: "0",
                    [theme.breakpoints.down("xs")]: {
                        gridTemplateColumns: "1fr 1fr",
                    },
                }}
            >
                {imageNames.map((image, index) => (
                    <Avatar
                        variant="square"
                        key={index}
                        src={require(`../img/${folder}/Small/${image}`)}
                        loading="lazy"
                        sx={{
                            height: "min(19rem, 19rem)",
                            width: "min(19rem, 19rem)",

                            padding: "1rem",
                            cursor: "pointer",
                            filter: "drop-shadow(0 10px 15px rgb(0 0 0 / 0.06)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
                            transition: "filter",
                            transitionDuration: ".3s",
                            "&.MuiAvatar-root:hover": {
                                filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.5))",
                            },
                            [theme.breakpoints.down("xs")]: {
                                height: "min(20vmax, 19rem)",
                                width: "min(20vmax, 19rem)",
                            },
                        }}
                        onClick={() =>
                            handleImageClick({
                                img: require(`../img/${folder}/${image}`),
                            })
                        }
                    />
                ))}
            </Box>
            <Dialog
                open={!!selectedImage}
                onClose={handleCloseModal}
                onClick={handleCloseModalContent}
                sx={{
                    cursor: "pointer",
                    backdropFilter: "blur(20px)",
                    backgroundColor: theme.palette.background.transparent,
                    ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                        backgroundColor: `unset !important`,
                        borderRadius: "0px !important",
                    },
                }}
            >
                <img
                    src={selectedImage?.img}
                    style={{
                        maxHeight: "70vh",
                        maxWidth: "100%",
                    }}
                />
            </Dialog>
            <BackToTopButton />
        </MainContainer>
    );
}
