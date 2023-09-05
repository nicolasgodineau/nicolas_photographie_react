import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, padding } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default function BackToTopButton() {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <Box
            onClick={scrollToTop}
            aria-label="Back to Top"
            sx={{
                position: "fixed",
                bottom: "5vh",
                right: "3vw",
                backgroundColor: "red",
                display: "flex",
                padding: ".5rem",
                borderRadius: "100px",
                backdropFilter: "blur(20px)",
                backgroundColor: theme.palette.nav,
                cursor: "pointer",
                boxShadow: theme.shadows[9],
            }}
        >
            <KeyboardArrowUpIcon style={{ fontSize: "2rem" }} />
        </Box>
    );
}
