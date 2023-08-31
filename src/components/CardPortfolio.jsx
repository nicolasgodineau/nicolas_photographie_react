import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Avatar, Link } from "@mui/material";
import { shadows } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default function CardPortfolio({ title, srcImg, folder, numImg }) {
    const theme = useTheme();

    return (
        <Box
            component="article"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
            }}
        >
            <Box>
                <Link
                    rel="noopener noreferrer"
                    underline="none"
                    component={NavLink}
                    to="/gallery"
                    state={{ folder: folder, num: numImg }}
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poiret One, cursive",
                    }}
                >
                    <Avatar
                        variant="square"
                        src={require(`../img/Ressources/portfolio/${srcImg}.webp`)}
                        sx={{
                            height: "100%",
                            width: "100%",
                            boxShadow: 4,
                        }}
                    />
                </Link>
            </Box>
            <Link
                rel="noopener noreferrer"
                underline="none"
                component={NavLink}
                to="/gallery"
                state={{ folder: folder, num: numImg }}
                variant="h6"
                sx={{
                    backgroundColor: "accent",
                    textAlign: "center",
                    paddingY: ".5rem",
                    boxShadow: 4,
                    textTransform: "uppercase",
                    color:
                        theme.palette.mode === "light"
                            ? theme.palette.common.white
                            : theme.palette.common.black,
                }}
            >
                {title}
            </Link>
        </Box>
    );
}
