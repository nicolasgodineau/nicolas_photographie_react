import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Avatar, Link, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CardPortfolio({ title, srcImg, folder, numImg }) {
    const theme = useTheme();

    return (
        <>
            <Link
                rel="noopener noreferrer"
                underline="none"
                component={NavLink}
                to="/gallery"
                state={{ folder: folder, num: numImg }}
                variant="h6"
                sx={{}}
            >
                <Button>
                    <Avatar
                        rel="noopener noreferrer"
                        underline="none"
                        component={NavLink}
                        to="/gallery"
                        state={{ folder: folder, num: numImg }}
                        variant="square"
                        src={require(`../img/Ressources/portfolio/${srcImg}.webp`)}
                        sx={{
                            height: "100%",
                            width: "100%",
                            boxShadow: 4,
                        }}
                    />
                </Button>
                <Button
                    color="ochre"
                    variant="contained"
                    sx={{
                        width: "100%",
                        paddingY: ".5rem",
                        fontSize: "inherit",
                        lineHeight: "initial",
                        fontFamily: "Poiret One",
                        fontWeight: "700 !important",
                        borderRadius: "0",
                    }}
                >
                    {title}
                </Button>
            </Link>{" "}
        </>
    );
}
