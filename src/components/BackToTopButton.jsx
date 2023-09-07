import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AppBar, Box, Fab, IconButton, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function MyAppBar() {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        toggleVisibility();

        const handleScroll = () => {
            toggleVisibility();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <Fab
                onClick={scrollToTop}
                aria-label="Back to Top"
                color="secondary"
                sx={{
                    position: "fixed",
                    bottom: "5vh",
                    right: "3vw",
                    display: "flex",
                    backdropFilter: "blur(20px)",
                    backgroundColor: theme.palette.background.transparent,
                }}
            >
                <KeyboardArrowUpIcon style={{ fontSize: "2rem" }} />
            </Fab>
        )
    );
}
